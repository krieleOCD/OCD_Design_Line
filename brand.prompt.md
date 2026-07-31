Brand identity primitives — the ornaments, logo and headline device that make a
composition unmistakably Orange Cyberdefense.

## Logo
Renders the real PNG logo. Never redraw the mark.
```jsx
<Logo variant="master" tone="dark" height={44} basePath="../../assets/logos" />
<Logo variant="small" tone="light" height={40} />
```
`variant`: `master` (wordmark) | `small` (square). `tone`: `dark` text for light
backgrounds, `light` text for dark. Pass `basePath` to point at `assets/logos`
relative to the page.

## Petal
The signature circle-arc ornament — as a colour block or a photo mask.
```jsx
<Petal shape="quarter" corner="tl" color="var(--ocd-orange)" size={200} />
<Petal shape="half" src="../../assets/visuals/visual-01.png" size={280} />
```
`shape`: `quarter` | `half` | `circle` | `three-quarter`. For `quarter`, set
`corner` (tl/tr/bl/br). Add `src` to clip a photo into the shape.

## RingMark
The concentric bullseye / target.
```jsx
<RingMark size={160} ring="var(--ocd-orange)" core="var(--ocd-black)" />
```

## HeadlineDuo
The two-tone stacked campaign headline (problem in `lead`, answer in orange).
```jsx
<HeadlineDuo lead={["Avoid", "Spyware."]} accent={["Stay", "Aware."]} size={64} />
<HeadlineDuo lead="Problème identifié." accent="Solution activée." leadColor="var(--ocd-white)" />
```
Use `leadColor="var(--ocd-white)"` on dark backgrounds.
