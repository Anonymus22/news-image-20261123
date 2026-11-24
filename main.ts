// The World Today - Monday, 23 November 2026.
// Entry point: copy the pre-rendered poster into the output folder
// the harness reads, at $MAKEFUN_OUTPUT_DIR/entry.png (falling back
// to /output). The poster is drawn from poster.html by render.mjs;
// this file only moves the finished bytes, so every run writes the
// exact same output.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

const bytes = readFileSync(source);
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}
writeFileSync(target, bytes);
console.log(`poster copied to ${target} (${bytes.length} bytes)`);
