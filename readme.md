# Orange Cyberdefense — Design System

A code-first design system that lets design agents produce on-brand Orange
Cyberdefense interfaces, campaigns and decks. It packages the brand's colour
system, typography, spacing, the signature geometric ornaments, real logos and
campaign imagery, plus a set of reusable React components and full-screen UI
kits.

> Namespace for `@dsCard` / component HTML: `window.OrangeCyberdefenseDesignSystem_e63a01`
> (run `check_design_system` if it ever changes).

---

## Sources

Everything here is derived from material the user supplied — read only, but
recorded so a future reader can go deeper:

- **GitHub — `krieleOCD/OCD_Design_Line`**
  <https://github.com/krieleOCD/OCD_Design_Line>
  The ground truth. Contains: the master + small logos (RGB, black/white text,
  on light and dark), 25 campaign visuals (`Asset_Visuel_Orange_Cyberdefense-*`),
  and `palette.jpg` — the official colour chart from the *Digital brand
  guidelines* (`Digital_brand_guidelines_highres_25.02.15.pdf`, Oct 2015).
  Explore this repo further to recreate campaign layouts more faithfully.
- **Colour chart** — `assets/palette.jpg` (also cropped into `scraps/palette_*`).
  Hex + Pantone + CMYK values are transcribed verbatim into `tokens/colors.css`.
- **Company presentation ("Unternehmensvorstellung")** — supplied as
  `uploads/Company presentation.pptx` (24 slides; content-correct but visually
  weak). Its facts and messaging were extracted and rebuilt on-brand in
  `ui_kits/company-deck/`.

Orange Cyberdefense is the specialised cyber-security arm of the Orange Group —
managed detection & response, threat intelligence, incident response and
security consulting. The brand is a direct extension of the Orange corporate
identity (the orange square + `orange™`), locked to the `Cyberdefense`
wordmark.

---

## CONTENT FUNDAMENTALS

How Orange Cyberdefense writes.

- **Tone:** confident, direct, reassuring. It names a threat, then answers it.
  Campaign copy is built as a **problem → resolution** pair:
  *"Avoid Spyware. Stay Aware."*, *"Problème identifié. Solution activée."*,
  *"Stratégie de crise ? Nous allons vous aider."*
- **Structure:** short. Two to four words per line, stacked. The **first
  statement is the problem/tension** (white or black), the **second is the
  Orange Cyberdefense answer** (orange). This white/orange or black/orange
  split is the core copy device.
- **Punctuation:** headlines terminate in a **period** — every clause is a
  full, closed statement. Questions use a full "? " with a French-style space
  in FR locales.
- **Person:** speaks to the reader as **"you" / "vous"** and answers as
  **"we" / "nous"** ("Nous allons vous aider"). Never first-person singular.
- **Casing:** Sentence case for headlines (only the first letter and proper
  nouns capitalised). ALL-CAPS is reserved for short **overlines/eyebrows**.
  Never all-caps a full headline.
- **Language:** bilingual EN/FR — this is a European (Orange Group) brand.
  Keep locale-consistent within one artefact.
- **Emoji:** none. The brand voice is professional; the orange colour and the
  ornaments carry the energy, not emoji.
- **Wordmark casing:** always "Orange Cyberdefense" (one capital C, one word
  "Cyberdefense"). In lockups the Orange square reads `orange™` lowercase.

---

## VISUAL FOUNDATIONS

The brand is **geometric, high-contrast and flat**. Its whole personality comes
from three things: the colour orange, a bold neo-grotesque, and a family of
circle-derived ornaments.

### Colour
- **Signature:** Orange `#FF7900` (Pantone 151 C) on **black** `#000000` or
  **white** `#FFFFFF`. These three are ~90% of any composition.
- **Secondary palette** (blue `#4bb4e6`, green `#50be87`, purple `#a885d8`,
  pink `#ffb4e6`, yellow `#ffd200`) with deep and light tints — used sparingly,
  mostly for data-viz, illustration and categorisation, never to compete with
  orange.
- Backgrounds are **solid colour blocks**, not gradients. A composition is
  usually divided into hard-edged black / white / orange fields.
- No dedicated error red exists in the 2015 chart; we adopt Orange Group's
  functional red `#cd3c14` for `--color-danger` (flagged, see Caveats).

### Typography
- **Corporate typeface: Helvetica Neue** — Bold for display/headlines, Roman
  for text. A tight, confident neo-grotesque.
- We ship **Arimo** (Google Fonts, Arial/Helvetica-metric-compatible) as a
  webfont fallback so non-Apple platforms still render the correct proportions.
  **The licensed Helvetica Neue / Orange "HelvNeue" cut should replace this in
  production** (flagged, see Caveats).
- Headlines: **Bold**, tight leading (~1.02), slightly negative tracking,
  stacked in 2–4 word lines. Body: Regular, ~1.5 leading.

### The ornaments (the brand's signature)
- **Quarter-circle / "petal":** a circle cut into 90° arcs. Used as an
  orange/black/white ornament AND as a **photo mask** — imagery is clipped into
  a quarter- or half-circle rather than a rectangle.
- **Concentric ring / bullseye:** an orange ring wrapping a solid black disc
  (a "target"). Frequently anchored bottom-centre or bottom-right.
- These are always **hard geometry** — true circles, true 90° arcs, no soft
  edges, no drop shadows.

### Imagery
- Real photography of people (candid, slightly wide-angle, modern office
  settings), warm neutral grade, masked into circle/arc shapes.
- Flat vector **illustration** (e.g. the rocket + clouds) in the orange /
  black / white / yellow palette for conceptual scenes.
- Photos never get rounded rectangles — they get circle geometry.

### Depth, borders, radius
- **Predominantly flat.** Depth comes from overlapping solid colour blocks, not
  shadows. Shadows exist (`--shadow-*`) but are reserved for overlays/menus.
- **Corners are square.** Buttons, inputs and cards default to `--radius-none`.
  Full rounding is reserved for the ornaments (true circles) and pill chips.
- Borders are crisp 1px neutral lines; on dark surfaces, low-opacity white.

### Motion
- Restrained and quick. Fades and colour transitions, `150–240ms`, standard
  ease `cubic-bezier(0.2,0,0,1)`. **No bounce, no overshoot.** The ornaments may
  rotate/reveal but the interface itself stays calm.

### Interaction states
- **Hover:** darken (orange → `#f16e00`); links gain underline.
- **Active/press:** darken further (`#cc6000`). No shrink/scale by default.
- **Focus:** high-contrast — a solid 2px black ring (`--color-focus`) offset
  2px; white ring on dark surfaces.

### Layout
- Content divides into **hard rectangular fields** of black / white / orange,
  with circle ornaments straddling the seams.
- Logo lockups sit in a clear corner; the small logo (orange square +
  underscore) is the compact/favicon mark.

---

## ICONOGRAPHY

- The supplied assets contain **no dedicated icon set** — the brand's "icons"
  are its **geometric ornaments** (quarter-circles, rings) and flat spot
  **illustrations** (rocket, clouds). These are drawn with CSS/geometry from the
  brand primitives, not an icon font.
- For conventional UI glyphs (menu, close, arrow, search, check) this system
  links **Lucide** (`lucide.dev`) from CDN — a thin, geometric, open-source
  stroke set whose 2px straight-cut style matches Helvetica Neue's neo-grotesque
  feel. **This is a substitution** — Orange Cyberdefense ships no official UI
  icon font in the provided material (flagged, see Caveats). Use Lucide at
  ~1.75–2px stroke, `currentColor`.
- **Emoji / Unicode-as-icon: never.** Not part of the brand.
- **Logos:** always use the real PNGs in `assets/logos/` — never redraw the
  Orange square or wordmark. Variants: master (with `orange™ Cyberdefense`
  wordmark) and small (orange square + underscore), each in black-text and
  white-text cuts for light/dark backgrounds.

---

## INDEX / MANIFEST

Root files
- `styles.css` — global entry point; `@import`s every token file. **Consumers
  link this one file.**
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper so the system works in Claude Code.
- `thumbnail.html` — homepage tile.

`tokens/` — CSS custom properties (all `@import`ed by `styles.css`)
- `colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
  `shadows.css` · `motion.css` · `base.css` · `fonts.css`

`assets/`
- `logos/` — master + small logos, black/white text cuts.
- `visuals/` — 24 campaign visuals (`visual-01`…`visual-25`).
- `palette.jpg` — official colour chart.

`guidelines/` — foundation specimen cards (Design System tab)
- Colours, type, spacing, radius, shadow, motion, brand ornaments.

`components/` — reusable React primitives (see below).

`ui_kits/` — full-screen product recreations.

`slides/` — sample on-brand deck slides.

### Components
Grouped under `components/` — see each directory's `.prompt.md` and card:
- **core/** — `Button`, `Tag`, `Badge`, `Card`, `Overline`.
- **forms/** — `Input`, `Select`, `Checkbox`.
- **brand/** — `Logo`, `Petal` (quarter/half-circle ornament + photo mask),
  `RingMark` (concentric bullseye), `HeadlineDuo` (two-tone stacked headline).

*Intentional additions:* the source defines no coded components (assets only),
so the `core`/`forms` set is the standard from-scratch inventory, sized to the
brand. The `brand/` group encodes the ornaments and headline device that ARE
the visual identity — these are the reason to use this system.

### UI kits
- `ui_kits/website/` — Orange Cyberdefense marketing site (hero, services,
  CTA) recreated in the brand's block-and-ornament layout language.
- `ui_kits/company-deck/` — a 9-slide on-brand recreation of the corporate
  company presentation (facts, portfolio, analyst recognition), built from the
  real content in `uploads/Company presentation.pptx`. Arrow-key navigable.

### Slides
- `slides/` — title, statement, and content slide types matching the campaign
  visuals.

---

## CAVEATS / OPEN ITEMS

1. **Fonts substituted.** Helvetica Neue is not redistributable and was not
   supplied; we load **Arimo** as a metric-compatible fallback. Please provide
   the licensed Helvetica Neue (or Orange "HelvNeue") webfont for production.
2. **Icons substituted.** No official UI icon set was supplied; we link
   **Lucide** from CDN. Confirm or provide the official set.
3. **Error red inferred.** The 2015 chart has no error red; we use Orange
   Group's functional `#cd3c14`. Confirm.
4. **Palette date.** Values come from the Oct-2015 digital brand guidelines;
   verify against the current brand book if one exists.
