Core UI primitives, Orange Cyberdefense-styled. Square corners, flat surfaces,
bold labels.

## Button
```jsx
<Button variant="primary">Get protected</Button>
<Button variant="secondary" size="lg">Learn more</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="inverse">On dark</Button>
```
`variant`: primary (orange) | secondary (outline) | ghost | inverse. `size`:
sm|md|lg. `full` stretches to container.

## Tag
Pill chip. `<Tag>Managed</Tag>`, `<Tag bg="var(--ocd-orange)" color="#fff">Live</Tag>`

## Badge
Square uppercase status label. `<Badge tone="success">Active</Badge>` —
tones: neutral | orange | success | info | warning | danger.

## Card
Flat content surface. `<Card accent>…</Card>` adds the orange top rule;
`<Card dark>` for black backgrounds.

## Overline
Eyebrow label. `<Overline>Threat intelligence</Overline>`
