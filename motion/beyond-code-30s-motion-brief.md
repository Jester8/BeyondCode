# Beyond Code 2027: 30 second motion graphic

One film, built around one character: **the glass cursor**. It is the same cursor that sits in the website hero, so the video and the site feel like one brand. The cursor travels through the whole film and "clicks" its way from the code to the business of tech, then clicks Register.

All facts on screen come from the site: Beyond Code 2027, The Business of Tech, Saturday 27 March 2027, 10:00am to 2:00pm, 100 seats, four sessions (The Market, The Sale, The Money, The Pitch Pit), Pitch Pit = five founders, 3 minutes each plus 3 minutes of feedback, Ask Board, role coloured badges, investor office hours, raffle. Venue is still `[Venue, city]`, so the film leaves it off and the end card says "Venue announced soon" until it is confirmed.

---

## 1. The idea in one line

> You shipped the code. Now comes everything after it.

Tone: confident, warm, a little cinematic. Not corporate. Fast cuts on the beat, calm hold at the end.

---

## 2. Specs

| | |
|---|---|
| Length | 30.0 s |
| Master | 1920 × 1080, 30 fps, 16:9 |
| Reframes | 1080 × 1920 (9:16 Reels, Stories, TikTok) and 1080 × 1350 (4:5 feed) built from the same timeline, text and cursor kept inside the centre safe zone |
| Captions | Everything is on screen text. Most people watch muted, so the film must work with no sound and no voiceover |
| Delivery | H.264 MP4, 12 Mbps for the master, plus a 6 s teaser cut (scenes 1 to 3 and the CTA) |
| Loudness | Music mixed to about -14 LUFS, true peak -1 dBTP |

---

## 3. Design system (taken from the website)

**Colour**

| Role | Hex |
|---|---|
| Background | `#050109` night, with `#0F0620` glow pools |
| Panels and glass | `#2E1065` plum, `#4C1D95` grape |
| Brand purple | `#7C3AED` amethyst, `#A78BFA` lilac, `#C4B5FD` mist |
| Text | `#F5F0FF` snow, `#DDD0FF` haze |
| Accent (one per scene, never more) | `#6EE7B7` mint for the "now" highlight, the CTA and numbers |

**Type**: Manrope. Headlines ExtraBold 800, tight tracking (-3%). Labels ExtraBold uppercase with wide tracking (+20%) in lilac or mint, exactly like the site eyebrows. Sizes at 1080p: headline 150 px, sub line 52 px, label 26 px. Maximum 7 words per screen.

**Look**: dark, frosted glass objects with a violet rim light, soft lilac glow, a faint 120 px grid in the background (the site's `grid-bg`), slow parallax between near and far objects, subtle film grain at 3%. No flat stock icons anywhere.

**Motion language**
- Primary ease: back-out with a small overshoot (the same feel as the site's `back.out(1.7)`), 0.5 to 0.7 s.
- Secondary ease: cubic-bezier(.65, 0, .35, 1) for camera moves and wipes.
- Objects enter with scale 0.5 to 1 plus fade, stagger 0.08 s.
- Floating objects bob 8 to 12 px on a 2 s loop so no frame is ever fully still.
- Text enters line by line with a mask reveal (the site's `hero-line`), and leaves with a fast 0.2 s fade.
- Every cut lands on a beat (see the music section, one bar is exactly 2.0 s).
- The cursor does a tiny press (scale to 0.92 and back, 0.12 s) on every "click", each with a ring ripple.

---

## 4. Icons and assets

**Already made (use as is, backgrounds removed):**

| Asset | File | Used in |
|---|---|---|
| Hero cursor | `hero_cursor.png` | the character, in every scene |
| Code brackets | `icon_code.png` | scene 1 and scene 3 |
| Rocket | `icon_rocket.png` | scene 2 (the product launching) |
| Bolt | `icon_bolt.png` | beat hits and the speed cuts |
| Stacked panels, spotlight and stage, connected cursors | `card_sessions`, `card_pitch`, `card_network` | backdrops for scenes 4 to 6 and 8 |

**Still to generate** (same STYLE LOCK and prompts as in `image_prompts.md`, sections 5 to 9):

| Asset | Scene it carries |
|---|---|
| `icon_chart.png` | The Market |
| `icon_chat.png` | The Sale |
| `icon_coin.png` | The Money |
| `icon_mic.png` | The Pitch Pit |
| `icon_network.png` | Networking |

**One extra element to draw in the motion tool (no image needed):** a role badge, a rounded rectangle with a small coloured dot, in three colours (mint, lilac, amethyst), used in the networking scene. And a simple "Register" button in mist `#C4B5FD` with ink text, copied from the site.

---

## 5. Storyboard and timeline

The film is 15 bars at 120 BPM. One bar is 2.0 s, one beat is 0.5 s. Timecodes are in seconds.

### Scene 1: Hook (0:00 to 0:02, bar 1)
- **Visual:** pure black. A single blinking text cursor appears centre screen, on a faint grid. The grid slowly fades in. A glass `icon_code` floats up from below, small, soft focus.
- **Text:** `You shipped the code.` (mask reveal, snow on night)
- **Sound:** near silence, low pad fades in, one soft glass tick on the text.

### Scene 2: The turn (0:02 to 0:04, bar 2)
- **Visual:** the text cursor stretches and morphs into the big glass cursor (`hero_cursor`), which swings in with a light bloom. The rocket crosses behind it, small and out of focus.
- **Text:** line 1 fades out, line 2 in: `Now comes everything after.` The word *after* turns mint.
- **Sound:** riser builds, filtered noise sweep, rising pitch on the last beat.

### Scene 3: Title (0:04 to 0:06, bar 3, the drop)
- **Visual:** hard cut on the beat. White-lilac flash for 3 frames, then the cursor "clicks" the centre. The words build behind it, huge. Bolt streaks wipe across the frame once. The `icon_code` returns on the left, rocket on the right, as in the hero layout.
- **Text:** `BEYOND CODE 2027` with `2027` in the purple to lilac gradient used on the site. Sub label below: `THE BUSINESS OF TECH` in mint.
- **Sound:** kick and sub drop, low impact, bright pluck chord stab. Rhythm starts here.

### Scene 4: The Market (0:06 to 0:08, bar 4)
- **Visual:** cut slides to the `card_sessions` stack of glass panels. The cursor flies to the top panel and clicks, a ripple runs down all four panels. `icon_chart` pops above, bars growing.
- **Text:** label `SESSION 1`, headline `The Market`, sub `What actually sells in Nigeria.`
- **Sound:** UI click on the press, soft arp note up a step.

### Scene 5: The Sale (0:08 to 0:10, bar 5)
- **Visual:** panels slide left, new set slides in. Cursor clicks, `icon_chat` pops with three dots typing, then a mint check mark.
- **Text:** `SESSION 2`, `The Sale`, `Pitches, pages and getting paid.`
- **Sound:** click, notification ping, arp up another step.

### Scene 6: The Money (0:10 to 0:12, bar 6)
- **Visual:** same move. `icon_coin` spins once on its edge and settles. A small mint number ticks up behind it.
- **Text:** `SESSION 3`, `The Money`, `What investors look for.`
- **Sound:** click, coin shimmer, arp to the top of the phrase.

### Scene 7: The Pitch Pit (0:12 to 0:18, bars 7 to 9)
This is the emotional peak, so it gets three bars.
- **0:12 to 0:14:** music strips back to bass and a heartbeat. Cut to the `card_pitch` spotlight. The cursor lands on the stage disc and the `icon_mic` rises into the beam. Label `SESSION 4`, headline `The Pitch Pit`.
- **0:14 to 0:16:** three counters pop in on the beat, side by side, each with a ring that draws itself: `5 founders` · `3 min pitch` · `3 min feedback`. Numbers mint, labels haze. Each counter has its own tick.
- **0:16 to 0:18:** the spotlight widens and a soft crowd of small glass dots lights up behind. Headline line: `Live. In front of the room.` Snare roll into the next scene.
- **Sound:** filtered build, mic pop on the first frame, three counter ticks on the beat, crowd swell, snare roll in the last half bar.

### Scene 8: Networking (0:18 to 0:22, bars 10 to 11)
- **Visual:** drop back in with full groove. `card_network` constellation: three cursors connected by light lines. Role badges (mint, lilac, amethyst) pop onto the cursors one by one. A small "Ask" note card slides between two cursors and a line lights up: the match. Investor office hours shown as a glowing line to a larger cursor.
- **Text:** `Find your people in minutes.` then smaller `Ask Board · Role badges · Investor office hours`
- **Sound:** full beat, pluck pattern, a soft connection chime each time a line lights.

### Scene 9: The day in numbers (0:22 to 0:26, bars 12 to 13)
- **Visual:** the camera pulls back through the glass objects. Three big stat tiles snap in with the bolt wipe between each: `100 seats`, `1 day`, `4 sessions`. Date line builds under them.
- **Text:** `Saturday 27 March 2027` / `10:00am to 2:00pm` / `Open to all tech professionals`
- **Sound:** key lift (music rises a step), claps or a shaker added, one riser in the last beat.

### Scene 10: Call to action (0:26 to 0:30, bars 14 to 15)
- **Visual:** everything pulls into the cursor, which glows and settles centre. The logo lockup (`Beyond Code 2027`) sits above it. The Register button draws itself, the cursor moves to it and clicks, a mint ring ripples out. Hold clean for the last 1.5 s.
- **Text:** `Reserve your seat.` Button: `Register`. Below: site address and `Venue announced soon`.
- **Sound:** last big hit with the cursor click, then 1.5 s of reverb tail fading to silence.

---

## 6. Soundtrack

I cannot generate or license audio from here, so this is the exact direction to source or generate it.

**Style:** modern electronic pop with a cinematic edge, in the family of tech product launch trailers. Confident, bright, forward. Not trap, not EDM festival, not corporate ukulele.

**Tempo and key:** 120 BPM, D minor (lifts to E minor for scenes 9 and 10). 120 BPM makes one bar exactly 2 seconds, which is why every scene is 2 s or a multiple of it.

**Instruments:** warm pad, plucky synth arp, tight four-on-the-floor kick, sub bass, light shaker, glassy bell and chime for the accents. No vocals.

**Structure against the picture**

| Time | Bars | Music |
|---|---|---|
| 0:00 to 0:02 | 1 | Pad only, a low heartbeat |
| 0:02 to 0:04 | 2 | Riser, filter sweep, pitch rises |
| 0:04 to 0:06 | 3 | The drop. Kick, sub, chord stab |
| 0:06 to 0:12 | 4 to 6 | Groove with an arp that climbs one step per session |
| 0:12 to 0:18 | 7 to 9 | Strip back to bass and heartbeat, build tension, snare roll into the next scene |
| 0:18 to 0:22 | 10 to 11 | Full groove returns, warmer |
| 0:22 to 0:26 | 12 to 13 | Key lift, added shaker, last-beat riser |
| 0:26 to 0:30 | 14 to 15 | Final hit on the click, long reverb tail |

**Where to get it**

1. **Generate:** paste this into Suno, Udio or ElevenLabs Music.
   `30 second instrumental, 120 BPM, D minor, modern electronic pop with a cinematic edge for a tech conference launch film. Starts with a quiet pad, a riser into a big drop at 4 seconds, four on the floor kick, plucky climbing arpeggio, a stripped-back tension section from 12 to 18 seconds with a snare roll, then the full groove returns, lifts a key at 22 seconds and ends on one big hit with a long reverb tail. No vocals.`
2. **Library:** search Artlist, Epidemic Sound, Uppbeat or Pixabay Music for `tech launch`, `corporate electronic`, `inspiring technology`, `cinematic pop`, 115 to 125 BPM, instrumental. Pick one with a clear drop and trim to the structure above.
3. **Check the licence** covers social media and paid ads before using it.

**Sound effects (use short, clean one-shots)**

| Time | Effect |
|---|---|
| 0:01 | soft glass tick |
| 0:03.5 | rising whoosh into the drop |
| 0:04 | impact hit |
| every cursor click (0:06, 0:08, 0:10, 0:26+) | crisp UI click |
| 0:08.5 | notification ping |
| 0:10.5 | coin shimmer |
| 0:12 | mic pop |
| 0:14 / 0:15 / 0:15.5 | three counter ticks |
| 0:18 to 0:22 | light connection chime on each line |
| 0:27 | click then a bright ring-out |

---

## 7. Voiceover (optional)

The film works with no voice. If you add one, keep it low and short, a warm confident voice, no hype:

> You shipped the code. Now comes everything after. Beyond Code 2027, the business of tech. The market. The sale. The money. And the Pitch Pit: five founders, three minutes each. Find your people in minutes. Saturday 27 March. One hundred seats. Reserve yours.

Duck the music by 6 dB under the voice.

---

## 8. How to build it

**Best fit: After Effects.** Import the PNGs, one comp per scene, one master comp. The cursor is a single layer with position keyframes carried across scenes.

**Fastest fit: HTML with GSAP, then record.** The website already uses GSAP, so the same glass assets and easing are ready. I can build the whole 30 seconds as a self-playing HTML page using the real assets and export it to MP4 with ffmpeg. That also gives you the 9:16 and 4:5 cuts from one source.

**Production order**
1. Generate the five missing glass icons.
2. Pick or generate the track, and place a marker on every bar line (every 2.0 s).
3. Build scenes 3 to 10 first (they carry the idea), then scenes 1 and 2.
4. Add sound effects, balance against the music.
5. Reframe to 9:16 and 4:5, export, then make the 6 s teaser.

---

## 9. Checklist before export

- Every text screen is readable for at least 1.5 s.
- Maximum seven words per screen, one mint accent per scene.
- Cuts all land on a beat.
- Nothing is cut off in the 9:16 safe zone.
- Film makes sense with the sound off.
- Final frame holds clean for 1.5 s with the Register button and the site address.
- Venue line says "announced soon" until the venue is confirmed.
