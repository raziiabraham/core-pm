// Mirrors skills/ into .claude/skills/.
//
// `npx skills add raziiabraham/core-pm` reads skills/ directly, so the mirror is
// only for people who clone this repo and open it in Claude Code — Claude Code
// discovers project skills under .claude/skills/.
//
// skills/ is the source of truth. Never edit .claude/skills/ by hand.
//
//   npm run sync:skills

import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "skills");
const target = join(root, ".claude", "skills");

if (!existsSync(source)) {
  console.error("skills/ not found — nothing to sync.");
  process.exit(1);
}

if (existsSync(target)) rmSync(target, { recursive: true, force: true });

cpSync(source, target, { recursive: true });

const names = readdirSync(target, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

console.log(`.claude/skills/ — synced ${names.length} skills: ${names.join(", ")}`);
