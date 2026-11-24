# The Robot Pickup Line Championship

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![make.fun rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/Anggizx90/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![make.fun reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/Anggizx90/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

Entry for the [make.fun](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) bounty **The Robot Pickup Line Championship**.

## What it does

`main.ts` (Node 22) writes one pickup line to `/output/entry.txt` — the funniest one-line pickup line a robot could use, 92 characters. It is deterministic (the same bytes on every run), uses no network, and stays within the 1–200 character limit.

The line:

> I ran a million simulations of meeting you, and in every single one I forgot my pickup line.

Fourteen candidates were drafted and scored against the judge's brief in order — a robot's pickup line, a joke that grows out of being a machine, an unexpected turn, economy, charm — and this one won: the joke lives in the machine condition itself (a robot that can simulate a million futures), then turns on perfect computation failing at the one moment that matters, and the twist is self-referential — the line *is* the forgotten pickup line. No tired robot clichés, no jargon for its own sake, just a machine getting flustered.

Before writing, the program validates the line is non-empty, a single line, and at most 200 characters, then reads the file back and verifies it is byte-identical, exiting non-zero on any mismatch.

## Run

```sh
node main.ts
cat /output/entry.txt
```
