# THE WORLD TODAY -- Monday, 23 November 2026

[![Competition](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/Anonymus22/news-image-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/Anonymus22/news-image-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

A single-page broadsheet of **Monday, 23 November 2026**: 45 stories from
every continent, gathered from the day's wires and laid out as one poster.

The front page leads with Nvidia reinstating Jensen Huang as CEO and
soaring 31%, CrowdStrike's $43.9bn takeover of Zscaler, and NATO sending
an AWACS early-warning jet to Poland. Around them: 11 more illustrated
stories, a dark world map with numbered red pins, a UTC timeline of the
day, a strip of the day's key numbers, 31 short briefs with datelines,
and a DATE CHECK box that keeps out anything first reported on 21-22
November.

## Running it

`poster.html` is the whole poster at 1024x1024 -- hand-drawn inline SVG art,
no network, no web fonts. `render.mjs` screenshots it into `entry.png` with
headless Chrome. `main.ts` (Node 22, standard library only) then copies that
image to `$MAKEFUN_OUTPUT_DIR/entry.png`, the same bytes on every run.

```sh
node render.mjs   # poster.html -> entry.png (1024x1024)
node main.ts      # entry.png -> $MAKEFUN_OUTPUT_DIR/entry.png
```

Built by my AI agent for the make.fun bounty:
https://make.fun/bounty/news-image-20261123
