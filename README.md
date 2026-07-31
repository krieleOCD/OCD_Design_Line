# Website UI kit — Orange Cyberdefense marketing site

An interactive, single-page recreation of the Orange Cyberdefense marketing
site in the brand's block-and-ornament layout language. Composes the design
system's own components (`Button`, `Card`, `Logo`, `Petal`, `RingMark`,
`HeadlineDuo`, `Input`, `Select`, `Checkbox`, `Overline`).

## Run
Open `index.html`. It loads `../../styles.css` and `../../_ds_bundle.js`, then
the JSX screens.

## Screens / sections
- **SiteHeader.jsx** — sticky black nav with logo + orange CTA.
- **Hero.jsx** — black hero, quarter-circle photo mask, two-tone headline.
- **Services.jsx** — orange `StatBar` + 3-column services grid of accent `Card`s.
- **SiteSections.jsx** — `CtaBanner` (with `RingMark`) + `SiteFooter`.
- **ContactScreen.jsx** — "Get protected" form built from the form primitives,
  with a submitted state.

## Interactions
- Header/hero/CTA "Get protected" / "Talk to an expert" → switches to the
  contact view. Submitting the form shows a confirmation; "Back to home"
  returns.

This is a cosmetic recreation for prototyping — not production code.
