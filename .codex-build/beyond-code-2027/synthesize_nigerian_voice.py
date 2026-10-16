import asyncio
import pathlib
import subprocess
import sys


ROOT = pathlib.Path('/Users/samuel/Documents/BeyondCode/.codex-build/beyond-code-2027')
PACKAGE_DIR = ROOT / 'edge-tts-runtime'
OUTPUT = ROOT / 'narration-en-NG-Ezinne.mp3'
VOICEOVER = (
    "Tech is more than code. It is trust, reach, and value. Beyond Code 2027 is bringing people "
    "building across Nigeria together, right here in Ibadan. We'll explore perception marketing, "
    "AI-assisted building, and ethical communication through live work and open questions. "
    "Join us Saturday, March twenty-seventh. If you'd like to speak, send your bio, headshot, "
    "session idea, and prep-call availability."
)


PACKAGE_DIR.mkdir(parents=True, exist_ok=True)
sys.path.insert(0, str(PACKAGE_DIR))
try:
    import edge_tts
except ImportError:
    subprocess.run(
        [sys.executable, '-m', 'pip', 'install', '--quiet', '--disable-pip-version-check', '--target', str(PACKAGE_DIR), 'edge-tts'],
        check=True,
    )
    sys.path.insert(0, str(PACKAGE_DIR))
    import edge_tts


async def main():
    communicator = edge_tts.Communicate(
        VOICEOVER,
        'en-NG-EzinneNeural',
        rate='+4%',
        pitch='+0Hz',
        volume='+0%',
    )
    await communicator.save(str(OUTPUT))


asyncio.run(main())
print(OUTPUT)
