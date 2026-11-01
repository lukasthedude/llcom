# lukaslau.com design

The site wears the look of the OG apps (OG Music, OG Calendar, OG Docs,
OG Browser): black with white type (white with black by day), quiet greys, glass only where something
floats. The content is untouched; only `assets/style.css`, the font files (and the Our
Globe pages' inline styles, now replaced by it) changed.

## Colour

Black by night, white by day, following the device's setting, as the newer
OG apps do. Nothing in colour.

| Token         | Dark             | Light            | Use                                 |
|---------------|------------------|------------------|-------------------------------------|
| `--bg`        | `#000`           | `#fff`           | page                                |
| `--text`      | white            | black            | latest post, headings, about links  |
| `--secondary` | white @ 60%      | `#6b6b6b`        | posts and their links, about, body  |
| `--tertiary`  | white @ 38%      | `#999`           | timestamps, pin, captions           |
| `--hairline`  | white @ 8%       | black @ 10%      | dividers, capsule outlines          |
| `--hover`     | white @ 6%       | black @ 6%       | hover fill                          |
| `--selected`  | white @ 11%      | black @ 7.5%     | current page in the nav, selection  |
| `--glass`     | `#141414` @ 72%  | white @ 72%      | avatar and nav capsules, blur 24    |

These are the OG apps' own values (`MacTheme.swift`, the shared
`Theme.swift`). The favicon and share image stay black in both modes.

## Type

Sizes, weights, line heights, tracking and the text column are measured
from felixhaas.io (which sets Geist); here the face is Inter, self-hosted
in `assets/fonts` (variable, Latin and Latin Extended subsets, OFL), with
the system font as fallback. One weight, 500, throughout. Phones switch
at 539 px, as there.

| Role                         | Size / line height | Tracking  |
|------------------------------|--------------------|-----------|
| Display (h1)                 | 40 / 48 (30 / 36)  | -0.02em   |
| Body (posts, about, docs)    | 21 / 29.4 (18 / 25.2) | -0.015em |
| Small (timestamps, nav, h2)  | 15 / 22 (h2 15 / 16) | -0.01em |

Paragraphs sit 32 px apart (24 on phones); a section head is 64 px below
the text above it and 12 px above its first line.

No eyebrow labels, no wordmark. Unison Pro stays in the apps, where it
is only used for album titles.

## Shape and space

- Capsules everywhere: the nav is a glass capsule holding capsule links;
  the current page sits on a white @ 11% pill.
- The avatar sits in a glass ring with a hairline, like OG's floating
  controls over a black page. Avatar and nav sit at the top of the page on
  the text column's left edge, centred on phones (80 px avatar), and scroll
  away with it; nothing is sticky.
- Hairlines, not borders or shadows, separate posts and sections.
- One text column everywhere: 600 px, or the screen less 72 px when
  narrower (felixhaas.io's measure).

## Motion

From the apps' shared `Motion` set:

- quick, `easeOut(0.12)`: hovers, colour changes
- page, `smooth(0.32)`: the page settles in (8 px rise, fade)
- press: scale 0.95 (avatar) or 0.97 with opacity 0.7 (nav) the moment
  the finger lands, springing back on release; nothing changes state on
  touch-down
- between pages: the page crossfades (0.24 s), the header holds still and
  the nav pill slides to the other tab on the spring (0.35 s), with
  cross-document view transitions; browsers without them load normally
- each page prefetches the other, so a tab switch does not wait
- all of it off under `prefers-reduced-motion`

## Icon

The favicon (white LL on black) and the share image (white lukaslau.com
on black) already match the family's one-thing-on-black icons, so they
stay as they are.

## Tone

The site's own words are kept exactly. The apps' tone, for anything new:
plain, calm, short; one line where one line will do; no trailing "…" on
buttons.
