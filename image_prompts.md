# Beyond Code 2027: 3D glass image prompts

Nine images in one family: frosted glass and crystal 3D objects in dark purple. Every prompt starts with the same STYLE LOCK so the set looks like it came from one studio. Paste the STYLE LOCK first, then the object prompt, then the negative prompt if your tool has a negative field (otherwise append it as "Avoid: ...").

## STYLE LOCK (paste at the start of every prompt)

Premium 3D render of a single glass object. Frosted glass and translucent crystal material with thick beveled edges, a soft inner glow and a subtle chromatic dispersion along the edges. Deep violet and amethyst tint using the colors #4C1D95, #7C3AED, #A78BFA and #C4B5FD, with tiny touches of white highlight. Polished glossy reflections, gentle caustics, a soft lilac rim light, a large softbox light from the top left and a violet backlight from behind. Shallow depth of field, ultra clean surfaces, ray traced, octane render quality, 8K detail. Object centered with generous empty margin on all sides, isolated on a flat deep purple background #0F0620. No text, no letters, no numbers, no watermark, no logo, no people.

## NEGATIVE PROMPT (paste after every prompt)

text, letters, words, numbers, watermark, logo, hands, people, faces, blurry, low resolution, flat 2D illustration, cartoon, clutter, busy background, harsh black shadows, orange, green, yellow, red, blue tint, extra objects, cropped edges, noise, grain

## Export notes

1. Generate on the flat deep purple background, then remove the background (remove.bg, Photoshop, Photopea or your tool's cutout feature) and save as a transparent PNG.
2. Square images at 1500 by 1500 pixels are plenty for the icons. The hero image at 2000 by 2000 pixels.
3. Compress each PNG with Squoosh or TinyPNG before using it. Aim for under 300 KB per icon and under 600 KB for the hero.
4. Save them in an assets folder next to index.html using the exact file names below. The page already shows a glass icon fallback for every slot, so you can drop images in one at a time.

---

## 1. Hero image: hero_cursor.png (square, 2000 by 2000)

Prompt after the STYLE LOCK:

A large glossy glass mouse arrow cursor floating at a three quarter angle, tilted about 15 degrees, the star of the image filling roughly 60 percent of the frame. The cursor is made of thick frosted violet glass with a polished bevel, glowing softly from inside with amethyst light, and a bright lilac edge highlight running down its left side. Behind it, a thin translucent glass window panel sits slightly out of focus, with three short horizontal glass bars suggesting lines of code but no readable text. Two much smaller glass cursors, one classic arrow and one pointing hand, orbit the main cursor at different depths with soft blur. A few tiny glass spheres and sparkles drift in the air. Soft violet light bloom behind the cursor, deep purple space around it. Cinematic product render feel, dramatic but clean.

## 2. Floating icon: icon_code.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A chunky glass pair of code brackets, a left angle bracket and a right angle bracket with a forward slash between them, floating at a slight angle. Each symbol is a thick rounded slab of frosted amethyst glass with a glowing inner core and a clear polished edge. The slash is slightly lighter lilac so the three pieces read clearly as a code symbol. Gentle soft shadow underneath, no floor, object floating.

## 3. Floating icon: icon_rocket.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A rounded modern rocket made of translucent violet glass, pointing up and to the right at 45 degrees. The body is smooth frosted glass, the round window is a clear bright lilac crystal, the fins are thick glossy amethyst glass. A soft glowing trail of tiny glass bubbles and light behind it suggests lift off. Friendly, premium, toy like proportions, not military.

## 4. Floating icon: icon_bolt.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A bold lightning bolt in thick faceted crystal glass, deep violet at the base fading to bright lilac at the tip, standing tilted in the air. Strong inner glow as if energy is trapped inside, crisp beveled edges catching the softbox light, tiny sparks of light around it. Simple silhouette that reads instantly at small sizes.

## 5. Floating icon: icon_chat.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A rounded speech bubble made of frosted glass with a small tail at the bottom left, tilted slightly toward the viewer. Inside the bubble, three round glowing lilac glass dots in a row, like a typing indicator. Thick rounded edges, soft inner glow, subtle reflection of the softbox on the top surface.

## 6. Floating icon: icon_chart.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

Four rising glass bars of increasing height forming a growth chart, with a smooth glass arrow curving up and over them to the right. The bars are frosted amethyst glass with glowing tops, the arrow is bright lilac crystal. Arranged at a slight isometric angle so the depth of the bars is clear. Clean, optimistic, no numbers, no axis lines.

## 7. Highlight card icon: icon_coin.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A thick round glass coin standing on its edge at a slight angle, showing its face. On the face, an embossed capital letter N with two parallel horizontal bars through it, the naira currency symbol, raised in polished lilac glass against a frosted violet disc. A raised beveled rim around the edge, a soft violet glow inside, a small second coin blurred in the background.

## 8. Highlight card icon: icon_mic.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A modern studio microphone made of frosted glass, upright and slightly tilted, with a rounded grille in translucent amethyst glass showing a fine grid pattern, a bright lilac metal like glass ring below it, and a short stand stub. A soft spotlight glow behind it suggests a stage. This represents a three minute pitch, so it should feel confident and bold.

## 9. Highlight card icon: icon_network.png (square, 1500 by 1500)

Prompt after the STYLE LOCK:

A constellation of five glass spheres of different sizes connected by thin glowing glass rods, forming a small network. The largest sphere in the center is frosted violet with a bright inner glow, the others are clear lilac crystal. Light pulses travel along the rods as tiny bright beads. Floating in space at a slight angle, with depth of field blurring the farthest spheres.

---

## Tips for a consistent set

1. Generate all nine in one sitting with the same tool, model and settings, and keep the STYLE LOCK word for word.
2. If one image comes out too bright or too pale, add "darker, richer violet glass, less white" to that prompt only.
3. If a tool adds letters or symbols, add "absolutely no text or symbols on any surface" and keep the negative prompt.
4. For the coin, if the naira symbol comes out wrong, generate the coin with a plain blank face and add the symbol yourself in an image editor, or ask for "a plain embossed N with two bars" and fix it afterwards.
5. Want a different mood? Change only the tint: swap the four hex colors for a lighter set (#7C3AED, #A78BFA, #C4B5FD, #DDD0FF) for a brighter glass look.
