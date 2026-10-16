import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const workspaceDir = '/Users/samuel/Documents/BeyondCode';
const buildDir = path.join(workspaceDir, '.codex-build/beyond-code-2027');
const sceneDir = path.join(buildDir, 'animated-scene-layers');
const backgroundPath = path.join(buildDir, 'motion-background.png');
const stagePath = path.join(buildDir, 'human-stage.png');
const workshopPath = path.join(buildDir, 'human-workshop.png');
const networkingPath = path.join(buildDir, 'human-networking.png');
const hostPortraitPath = path.join(workspaceDir, 'assets', 'speaker_1_full.jpg');
const outputPath = path.join(buildDir, 'animated-silent-base.mp4');
const rsvg = '/opt/homebrew/bin/rsvg-convert';
const ffmpeg = '/opt/homebrew/bin/ffmpeg';
const WIDTH = 1920;
const HEIGHT = 1080;
const FONT = 'Avenir Next';
const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const scenes = [
  {
    eyebrow: 'THE BUSINESS OF TECH',
    title: ['Beyond Code', '2027'],
    support: ['Everything that happens after the code.'],
    footer: 'SATURDAY 27 MARCH 2027  ·  IBADAN, OYO STATE',
    number: '01',
    tint: '#22102E',
    details: [
      { icon: 'calendar', title: '27 MARCH 2027', body: 'Saturday · 8:30am–6:00pm' },
      { icon: 'pin', title: 'IBADAN', body: 'Oyo State · venue to be confirmed' },
    ],
  },
  {
    eyebrow: 'THE WORK BEHIND THE WORK',
    title: ['Everything that happens', 'after the code.'],
    support: ['Trust.  Reach.  Revenue.'],
    footer: 'A gathering for the people building what comes next.',
    number: '02',
    tint: '#1D1228',
    details: [
      { icon: 'shield', title: 'TRUST', body: 'Signals people believe' },
      { icon: 'reach', title: 'REACH', body: 'Find the people who need it' },
      { icon: 'coin', title: 'REVENUE', body: 'Explain and price value' },
    ],
  },
  {
    eyebrow: 'ONE ROOM · THREE CONVERSATIONS',
    title: ['Three practical', 'ways to move tech forward.'],
    support: ['Perception marketing  ·  AI-assisted building', 'Communication and ethics'],
    footer: 'Real examples, audience participation and useful takeaways.',
    number: '03',
    tint: '#24122D',
    image: stagePath,
    details: [
      { icon: 'megaphone', title: 'MARKETING', body: 'Trust, positioning, growth' },
      { icon: 'code', title: 'THE BUILD', body: 'Ship a room-chosen feature' },
      { icon: 'chat', title: 'ETHICS', body: 'Clear, fair communication' },
    ],
  },
  {
    eyebrow: 'BUILT FOR PARTICIPATION',
    title: ['Less theory.', 'More live work.'],
    support: ['Live builds  ·  product audits  ·  open questions'],
    footer: 'Grounded in Nigerian business and technology realities.',
    number: '04',
    tint: '#1C1325',
    image: workshopPath,
    details: [
      { icon: 'laptop', title: 'BUILD LIVE', body: 'Review · test · ship' },
      { icon: 'bolt', title: 'REAL CONTEXT', body: 'AI · local payments · networks' },
      { icon: 'chat', title: 'OPEN Q&A', body: 'Bring questions into the room' },
    ],
  },
  {
    eyebrow: 'WHY SPEAK',
    title: ['A room of 100', 'tech professionals.'],
    support: ['Networking  ·  demo corner  ·  question board', 'Four games  ·  live laptop raffle'],
    footer: 'Engineers  ·  designers  ·  founders  ·  marketers  ·  operators',
    number: '05',
    tint: '#24112C',
    image: networkingPath,
    details: [
      { icon: 'people', title: '100 PEOPLE', body: 'Working across technology' },
      { icon: 'link', title: 'CONNECTIONS', body: 'Peers · collaborators · clients' },
      { icon: 'camera', title: 'VISIBILITY', body: 'Photos · clips · spotlight' },
    ],
  },
  {
    eyebrow: 'BRING YOUR EXPERIENCE TO IBADAN',
    title: ['Beyond Code', '27 March 2027'],
    support: ['Speaker invitation  ·  reply with a bio, headshot, session angle', 'and prep-call availability.'],
    footer: 'EMAIL + PHONE / WHATSAPP CONTACT DETAILS TO BE ADDED',
    number: '06',
    tint: '#21122C',
    image: backgroundPath,
    portrait: hostPortraitPath,
    details: [
      { icon: 'checklist', title: 'YOUR BIO', body: 'About 80 words' },
      { icon: 'camera', title: 'HEADSHOT', body: 'High resolution' },
      { icon: 'calendar', title: 'YOUR ANGLE', body: 'Plus prep-call availability' },
    ],
  },
];

function iconMarkup(icon, x, y) {
  const g = (content) => `<g transform="translate(${x} ${y})" fill="none" stroke="#AEE8CE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${content}</g>`;
  const body = {
    calendar: '<rect x="5" y="7" width="30" height="28" rx="4"/><path d="M12 4v7M28 4v7M5 15h30"/><path d="M13 22h4M23 22h4M13 29h4"/>',
    pin: '<path d="M20 37s13-12 13-22a13 13 0 1 0-26 0c0 10 13 22 13 22Z"/><circle cx="20" cy="15" r="4"/>',
    shield: '<path d="M20 4 33 9v10c0 9-6 15-13 19C13 34 7 28 7 19V9l13-5Z"/><path d="m13 20 5 5 10-11"/>',
    reach: '<circle cx="20" cy="21" r="3" fill="#AEE8CE"/><path d="M12 13a11 11 0 0 0 0 16M28 13a11 11 0 0 1 0 16M7 8a18 18 0 0 0 0 26M33 8a18 18 0 0 1 0 26"/>',
    coin: '<circle cx="20" cy="20" r="16"/><path d="M14 12v17M14 12h9a5 5 0 0 1 0 10h-9M14 22h10M22 22l4 7"/>',
    megaphone: '<path d="M6 18v12h8l17 7V11l-17 7H6Z"/><path d="m14 30 3 10h7l-5-8M35 17a11 11 0 0 1 0 12"/>',
    code: '<rect x="4" y="5" width="32" height="28" rx="4"/><path d="m15 14-6 5 6 5M25 14l6 5-6 5M18 27l4-13"/><path d="M15 38h10M20 33v5"/>',
    chat: '<path d="M5 7h30v22H18l-9 7v-7H5V7Z"/><path d="M12 15h16M12 21h11"/>',
    laptop: '<rect x="7" y="5" width="26" height="22" rx="3"/><path d="M3 34h34l-4-7H7l-4 7Z"/><path d="m16 12-4 4 4 4M24 12l4 4-4 4"/>',
    bolt: '<path d="M23 3 8 22h10l-2 15 16-22H21l2-12Z"/>',
    people: '<circle cx="20" cy="12" r="6"/><circle cx="7" cy="16" r="4"/><circle cx="33" cy="16" r="4"/><path d="M8 36c1-8 5-12 12-12s11 4 12 12M2 34c0-6 2-9 7-10M38 34c0-6-2-9-7-10"/>',
    link: '<path d="M16 25 12 29a7 7 0 0 1-10-10l8-8a7 7 0 0 1 10 0M24 15l4-4a7 7 0 0 1 10 10l-8 8a7 7 0 0 1-10 0M13 24l14-14M13 27l14-14"/>',
    camera: '<rect x="4" y="11" width="32" height="23" rx="4"/><path d="m13 11 3-5h9l3 5"/><circle cx="20" cy="22" r="7"/>',
    checklist: '<rect x="7" y="5" width="27" height="32" rx="4"/><path d="m12 15 3 3 5-6M23 15h6M12 27l3 3 5-6M23 27h6"/>',
  }[icon] ?? '<circle cx="20" cy="20" r="14"/>';
  return g(body);
}

function detailWidgets(details) {
  const cardWidth = details.length === 2 ? 390 : 332;
  const gap = 24;
  return details.map((d, index) => {
    const x = 128 + index * (cardWidth + gap);
    return `<g>
      <rect x="${x}" y="752" width="${cardWidth}" height="124" rx="20" fill="#20142B" fill-opacity="0.62" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5"/>
      <circle cx="${x + 52}" cy="814" r="31" fill="#FFFFFF" fill-opacity="0.10"/>
      ${iconMarkup(d.icon, x + 32, 794)}
      <text x="${x + 98}" y="805" font-family="${FONT}" font-size="21" font-weight="700" letter-spacing="1.1" fill="#AEE8CE">${esc(d.title)}</text>
      <text x="${x + 98}" y="841" font-family="${FONT}" font-size="17" font-weight="500" fill="#FFFFFF" fill-opacity="0.87">${esc(d.body)}</text>
    </g>`;
  }).join('\n');
}

function sceneSvg(scene, index, imageDataUrl, portraitDataUrl, layer) {
  const titleY = scene.title.length === 1 ? [444] : [398, 530];
  const supportY = scene.support.length === 1 ? [670] : [658, 706];
  const titleElements = scene.title.map((line, i) =>
    `<text x="128" y="${titleY[i]}" font-family="${FONT}" font-size="112" font-weight="700" letter-spacing="-2.5" fill="#FFFFFF">${esc(line)}</text>`,
  ).join('\n');
  const supportElements = scene.support.map((line, i) =>
    `<text x="132" y="${supportY[i]}" font-family="${FONT}" font-size="34" font-weight="500" letter-spacing="0.2" fill="#FFFFFF" fill-opacity="0.83">${esc(line)}</text>`,
  ).join('\n');
  const portraitElement = portraitDataUrl ? `
  <defs><clipPath id="hostPortraitClip"><rect x="1464" y="220" width="384" height="512" rx="28"/></clipPath></defs>
  <rect x="1457" y="213" width="398" height="526" rx="34" fill="#FFFFFF" fill-opacity="0.12" stroke="#FFFFFF" stroke-opacity="0.34" stroke-width="2"/>
  <image x="1464" y="220" width="384" height="512" preserveAspectRatio="xMidYMid slice" href="${portraitDataUrl}" xlink:href="${portraitDataUrl}" clip-path="url(#hostPortraitClip)"/>
  <rect x="1464" y="752" width="384" height="92" rx="18" fill="#20142B" fill-opacity="0.78" stroke="#FFFFFF" stroke-opacity="0.28" stroke-width="1.5"/>
  <text x="1490" y="790" font-family="${FONT}" font-size="22" font-weight="700" letter-spacing="1" fill="#AEE8CE">SAM  ·  CONVENER</text>
  <text x="1490" y="819" font-family="${FONT}" font-size="16" font-weight="500" fill="#FFFFFF" fill-opacity="0.86">Beyond Code 2027</text>` : '';
  const definitions = `
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${scene.tint}" stop-opacity="0.97"/>
      <stop offset="0.57" stop-color="${scene.tint}" stop-opacity="0.80"/>
      <stop offset="1" stop-color="${scene.tint}" stop-opacity="0.24"/>
    </linearGradient>
    <radialGradient id="glow" cx="74%" cy="46%" r="58%">
      <stop offset="0" stop-color="#B9A1FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#B9A1FF" stop-opacity="0"/>
    </radialGradient>`;
  const background = `
  <image x="0" y="0" width="${WIDTH}" height="${HEIGHT}" preserveAspectRatio="xMidYMid slice" href="${imageDataUrl}" xlink:href="${imageDataUrl}"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
  <circle cx="1610" cy="${220 + (index % 3) * 85}" r="255" fill="none" stroke="#AEE8CE" stroke-opacity="0.20" stroke-width="2"/>
  <circle cx="1610" cy="${220 + (index % 3) * 85}" r="188" fill="none" stroke="#CBBCE7" stroke-opacity="0.14" stroke-width="2"/>
  <circle cx="1742" cy="${350 + (index % 3) * 58}" r="8" fill="#AEE8CE" fill-opacity="0.85"/>
  <text x="1510" y="850" font-family="${FONT}" font-size="390" font-weight="700" fill="#FFFFFF" fill-opacity="0.055">${scene.number}</text>`;
  const textLayer = `
  ${portraitElement}
  <rect x="128" y="109" width="58" height="6" rx="3" fill="#AEE8CE"/>
  <text x="128" y="177" font-family="${FONT}" font-size="26" font-weight="700" letter-spacing="2.1" fill="#FFFFFF" fill-opacity="0.93">BEYOND CODE 2027</text>
  <text x="132" y="260" font-family="${FONT}" font-size="23" font-weight="700" letter-spacing="2.5" fill="#AEE8CE">${esc(scene.eyebrow)}</text>
  ${titleElements}
  <rect x="132" y="602" width="60" height="4" rx="2" fill="#AEE8CE"/>
  ${supportElements}
  <rect x="128" y="918" width="1664" height="1" fill="#FFFFFF" fill-opacity="0.26"/>
  <text x="130" y="971" font-family="${FONT}" font-size="22" font-weight="600" letter-spacing="0.9" fill="#FFFFFF" fill-opacity="0.76">${esc(scene.footer)}</text>
  <text x="1747" y="971" font-family="${FONT}" font-size="19" font-weight="700" fill="#AEE8CE">${scene.number} / 06</text>`;
  const content = layer === 'background' ? background : layer === 'text' ? textLayer : detailWidgets(scene.details);
  const defs = layer === 'background' ? `<defs>${definitions}</defs>` : '';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  ${defs}${content}
</svg>`;
}

await fs.mkdir(sceneDir, { recursive: true });
if (await fs.stat(outputPath).then(() => true).catch(() => false)) {
  throw new Error(`Refusing to overwrite existing video: ${outputPath}`);
}

const clipPaths = [];
for (let i = 0; i < scenes.length; i++) {
  const stem = `scene-${String(i + 1).padStart(2, '0')}`;
  const imagePath = scenes[i].image ?? backgroundPath;
  const imageDataUrl = `data:image/png;base64,${(await fs.readFile(imagePath)).toString('base64')}`;
  const portraitDataUrl = scenes[i].portrait ? `data:image/jpeg;base64,${(await fs.readFile(scenes[i].portrait)).toString('base64')}` : '';
  const pngPaths = {};
  for (const layer of ['background', 'text', 'cards']) {
    const svgPath = path.join(sceneDir, `${stem}-${layer}.svg`);
    const pngPath = path.join(sceneDir, `${stem}-${layer}.png`);
    await fs.writeFile(svgPath, sceneSvg(scenes[i], i, imageDataUrl, portraitDataUrl, layer), 'utf8');
    await execFileAsync(rsvg, ['--width', String(WIDTH), '--height', String(HEIGHT), '--output', pngPath, svgPath]);
    pngPaths[layer] = pngPath;
  }
  const clipPath = path.join(sceneDir, `${stem}.mp4`);
  await execFileAsync(ffmpeg, [
    '-y', '-loop', '1', '-framerate', '30', '-i', pngPaths.background,
    '-loop', '1', '-framerate', '30', '-i', pngPaths.text,
    '-loop', '1', '-framerate', '30', '-i', pngPaths.cards,
    '-filter_complex',
    `[0:v]zoompan=z='min(zoom+0.00042,1.05)':x='(iw-iw/zoom)*${i % 2 ? '0.84-on/235' : '0.12+on/235'}':y='ih/2-(ih/zoom/2)':d=1:s=1920x1080:fps=30,format=rgba,setpts=PTS-STARTPTS[bg];` +
    `[1:v]format=rgba,fade=t=in:st=0.08:d=0.65:alpha=1,format=yuva420p,trim=duration=5,setpts=PTS-STARTPTS[txt];` +
    `[2:v]format=rgba,fade=t=in:st=0.48:d=0.58:alpha=1,format=yuva420p,trim=duration=5,setpts=PTS-STARTPTS[cards];` +
    `[bg][txt]overlay=x=0:y='if(lt(t,0.72),30*(1-t/0.72),0)':eval=frame:format=auto[main];` +
    `[main][cards]overlay=x=0:y='if(lt(t,0.76),22*(1-t/0.76),0)':eval=frame:format=auto,format=yuv420p,trim=duration=5,settb=1/30,setpts=PTS-STARTPTS[vout]`,
    '-map', '[vout]', '-t', '5', '-frames:v', '150', '-an', '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', clipPath,
  ], { maxBuffer: 10 * 1024 * 1024 });
  clipPaths.push(clipPath);
}

const filters = [];
const transitions = ['fade', 'smoothleft', 'wipeleft', 'smoothright', 'fadeblack'];
for (let i = 1; i < clipPaths.length; i++) {
  const left = i === 1 ? '[0:v]' : `[mix${i - 1}]`;
  const right = `[${i}:v]`;
  const out = i === clipPaths.length - 1 ? '[mixfinal]' : `[mix${i}]`;
  const offset = (i * 4.45).toFixed(2);
  filters.push(`${left}${right}xfade=transition=${transitions[i - 1]}:duration=0.55:offset=${offset}${out}`);
}
filters.push('[mixfinal]fade=t=out:st=26.45:d=0.8[vout]');
const args = ['-y'];
for (const clipPath of clipPaths) args.push('-i', clipPath);
args.push('-filter_complex', filters.join(';'), '-map', '[vout]', '-an', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', outputPath);
await execFileAsync(ffmpeg, args, { maxBuffer: 20 * 1024 * 1024 });

const { stdout } = await execFileAsync('/opt/homebrew/bin/ffprobe', ['-v', 'error', '-show_entries', 'format=duration,size', '-show_entries', 'stream=codec_name,width,height,r_frame_rate', '-of', 'json', outputPath]);
console.log(stdout);
