#!/usr/bin/env node
/**
 * Inlines src/recipe-data.js into src/shell.html to produce index.html.
 * index.html is committed so GitHub Pages can serve it directly with no build step.
 */
import { readFileSync, writeFileSync } from "node:fs";

const MARKER = "/*__RECIPE_DATA__*/";
const shell = readFileSync("src/shell.html", "utf8");
const data  = readFileSync("src/recipe-data.js", "utf8");

if (!shell.includes(MARKER)) {
  console.error(`build failed: ${MARKER} not found in src/shell.html`);
  process.exit(1);
}

const out = shell.replace(MARKER, data);
writeFileSync("index.html", out);

const count = (data.match(/^\s*id:\s*"/gm) || []).length;
console.log(`built index.html — ${(out.length / 1024).toFixed(0)} KB, ${count} recipes`);
