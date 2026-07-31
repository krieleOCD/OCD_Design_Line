---
name: orange-cyberdefense-design
description: Use this skill to generate well-branded interfaces and assets for Orange Cyberdefense, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Signature: Orange #FF7900 on black/white, bold Helvetica Neue, and the circle-arc "petal" + bullseye "ring" ornaments. Photos are masked into circle geometry, never rounded rectangles. Corners are square.
- Copy is a problem→answer pair (white/black then orange), stacked, period-terminated. No emoji.
- Tokens live in `tokens/*.css` (entry: `styles.css`). Real logos in `assets/logos/`, campaign imagery in `assets/visuals/`.
- Components in `components/` (core, forms, brand); a marketing-site UI kit in `ui_kits/website/`; sample slides in `slides/`.
- Substitutions flagged in README: Arimo (for Helvetica Neue), Lucide (for UI icons), #cd3c14 (for error red).
