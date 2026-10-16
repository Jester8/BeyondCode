import math
import wave

import numpy as np


SAMPLE_RATE = 48_000
DURATION = 27.266667
COUNT = round(SAMPLE_RATE * DURATION)
TIME = np.arange(COUNT, dtype=np.float64) / SAMPLE_RATE
BPM = 108
BEAT = 60 / BPM
MUSIC = np.zeros((COUNT, 2), dtype=np.float64)
RNG = np.random.default_rng(2027)


def smoothstep(value):
    value = np.clip(value, 0.0, 1.0)
    return value * value * (3.0 - 2.0 * value)


def add_pluck(start, frequency, amplitude, decay=7.5, duration=0.8, pan=0.0, tone=0.22):
    left = max(0, round(start * SAMPLE_RATE))
    right = min(COUNT, left + round(duration * SAMPLE_RATE))
    if right <= left:
        return
    local = np.arange(right - left, dtype=np.float64) / SAMPLE_RATE
    attack = 1.0 - np.exp(-75 * local)
    envelope = attack * np.exp(-decay * local)
    phase = 2 * math.pi * frequency * local
    signal = np.sin(phase) + tone * np.sin(2.01 * phase) + 0.05 * np.sin(3.98 * phase)
    gains = (math.sqrt((1 - pan) / 2), math.sqrt((1 + pan) / 2))
    MUSIC[left:right, 0] += amplitude * envelope * signal * gains[0]
    MUSIC[left:right, 1] += amplitude * envelope * signal * gains[1]


def add_kick(start, amplitude=0.28):
    left = max(0, round(start * SAMPLE_RATE))
    right = min(COUNT, left + round(0.32 * SAMPLE_RATE))
    if right <= left:
        return
    local = np.arange(right - left, dtype=np.float64) / SAMPLE_RATE
    phase = 2 * math.pi * (65 * local - 26 * local**2)
    body = np.sin(phase) * np.exp(-18 * local)
    click = 0.34 * np.sin(2 * math.pi * 165 * local) * np.exp(-78 * local)
    MUSIC[left:right] += (amplitude * (body + click))[:, None]


def add_clap(start, amplitude=0.073, pan=0.0):
    length = round(0.19 * SAMPLE_RATE)
    left = max(0, round(start * SAMPLE_RATE))
    right = min(COUNT, left + length)
    if right <= left:
        return
    count = right - left
    local = np.arange(count, dtype=np.float64) / SAMPLE_RATE
    noise = RNG.normal(0, 1, count)
    bright = noise - np.concatenate(([0.0], noise[:-1])) * 0.74
    echo_a = np.maximum(local - 0.018, 0)
    echo_b = np.maximum(local - 0.043, 0)
    envelope = np.exp(-30 * local) + 0.48 * np.exp(-43 * echo_a) * (local >= 0.018) + 0.24 * np.exp(-50 * echo_b) * (local >= 0.043)
    signal = amplitude * bright * envelope
    gains = (math.sqrt((1 - pan) / 2), math.sqrt((1 + pan) / 2))
    MUSIC[left:right, 0] += signal * gains[0]
    MUSIC[left:right, 1] += signal * gains[1]


def add_shaker(start, amplitude=0.024, pan=0.0):
    length = round(0.055 * SAMPLE_RATE)
    left = max(0, round(start * SAMPLE_RATE))
    right = min(COUNT, left + length)
    if right <= left:
        return
    count = right - left
    local = np.arange(count, dtype=np.float64) / SAMPLE_RATE
    noise = RNG.normal(0, 1, count)
    bright = noise - np.concatenate(([0.0], noise[:-1])) * 0.82
    signal = amplitude * bright * np.exp(-68 * local)
    gains = (math.sqrt((1 - pan) / 2), math.sqrt((1 + pan) / 2))
    MUSIC[left:right, 0] += signal * gains[0]
    MUSIC[left:right, 1] += signal * gains[1]


# A light D-major progression changes with the six scenes (eight beats each).
CHORDS = [
    [146.83, 185.00, 220.00, 293.66],
    [123.47, 146.83, 185.00, 246.94],
    [98.00, 196.00, 246.94, 293.66],
    [110.00, 220.00, 277.18, 329.63],
    [82.41, 164.81, 196.00, 246.94],
    [146.83, 185.00, 220.00, 293.66],
]
SCENE_BEATS = 8
FADE_BEATS = 0.48


for chord_index, notes in enumerate(CHORDS):
    start = chord_index * SCENE_BEATS * BEAT
    end = (chord_index + 1) * SCENE_BEATS * BEAT
    if chord_index == 0:
        weight = 1.0 - smoothstep((TIME - (end - FADE_BEATS * BEAT / 2)) / (FADE_BEATS * BEAT))
    elif chord_index == len(CHORDS) - 1:
        weight = smoothstep((TIME - (start - FADE_BEATS * BEAT / 2)) / (FADE_BEATS * BEAT))
    else:
        fade_in = smoothstep((TIME - (start - FADE_BEATS * BEAT / 2)) / (FADE_BEATS * BEAT))
        fade_out = 1.0 - smoothstep((TIME - (end - FADE_BEATS * BEAT / 2)) / (FADE_BEATS * BEAT))
        weight = fade_in * fade_out
    breath = 0.94 + 0.06 * np.sin(2 * math.pi * 0.12 * TIME)
    for note_index, frequency in enumerate(notes):
        phase_l = 2 * math.pi * frequency * 0.9985 * TIME
        phase_r = 2 * math.pi * frequency * 1.0015 * TIME
        wave_l = np.sin(phase_l) + 0.14 * np.sin(2 * phase_l)
        wave_r = np.sin(phase_r) + 0.14 * np.sin(2 * phase_r)
        amp = 0.021 if note_index < 3 else 0.014
        MUSIC[:, 0] += amp * weight * breath * wave_l
        MUSIC[:, 1] += amp * weight * breath * wave_r

# Rounded 108 BPM groove: low kick, brushed clap, and a soft offbeat shaker.
for beat_index in range(math.ceil(DURATION / BEAT)):
    start = beat_index * BEAT
    beat_in_bar = beat_index % 4
    if beat_in_bar in (0, 2):
        add_kick(start, 0.26 if beat_in_bar == 0 else 0.21)
    if beat_in_bar in (1, 3):
        add_clap(start, 0.080 if beat_in_bar == 3 else 0.067, pan=-0.08 if beat_in_bar == 1 else 0.08)
    # Uneven velocities create a hand-played feel without crowd or stock effects.
    if beat_in_bar in (0, 2):
        add_shaker(start + BEAT * 0.5, 0.024, pan=0.10)
    else:
        add_shaker(start + BEAT * 0.5, 0.018, pan=-0.10)
    add_shaker(start + BEAT * 0.92, 0.010, pan=0.0)

# A short, memorable marimba-like motif repeats once per scene and follows the chord.
MOTIFS = [
    [587.33, 740.00, 880.00, 740.00, 659.25, 587.33, 493.88, 440.00],
    [493.88, 587.33, 740.00, 587.33, 659.25, 587.33, 493.88, 370.00],
    [392.00, 493.88, 587.33, 493.88, 587.33, 493.88, 440.00, 392.00],
    [440.00, 554.37, 659.25, 554.37, 659.25, 554.37, 493.88, 440.00],
    [329.63, 392.00, 493.88, 392.00, 493.88, 392.00, 369.99, 329.63],
    [587.33, 740.00, 880.00, 740.00, 659.25, 587.33, 493.88, 587.33],
]
for scene_index, motif in enumerate(MOTIFS):
    scene_start = scene_index * SCENE_BEATS * BEAT
    for note_index, frequency in enumerate(motif):
        start = scene_start + note_index * BEAT
        if note_index in (0, 4):
            start += 0.04
        add_pluck(start, frequency, 0.070 if note_index in (0, 4) else 0.052, decay=8.8, duration=0.52, pan=(-0.12 if note_index % 2 else 0.12), tone=0.33)

# Gentle offbeat bass movement gives the bed a little bounce under the voice.
ROOTS = [73.42, 61.74, 49.00, 55.00, 41.20, 73.42]
for scene_index, root in enumerate(ROOTS):
    start = scene_index * SCENE_BEATS * BEAT
    for bar_offset in (0, 4):
        bar = start + bar_offset * BEAT
        for offset, multiplier, velocity in ((0.0, 1.0, 0.11), (1.5, 1.5, 0.075), (2.75, 1.0, 0.09), (3.5, 1.25, 0.065)):
            add_pluck(bar + offset * BEAT, root * multiplier, velocity, decay=5.7, duration=0.5, pan=0.0, tone=0.13)

fade_in = smoothstep(TIME / 0.30)
fade_out = smoothstep((DURATION - TIME) / 1.35)
MUSIC *= (fade_in * fade_out)[:, None]

# Keep headroom so the finished mix can be normalized cleanly with the voice.
pcm = np.clip(MUSIC, -0.88, 0.88)
pcm = (pcm * 32767).astype('<i2')
with wave.open('.codex-build/beyond-code-2027/music_bed.wav', 'wb') as audio:
    audio.setnchannels(2)
    audio.setsampwidth(2)
    audio.setframerate(SAMPLE_RATE)
    audio.writeframes(pcm.tobytes())
