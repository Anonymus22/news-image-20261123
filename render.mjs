// Screenshot poster.html into entry.png with a headless Chromium
// driven through Puppeteer. The sheet is a fixed 1024x1024 page and
// the viewport is set to match it, so the same input page always
// produces the same PNG bytes.
// Usage: node render.mjs [poster.html] [entry.png]
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { statSync } from "node:fs";

const load = createRequire(import.meta.url);
const puppeteer = load(
  "/home/hatch/workspace/makefun/radar/shots-tool/node_modules/puppeteer",
);

const htmlPath = resolve(process.argv[2] ?? "poster.html");
const pngPath = resolve(process.argv[3] ?? "entry.png");

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--hide-scrollbars",
      "--enable-unsafe-swiftshader",
      "--use-angle=swiftshader",
      "--force-color-profile=srgb",
    ],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
    await page.goto(`file://${htmlPath}`, { waitUntil: "load", timeout: 60000 });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    await page.screenshot({ path: pngPath });
  } finally {
    await browser.close();
  }
  const size = statSync(pngPath).size;
  console.log(`rendered ${pngPath} from ${htmlPath} (${size} bytes)`);
}

await capture();
