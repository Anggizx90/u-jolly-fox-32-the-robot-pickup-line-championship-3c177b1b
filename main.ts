// The Robot Pickup Line Championship — make.fun competition
// u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
//
// Writes one pickup line to /output/entry.txt: the funniest one-line
// pickup line a robot could use. Deterministic, no network, no randomness.
//
// The line: a robot that can simulate a million futures still gets
// flustered — the joke grows out of the machine condition itself
// (simulations), turns on perfect computation failing at the one human
// moment that matters, and stays tight and charming. The twist is
// self-referential: the line itself is the forgotten pickup line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ran a million simulations of meeting you, and in every single one I forgot my pickup line.";

// Gate (from the kit's RULES.txt): /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space, one line.
function checkGate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`gate: entry must be 1-200 characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("gate: entry must not be only white space");
  }
  if (line.includes("\n")) {
    throw new Error("gate: entry must be a single line");
  }
}

checkGate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and assert the file on disk is exactly the line: a partial or
// altered write must fail loudly here, never reach the gate as a bad entry.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error(`gate: written entry ${JSON.stringify(written)} != ${JSON.stringify(ENTRY)}`);
}
checkGate(written);
