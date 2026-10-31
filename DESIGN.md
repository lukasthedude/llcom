# lukaslau.com design

The site wears the look of the OG apps (OG Music, OG Calendar, OG Docs,
OG Browser): black, white type, quiet greys, glass only where something
floats. The content is untouched; only `assets/style.css`, the font files (and the Our
Globe pages' inline styles, now replaced by it) changed.

## Colour

Black always, as OG Music and og-music.com. Nothing in colour.

| Token         | Value            | Use                                 |
|---------------|------------------|-------------------------------------|
| `--bg`        | `#000`           | page                                |
| `--text`      | white            | latest post, headings, links        |
| `--secondary` | white @ 60%      | posts, about, body text             |
| `--tertiary`  | white @ 38%      | timestamps, pin, captions           |
| `--hairline`  | white @ 8%       | dividers, capsule outlines          |
| `--hover`     | white @ 6%       | hover fill                          |
| `--selected`  | white @ 11%      | current page in the nav, selection  |
| `--glass`     | `#141414` @ 72%, blur 24 | floating avatar and nav     |

These are the OG apps' own values (`MacTheme.swift`, the shared
`Theme.swift`). The newer apps also have a white day mode; the site keeps
to black, which is what reads as OG.

## Type

Sizes, weights, line heights, tracking and the text column are measured
from felixhaas.io (which sets Geist); here the face is Inter, self-hosted
in `assets/fonts` (variable, Latin and Latin Extended subsets, OFL), with
the system font as fallback. One weight, 500, throughout. Phones switch
at 539 px, as there.

| Role                         | Size / line height | Tracking  |
|------------------------------|--------------------|-----------|
| Display (latest post, h1)    | 40 / 48 (30 / 36)  | -0.02em   |
| Body (posts, about, docs)    | 24 / 33.6 (21 / 29.4) | -0.015em |
| Small (timestamps, nav, h2)  | 15 / 22 (h2 15 / 16) | -0.01em |

Paragraphs sit 32 px apart (24 on phones); a section head is 64 px below
the text above it and 12 px above its first line.

No eyebrow labels, no wordmark. Unison Pro stays in the apps, where it
is only used for album titles.

## Shape and space

- Capsules everywhere: the nav is a glass capsule holding capsule links;
  the current page sits on a white @ 11% pill.
- The avatar sits in a glass ring with a hairline, like OG's floating
  controls over a black page.
- Hairlines, not borders or shadows, separate posts and sections.
- One text column everywhere: 600 px, or the screen less 72 px when
  narrower (felixhaas.io's measure). The about column starts below the
  header until the screen is wide enough (1280 px) for it to clear it.

## Motion

From the apps' shared `Motion` set:

- quick, `easeOut(0.12)`: hovers, colour changes
- page, `smooth(0.32)`: the page settles in (8 px rise, fade)
- press: scale 0.95 (avatar) or 0.97 with opacity 0.7 (nav) the moment
  the finger lands, springing back on release; nothing changes state on
  touch-down
- all of it off under `prefers-reduced-motion`

## Icon

The favicon (white LL on black) and the share image (white lukaslau.com
on black) already match the family's one-thing-on-black icons, so they
stay as they are.

## Tone

The site's own words are kept exactly. The apps' tone, for anything new:
plain, calm, short; one line where one line will do; no trailing "…" on
buttons.
