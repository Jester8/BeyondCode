import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspaceDir = '/Users/samuel/Documents/BeyondCode';
const buildDir = path.join(workspaceDir, '.codex-build/beyond-code-2027');
const outputDir = path.join(workspaceDir, 'output');
const finalPath = path.join(outputDir, 'Beyond-Code-2027-Speaker-Pitch-Deck.pptx');
const backgroundPath = path.join(buildDir, 'motion-background.png');
const skillDir = '/Users/samuel/.codex/plugins/cache/openai-primary-runtime/presentations/26.1013.11914/skills/presentations';
const runtimePython = '/Users/samuel/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';
process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES = '/Users/samuel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
process.env.RUNTIME_NODE_MODULES = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES;
const W = 1280;
const H = 720;
const FONT = 'Avenir Next';
const C = {
  plum: '#281532',
  deep: '#1E1126',
  purple: '#7354A4',
  violet: '#9B7AC7',
  lilac: '#CBBCE7',
  mint: '#AEE8CE',
  paper: '#FAF8FC',
  white: '#FFFFFF',
  ink: '#261A2C',
  muted: '#746B79',
  line: '#E7E0EC',
  soft: '#F0EAF6',
};

function shape(slide, geometry, x, y, w, h, fill, name, options = {}) {
  return slide.shapes.add({
    geometry,
    name,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: options.line ?? { style: 'solid', fill: 'none', width: 0 },
    ...(options.borderRadius ? { borderRadius: options.borderRadius } : {}),
  });
}

function rect(slide, x, y, w, h, fill, name, radius = 0) {
  return shape(slide, radius ? 'roundRect' : 'rect', x, y, w, h, fill, name, radius ? { borderRadius: radius } : {});
}

function text(slide, value, x, y, w, h, opts = {}) {
  const el = slide.shapes.add({
    geometry: 'textbox',
    name: opts.name,
    position: { left: x, top: y, width: w, height: h },
    fill: 'none',
    line: { style: 'solid', fill: 'none', width: 0 },
  });
  el.text = value;
  el.text.insets = 0;
  el.text.style = {
    typeface: opts.font ?? FONT,
    fontSize: opts.size ?? 22,
    color: opts.color ?? C.ink,
    bold: opts.bold ?? false,
    alignment: opts.align ?? 'left',
    ...(opts.italic ? { italic: true } : {}),
  };
  return el;
}

function pill(slide, label, x, y, w, fill = C.soft, color = C.purple) {
  rect(slide, x, y, w, 30, fill, `pill-${label.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`, 15);
  text(slide, label, x + 12, y + 7, w - 24, 18, { size: 12, color, bold: true });
}

function footer(slide, n, dark = false) {
  const color = dark ? '#FFFFFF/68' : C.muted;
  const rule = dark ? '#FFFFFF/25' : C.line;
  rect(slide, 64, 674, 1152, 1, rule, `footer-rule-${n}`);
  text(slide, 'BEYOND CODE 2027  /  SPEAKER INVITATION', 64, 688, 620, 18, { size: 11, color, bold: true });
  text(slide, `${String(n).padStart(2, '0')}  /  09`, 1110, 687, 106, 18, { size: 12, color, bold: true, align: 'right' });
}

function header(slide, eyebrow, title, subtitle, n) {
  slide.background.fill = C.paper;
  text(slide, eyebrow.toUpperCase(), 64, 48, 700, 20, { size: 12, color: C.purple, bold: true });
  text(slide, title, 64, 85, 1140, 72, { size: 42, color: C.ink, bold: true });
  if (subtitle) text(slide, subtitle, 66, 160, 1080, 40, { size: 19, color: C.muted });
  footer(slide, n);
}

const presentation = Presentation.create({ slideSize: { width: W, height: H } });

// 1 — Cover
{
  const slide = presentation.slides.add();
  slide.background.fill = C.deep;
  const bgBytes = await fs.readFile(backgroundPath);
  slide.images.add({ blob: new Uint8Array(bgBytes), contentType: 'image/png', alt: 'Abstract violet light forms on a dark plum field', fit: 'cover', position: { left: 0, top: 0, width: W, height: H } });
  rect(slide, 0, 0, W, H, 'linear(0deg, #1E1126/92 0%, #1E1126/58 58%, #1E1126/12 100%)', 'cover-dark-wash');
  rect(slide, 64, 64, 42, 5, C.mint, 'cover-brand-mark', 3);
  text(slide, 'BEYOND CODE', 64, 88, 520, 34, { size: 18, color: C.white, bold: true });
  pill(slide, 'SPEAKER INVITATION', 64, 178, 210, '#FFFFFF/14', C.mint);
  text(slide, 'The Business\nof Tech', 64, 238, 720, 190, { size: 70, color: C.white, bold: true });
  text(slide, 'Everything that happens after the code.', 67, 452, 640, 42, { size: 25, color: '#FFFFFF/88' });
  rect(slide, 66, 536, 48, 2, C.mint, 'cover-short-rule');
  text(slide, 'SATURDAY 27 MARCH 2027', 66, 556, 460, 27, { size: 17, color: C.white, bold: true });
  text(slide, 'IBADAN  ·  OYO STATE', 66, 590, 460, 24, { size: 15, color: '#FFFFFF/76', bold: true });
  text(slide, 'A practical gathering for the people building what comes next.', 66, 642, 800, 24, { size: 14, color: '#FFFFFF/68' });
  slide.speakerNotes.text = 'Opening: introduce Beyond Code 2027 as a practical gathering about the business, trust, communication and delivery that surround technology.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, page 1.';
}

// 2 — The opportunity
{
  const slide = presentation.slides.add();
  header(slide, 'Why this room matters', 'The work begins after the code.', 'A useful product still has to earn trust, reach people and make sense in the real world.', 2);
  const cards = [
    { x: 64, n: '01', title: 'Trust', body: 'What makes people believe\na product will deliver?' },
    { x: 456, n: '02', title: 'Reach', body: 'How does good work find\nthe people who need it?' },
    { x: 848, n: '03', title: 'Business', body: 'How do teams explain value,\nprice fairly and keep moving?' },
  ];
  for (const [i, d] of cards.entries()) {
    rect(slide, d.x, 258, 368, 280, C.white, `opportunity-card-${i + 1}`, 22);
    rect(slide, d.x + 26, 284, 42, 4, i === 1 ? C.mint : C.violet, `opportunity-rule-${i + 1}`, 2);
    text(slide, d.n, d.x + 26, 306, 56, 22, { size: 13, color: C.purple, bold: true });
    text(slide, d.title, d.x + 26, 354, 310, 48, { size: 34, color: C.ink, bold: true });
    text(slide, d.body, d.x + 26, 421, 314, 72, { size: 20, color: C.muted });
  }
  text(slide, 'Everything that happens after the code.', 66, 574, 920, 36, { size: 23, color: C.purple, bold: true });
  slide.speakerNotes.text = 'Frame the event around the work that makes technology useful and sustainable: trust, clear communication, reach, pricing, marketing and delivery.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, pages 1–2.';
}

// 3 — Event snapshot
{
  const slide = presentation.slides.add();
  header(slide, 'The gathering', 'One room. One focused day.', 'A small, high-participation event for people doing the work across tech.', 3);
  rect(slide, 64, 238, 540, 360, C.plum, 'event-date-panel', 24);
  text(slide, 'SATURDAY', 96, 276, 260, 24, { size: 14, color: C.mint, bold: true });
  text(slide, '27', 90, 308, 250, 132, { size: 112, color: C.white, bold: true });
  text(slide, 'MARCH 2027', 98, 440, 370, 38, { size: 28, color: C.white, bold: true });
  rect(slide, 98, 504, 52, 3, C.mint, 'event-panel-rule');
  text(slide, 'IBADAN, OYO STATE', 98, 529, 380, 26, { size: 16, color: '#FFFFFF/80', bold: true });
  text(slide, 'Venue to be confirmed', 98, 560, 380, 22, { size: 14, color: '#FFFFFF/62' });
  const stats = [
    { x: 650, y: 238, value: '100', label: 'tech professionals' },
    { x: 932, y: 238, value: '3', label: 'guest speakers' },
    { x: 650, y: 426, value: '3', label: 'practical sessions' },
    { x: 932, y: 426, value: '8:30am–6pm', label: 'day programme' },
  ];
  stats.forEach((s, i) => {
    rect(slide, s.x, s.y, 256, 152, i === 3 ? C.soft : C.white, `event-stat-${i + 1}`, 18);
    text(slide, s.value, s.x + 22, s.y + 21, 212, 62, { size: i === 3 ? 28 : 48, color: C.purple, bold: true });
    text(slide, s.label, s.x + 22, s.y + 94, 212, 24, { size: 16, color: C.muted, bold: true });
  });
  slide.speakerNotes.text = 'The proposal sets the event for Saturday 27 March 2027 in Ibadan, Oyo State, with the venue still to be confirmed. It lists 100 tech professionals, three guest speakers, three sessions, and an 8:30am–6:00pm programme.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, pages 1 and 4.';
}

// 4 — Three sessions
{
  const slide = presentation.slides.add();
  header(slide, 'The programme', 'Three conversations with room to work.', 'Each session is built around real examples, audience participation and useful takeaways.', 4);
  const cards = [
    {
      x: 64, index: '01', tag: 'MARKETING + GROWTH', title: 'Perception\nMarketing', question: 'How Nigerians decide to trust and buy',
      points: ['Positioning, naira pricing and proof', 'Distribution that meets local reality', 'Live audit of 3 attendee products'],
    },
    {
      x: 456, index: '02', tag: 'SOFTWARE + AI', title: 'The Build', question: 'Shipping faster with AI',
      points: ['Build a problem chosen by the room', 'Review, test and ship a feature live', 'Name where AI helps—and fails'],
    },
    {
      x: 848, index: '03', tag: 'OPERATIONS + TRUST', title: 'Communication\nand Ethics', question: 'Doing business people trust',
      points: ['Explain tech, pricing and timelines', 'Handle data, money and relationships fairly', 'Rewrite real messages together'],
    },
  ];
  cards.forEach((d, i) => {
    rect(slide, d.x, 225, 368, 408, C.white, `session-card-${i + 1}`, 20);
    pill(slide, d.tag, d.x + 22, 248, i === 0 ? 190 : 205, i === 1 ? '#E5F5EE' : C.soft, i === 1 ? '#39745C' : C.purple);
    text(slide, d.index, d.x + 22, 297, 44, 20, { size: 13, color: C.violet, bold: true });
    text(slide, d.title, d.x + 22, 326, 320, 70, { size: 27, color: C.ink, bold: true });
    text(slide, d.question, d.x + 22, 406, 322, 43, { size: 16, color: C.purple, bold: true });
    rect(slide, d.x + 22, 462, 324, 1, C.line, `session-divider-${i + 1}`);
    d.points.forEach((point, j) => {
      shape(slide, 'ellipse', d.x + 23, 482 + j * 39, 8, 8, j === 1 ? C.mint : C.violet, `session-dot-${i + 1}-${j + 1}`);
      text(slide, point, d.x + 43, 477 + j * 39, 298, 30, { size: 14, color: C.ink });
    });
  });
  slide.speakerNotes.text = 'Session 1 is intended for a brand, marketing or growth strategist and includes positioning, naira pricing, brand signals, social proof, distribution and an audit of three attendee products, pages or profiles. Session 2 is for a senior software engineer and includes a room-selected live build, AI tools, review/testing/shipping, plus local conditions such as patchy networks and local payments. Session 3 is for a founder, senior operator or consultant and covers client communication, proposals, pricing/timelines, data/money handling and fair relationships, with live rewrites and open questions.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, pages 3–4.';
}

// 5 — The wider experience
{
  const slide = presentation.slides.add();
  header(slide, 'Beyond the talks', 'A day people can take part in.', 'The programme leaves space to meet, ask, try and compare notes.', 5);
  const items = [
    { x: 64, y: 240, w: 552, h: 146, tag: 'CONNECT', title: 'Networking + open hour', body: 'Breaks and a dedicated open hour to meet collaborators.' },
    { x: 640, y: 240, w: 576, h: 146, tag: 'PLAY', title: 'Four room-wide games', body: 'Ship It Sprint · Tech Trivia · The Naira Test · Cracked Bingo' },
    { x: 64, y: 410, w: 552, h: 146, tag: 'SHARE', title: 'Question board + demo corner', body: 'Collect questions and make space for people to show their work.' },
    { x: 640, y: 410, w: 576, h: 146, tag: 'GIVE BACK', title: 'Laptop raffle', body: '₦2,000 tickets · partner prizes first · live draw' },
  ];
  items.forEach((d, i) => {
    rect(slide, d.x, d.y, d.w, d.h, C.white, `experience-${i + 1}`, 18);
    rect(slide, d.x + 23, d.y + 24, 4, d.h - 48, i === 1 ? C.mint : C.violet, `experience-accent-${i + 1}`, 2);
    text(slide, d.tag, d.x + 43, d.y + 21, d.w - 70, 18, { size: 11, color: C.purple, bold: true });
    text(slide, d.title, d.x + 43, d.y + 48, d.w - 68, 36, { size: 22, color: C.ink, bold: true });
    text(slide, d.body, d.x + 43, d.y + 93, d.w - 72, 34, { size: 15, color: C.muted });
  });
  text(slide, 'Designed to feel like a gathering, not a row of presentations.', 66, 593, 1040, 30, { size: 18, color: C.purple, bold: true });
  slide.speakerNotes.text = 'The proposal includes networking during breaks and an open hour; Ship It Sprint, Tech Trivia, The Naira Test and Cracked Bingo; a question board; demo corner; and a laptop raffle. Raffle details: tickets are ₦2,000, sold at check-in and through the day, numbered and linked to each buyer, with partner prizes awarded before the live draw.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, pages 4–5.';
}

// 6 — Why speak
{
  const slide = presentation.slides.add();
  header(slide, 'Why speak at Beyond Code', 'A focused room, with a real reason to be there.', 'Bring your point of view to people who are building, selling and supporting technology.', 6);
  rect(slide, 64, 245, 365, 346, C.plum, 'why-speak-number-panel', 22);
  text(slide, 'A ROOM OF', 94, 278, 270, 22, { size: 13, color: C.mint, bold: true });
  text(slide, '100', 89, 313, 290, 128, { size: 112, color: C.white, bold: true });
  text(slide, 'tech professionals', 96, 444, 290, 33, { size: 24, color: C.white, bold: true });
  text(slide, 'Engineers · designers · founders\nmarketers · operators', 96, 494, 290, 52, { size: 15, color: '#FFFFFF/76' });
  const reasons = [
    { x: 470, y: 245, title: 'A useful format', body: 'Short talks, live work and open Q&A—not a 45-minute slide run.' },
    { x: 850, y: 245, title: 'Visibility that lasts', body: 'Professional photos, video clips, social feature and speaker spotlight.' },
    { x: 470, y: 425, title: 'People to meet', body: 'Find peers, possible collaborators, clients and future hires.' },
    { x: 850, y: 425, title: 'Your work in context', body: 'Share what succeeded, what failed and what others can use.' },
  ];
  reasons.forEach((d, i) => {
    rect(slide, d.x, d.y, 340, 152, C.white, `reason-${i + 1}`, 18);
    shape(slide, 'ellipse', d.x + 22, d.y + 25, 12, 12, i === 1 ? C.mint : C.violet, `reason-dot-${i + 1}`);
    text(slide, d.title, d.x + 22, d.y + 53, 300, 32, { size: 19, color: C.ink, bold: true });
    text(slide, d.body, d.x + 22, d.y + 91, 298, 50, { size: 14, color: C.muted });
  });
  slide.speakerNotes.text = 'The proposal describes an audience of 100 tech professionals and emphasizes short talks/live work/Q&A, professional photos and video clips, a social feature and speaker spotlight, and meeting engineers, designers, founders, marketers and potential collaborators, clients or hires.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, page 5.';
}

// 7 — Format and support
{
  const slide = presentation.slides.add();
  header(slide, 'A good fit', 'Practical by design. Supported by the team.', 'A clear brief and thoughtful logistics make it easier to bring your best work.', 7);
  rect(slide, 64, 236, 548, 382, C.white, 'speaker-brief-panel', 20);
  rect(slide, 64, 236, 548, 7, C.violet, 'speaker-brief-accent', 4);
  text(slide, 'WHAT MAKES A STRONG SESSION', 91, 268, 470, 22, { size: 12, color: C.purple, bold: true });
  text(slide, 'Bring the work behind the work.', 91, 307, 460, 58, { size: 27, color: C.ink, bold: true });
  const brief = ['Real examples, numbers, stories and mistakes', 'No more than 10 slides; teach rather than pitch', 'Stay for questions and the networking hour'];
  brief.forEach((v, i) => {
    shape(slide, 'ellipse', 92, 398 + i * 55, 10, 10, i === 1 ? C.mint : C.violet, `brief-dot-${i + 1}`);
    text(slide, v, 116, 390 + i * 55, 438, 36, { size: 16, color: C.ink });
  });
  rect(slide, 640, 236, 576, 382, C.soft, 'organizer-support-panel', 20);
  text(slide, 'WHAT THE ORGANIZERS PROVIDE', 669, 268, 490, 22, { size: 12, color: C.purple, bold: true });
  const support = [
    'Transport support or honorarium, agreed individually',
    'Lodging for speakers travelling from outside Ibadan',
    'Reserved seat, meals and refreshments',
    'Professional photos/video and speaker spotlight',
    'Clear brief and a 30-minute prep call',
  ];
  support.forEach((v, i) => {
    rect(slide, 670, 311 + i * 53, 28, 28, i === 4 ? '#DDF3E9' : C.white, `support-icon-${i + 1}`, 8);
    text(slide, String(i + 1).padStart(2, '0'), 676, 319 + i * 53, 18, 15, { size: 9, color: C.purple, bold: true });
    text(slide, v, 714, 309 + i * 53, 466, 36, { size: 15, color: C.ink });
  });
  slide.speakerNotes.text = 'The requested style is grounded: examples, numbers, stories and mistakes; maximum 10 slides; teach rather than pitch; stay for Q&A and networking. The organizers offer transport support or an individually agreed honorarium, lodging for speakers outside Ibadan, reserved seating, meals/refreshments, photos/video, a speaker spotlight, a clear brief and a 30-minute prep call.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, pages 5–6.';
}

// 8 — Timeline
{
  const slide = presentation.slides.add();
  header(slide, 'The path to the day', 'A clear timeline, from invitation to clips.', 'The team will help you prepare well ahead of the event.', 8);
  const steps = [
    { x: 64, y: 250, date: 'NOV–DEC 2026', title: 'Invitations', body: 'Speaker invitations sent' },
    { x: 354, y: 250, date: '15 JAN 2027', title: 'Confirm', body: 'Speaker confirmations due' },
    { x: 644, y: 250, date: 'JAN–FEB 2027', title: 'Announce', body: 'Speaker announcements' },
    { x: 934, y: 250, date: 'EARLY MAR', title: 'Prepare', body: '30-minute prep call' },
    { x: 64, y: 430, date: '20 MAR 2027', title: 'Materials', body: 'Final slides and materials due' },
    { x: 484, y: 430, date: '27 MAR 2027', title: 'Event day', body: 'Beyond Code in Ibadan' },
    { x: 904, y: 430, date: 'APR 2027', title: 'Share', body: 'Session clips released' },
  ];
  steps.forEach((d, i) => {
    rect(slide, d.x, d.y, i < 4 ? 260 : 300, 137, C.white, `timeline-step-${i + 1}`, 16);
    text(slide, d.date, d.x + 20, d.y + 18, (i < 4 ? 220 : 260), 20, { size: 11, color: C.purple, bold: true });
    text(slide, d.title, d.x + 20, d.y + 49, (i < 4 ? 220 : 260), 30, { size: 20, color: C.ink, bold: true });
    text(slide, d.body, d.x + 20, d.y + 88, (i < 4 ? 220 : 260), 34, { size: 13, color: C.muted });
    shape(slide, 'ellipse', d.x + 20, d.y - 10, 9, 9, i === 5 ? C.mint : C.violet, `timeline-node-${i + 1}`);
  });
  rect(slide, 84, 404, 1110, 2, C.line, 'timeline-connector');
  text(slide, 'A 30-minute call in early March gets the session aligned before final materials are due.', 66, 597, 1080, 27, { size: 16, color: C.purple, bold: true });
  slide.speakerNotes.text = 'Timeline from the proposal: invitations in November–December 2026; confirmations by Friday 15 January 2027; announcements in January–February; prep call in early March; final slides/materials by Saturday 20 March; event on Saturday 27 March; session clips released in April.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, page 7.';
}

// 9 — CTA
{
  const slide = presentation.slides.add();
  slide.background.fill = C.plum;
  rect(slide, 0, 0, 540, H, 'linear(0deg, #281532 0%, #3D2055 100%)', 'closing-left-field');
  shape(slide, 'ellipse', 410, 82, 290, 290, 'radial(#AEE8CE/30 0%, #AEE8CE/0 72%)', 'closing-orbit');
  rect(slide, 64, 64, 42, 5, C.mint, 'closing-brand-mark', 3);
  text(slide, 'BEYOND CODE 2027', 64, 88, 420, 26, { size: 15, color: C.white, bold: true });
  text(slide, 'Bring your\nexperience to\nthe room.', 64, 182, 480, 210, { size: 48, color: C.white, bold: true });
  text(slide, 'Sam  ·  Convener', 66, 472, 390, 28, { size: 18, color: C.mint, bold: true });
  text(slide, 'Saturday 27 March 2027  ·  Ibadan', 66, 515, 400, 27, { size: 15, color: '#FFFFFF/76' });
  rect(slide, 576, 84, 640, 544, C.white, 'reply-panel', 22);
  pill(slide, 'TO CONFIRM YOUR SESSION', 610, 117, 234, C.soft, C.purple);
  text(slide, 'Reply with four things', 610, 174, 550, 42, { size: 30, color: C.ink, bold: true });
  const ask = [
    ['01', 'A short bio (about 80 words)'],
    ['02', 'A high-resolution headshot'],
    ['03', 'Your session angle'],
    ['04', 'Availability for an early-March prep call'],
  ];
  ask.forEach(([n, label], i) => {
    rect(slide, 612, 243 + i * 67, 35, 35, i === 3 ? '#DDF3E9' : C.soft, `reply-num-bg-${i + 1}`, 10);
    text(slide, n, 620, 252 + i * 67, 22, 17, { size: 10, color: C.purple, bold: true });
    text(slide, label, 666, 248 + i * 67, 494, 30, { size: 17, color: C.ink, bold: true });
  });
  rect(slide, 610, 530, 568, 1, C.line, 'contact-rule');
  text(slide, 'EMAIL + PHONE / WHATSAPP CONTACT DETAILS TO BE ADDED BEFORE SENDING', 610, 552, 560, 40, { size: 11, color: C.purple, bold: true });
  footer(slide, 9, true);
  slide.speakerNotes.text = 'Invite the prospective speaker to reply with: an approximately 80-word bio, a high-resolution headshot, their session angle, and availability for a 30-minute prep call in early March. The source proposal uses [Email] and [Phone or WhatsApp] placeholders; these details must be filled in before the deck is sent.\nSource: Beyond-Code-2027-Speaker-Proposal.pdf, page 8.';
}

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(buildDir, { recursive: true });
const stagingDir = path.join(workspaceDir, '.codex-finalizer');
await fs.mkdir(stagingDir, { recursive: true });
const candidatePath = path.join(buildDir, 'speaker-pitch-candidate.pptx');
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(candidatePath);

// Export authoring previews for the required visual QA pass.
const previewsDir = path.join(buildDir, 'slide-previews');
await fs.mkdir(previewsDir, { recursive: true });
for (const [index, slide] of presentation.slides.items.entries()) {
  const png = await presentation.export({ slide, format: 'png', scale: 1.25 });
  await fs.writeFile(path.join(previewsDir, `slide-${String(index + 1).padStart(2, '0')}.png`), new Uint8Array(await png.arrayBuffer()));
}
const montage = await presentation.export({ format: 'webp', montage: true });
await fs.writeFile(path.join(buildDir, 'deck-montage.webp'), new Uint8Array(await montage.arrayBuffer()));

const { finalizePresentation } = await import(pathToFileURL(path.join(skillDir, 'container_tools/artifact_tool_utils.mjs')).href);
const requirements = { explicitTotalSlideCount: 9 };
const fontPolicy = { basis: 'design', families: [FONT] };
const expectedSlideSizeEmu = '12192000,6858000'; // 1280x720px at 96 DPI
const result = await finalizePresentation({
  ...requirements,
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', expectedSlideSizeEmu, '--validate-bullet-geometry', '--validate-heading-fit'],
  requiredNativeTableOwnerSlides: [],
  fontPolicy,
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, 'Beyond-Code-2027-Speaker-Pitch-Deck-v2.validation.json'),
});
console.log(JSON.stringify(result, null, 2));
