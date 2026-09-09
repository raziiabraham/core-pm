// Generates the SVG artwork embedded in README.md.
//
//   npm run build:art
//
// Written as SVG rather than PNG so it stays crisp, small, and diffable. Two
// hard constraints come from GitHub:
//
//   1. README images are proxied, so nothing external loads — no web fonts, no
//      CSS imports, no scripts. Every font is a system stack.
//   2. GitHub renders the image at roughly 900px wide. A drawing authored much
//      wider than that gets scaled down and its labels become unreadable, so
//      the canvas is 960 wide and type is sized for that.
//
// Counts come from lib/curriculum.ts so the artwork cannot drift from the
// curriculum. Requires Node 22.13+ for TypeScript type stripping.

import { mkdirSync, writeFileSync } from "node:fs";

import sharp from "sharp";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { allLessons, curriculum, totalMinutes } from "../lib/curriculum.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "assets");

const SERIF = "Georgia, 'Times New Roman', Times, serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

const C = {
  ground: "#29332f",
  panel: "#0d2621",
  rule: "#3d554c",
  frame: "#5d7d74",
  ink: "#ffffff",
  mint: "#d9e4dc",
  muted: "#9fbdb2",
  accent: "#f0b99d",
};

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const text = (x, y, value, { size = 16, fill = C.ink, family = SANS, weight = 400, anchor = "start", spacing } = {}) =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}"` +
  (anchor === "start" ? "" : ` text-anchor="${anchor}"`) +
  (spacing ? ` letter-spacing="${spacing}"` : "") +
  `>${esc(value)}</text>`;

// ---------------------------------------------------------------- hero banner

function hero() {
  const W = 960;
  const H = 420;
  const stats = [
    [allLessons.length, "lessons"],
    [curriculum.length, "phases"],
    [`~${Math.round(totalMinutes / 60)}`, "hours"],
    ["1", "artifact each"],
    ["0", "sign-ups"],
  ];

  const keeps = [
    "The choice",
    "The evidence",
    "The uncertainty",
    "The alternatives",
    "The owner",
    "What would change your mind",
  ];

  let statX = 56;
  const statRow = stats
    .map(([value, label]) => {
      const chunk =
        text(statX, 392, value, { size: 19, weight: 700, fill: C.ink }) +
        text(statX + String(value).length * 11 + 7, 392, label, { size: 13, fill: C.muted });
      statX += String(value).length * 11 + 7 + label.length * 7 + 26;
      return chunk;
    })
    .join("");

  const keepRows = keeps
    .map((label, i) => {
      const y = 148 + i * 34;
      return `<line x1="620" y1="${y + 6}" x2="632" y2="${y + 6}" stroke="${C.accent}" stroke-width="2"/>` +
        text(644, y + 11, label, { size: 14, fill: C.mint });
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="CORE / PM — re-own the PM core. Your coding agent becomes your tutor. Install with npx skills add raziiabraham/core-pm.">
  <rect width="${W}" height="${H}" fill="${C.ground}"/>

  ${text(56, 52, "CORE / PM", { size: 13, family: MONO, weight: 700, fill: C.accent, spacing: 1 })}
  <line x1="56" y1="68" x2="904" y2="68" stroke="${C.rule}" stroke-width="1"/>

  ${text(56, 142, "Re-own the", { size: 62, family: SERIF, fill: C.ink })}
  ${text(56, 206, "PM core.", { size: 62, family: SERIF, fill: C.mint })}

  ${text(56, 248, "Your coding agent becomes your tutor. It asks for your position", { size: 16, fill: "#cfdbd5" })}
  ${text(56, 272, "before it offers one, then argues the strongest case against you.", { size: 16, fill: "#cfdbd5" })}

  <rect x="56" y="298" width="500" height="74" fill="${C.panel}" stroke="${C.frame}" stroke-width="1"/>
  ${text(74, 322, "Learn in your terminal", { size: 11, family: MONO, fill: C.muted, spacing: 0.6 })}
  ${text(74, 352, "npx skills add raziiabraham/core-pm", { size: 16, family: MONO, fill: C.ink })}

  ${statRow}

  <line x1="596" y1="96" x2="596" y2="356" stroke="${C.rule}" stroke-width="1"/>
  ${text(620, 118, "Every lesson ships one artifact that exposes", { size: 12, family: MONO, fill: C.muted })}
  ${keepRows}
</svg>
`;
}

// ------------------------------------------------------------- share card

// 1200x630 is what Open Graph and Twitter/X crop to. Previews render small,
// so this carries far less than the README hero: the real headline, one line
// of promise, the install command, and the counts. Rasterised to
// public/og.png because no major platform unfurls an SVG.
function ogCard() {
  const W = 1200;
  const H = 630;
  const hours = Math.round(totalMinutes / 60);
  const counts = `${allLessons.length} lessons · ${curriculum.length} phases · ~${hours} hours`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="CORE / PM — re-own the PM core. ${counts}.">
  <rect width="${W}" height="${H}" fill="${C.ground}"/>

  ${text(80, 104, "CORE / PM", { size: 21, family: MONO, weight: 700, fill: C.accent, spacing: 2 })}
  ${text(1120, 104, counts, { size: 17, family: MONO, fill: C.muted, anchor: "end" })}
  <line x1="80" y1="130" x2="1120" y2="130" stroke="${C.rule}" stroke-width="1"/>

  ${text(80, 268, "Re-own the", { size: 104, family: SERIF, fill: C.ink })}
  ${text(80, 372, "PM core.", { size: 104, family: SERIF, fill: C.mint })}

  ${text(80, 428, "Your coding agent becomes your tutor, and argues back.", { size: 25, fill: "#cfdbd5" })}

  <rect x="80" y="466" width="700" height="88" fill="${C.panel}" stroke="${C.frame}" stroke-width="1"/>
  ${text(104, 500, "Learn in your terminal", { size: 14, family: MONO, fill: C.muted, spacing: 0.8 })}
  ${text(104, 534, "npx skills add raziiabraham/core-pm", { size: 22, family: MONO, fill: C.ink })}

</svg>
`;
}

// ------------------------------------------------------- figure: two paths

function decisionChain() {
  const W = 960;
  const H = 300;

  const panel = (x, y, w, h, lines, tone) => {
    const stroke = tone === "muted" ? C.muted : C.mint;
    const dash = tone === "muted" ? ` stroke-dasharray="4 4"` : "";
    const cap = tone === "accent" ? `<line x1="${x}" y1="${y}" x2="${x + w}" y2="${y}" stroke="${C.accent}" stroke-width="3"/>` : "";
    const first = y + h / 2 - ((lines.length - 1) * 19) / 2 + 6;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${stroke}" stroke-width="1"${dash}/>${cap}` +
      lines.map((line, i) => text(x + w / 2, first + i * 19, line, { size: 15, fill: tone === "muted" ? C.muted : C.mint, anchor: "middle" })).join("");
  };

  const arrow = (x, y1, y2, tone) => {
    const stroke = tone === "muted" ? C.muted : C.mint;
    const dash = tone === "muted" ? ` stroke-dasharray="4 4"` : "";
    return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2 - 7}" stroke="${stroke}" stroke-width="1"${dash}/>` +
      `<path d="M${x - 4} ${y2 - 7} L${x} ${y2} L${x + 4} ${y2 - 7}" fill="none" stroke="${stroke}" stroke-width="1"/>`;
  };

  const LX = 56;
  const RX = 512;
  const CW = 392;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="One signal routed down two paths. Naming the decision first ends in a changed action. Picking a method first ends in output that changes nothing.">
  <rect width="${W}" height="${H}" fill="${C.ground}"/>

  ${text(56, 34, "Fig. 01 · Decision before method", { size: 12, family: MONO, fill: C.accent, spacing: 0.6 })}

  <rect x="${LX}" y="52" width="848" height="40" fill="none" stroke="${C.mint}" stroke-width="1"/>
  ${text(480, 78, "Signal · activation fell 11% over six weeks", { size: 15, fill: C.mint, anchor: "middle" })}

  <path d="M252 92 L252 110 L${LX + CW / 2} 110" fill="none" stroke="${C.mint}" stroke-width="1"/>
  ${arrow(LX + CW / 2, 110, 128)}
  <path d="M708 92 L708 110 L${RX + CW / 2} 110" fill="none" stroke="${C.muted}" stroke-width="1" stroke-dasharray="4 4"/>
  ${arrow(RX + CW / 2, 110, 128, "muted")}

  ${panel(LX, 130, CW, 54, ["Decision named, two live alternatives"], "accent")}
  ${arrow(LX + CW / 2, 184, 206)}
  ${panel(LX, 208, CW, 54, ["Evidence that discriminates"])}
  ${text(LX + CW / 2, 288, "An action changes", { size: 17, weight: 700, fill: C.accent, anchor: "middle" })}

  ${panel(RX, 130, CW, 54, ["Method picked first"], "muted")}
  ${arrow(RX + CW / 2, 184, 206, "muted")}
  ${panel(RX, 208, CW, 54, ["Output that looks like progress"], "muted")}
  ${text(RX + CW / 2, 288, "Nothing changes", { size: 17, fill: C.muted, anchor: "middle" })}
</svg>
`;
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "hero.svg"), hero());
writeFileSync(join(out, "og.svg"), ogCard());

// The share card also ships as PNG, because no major platform unfurls an SVG.
// Rasterised here and committed, so the deploy needs no image toolchain and no
// fonts beyond the system stacks this artwork already uses.
await sharp(join(out, "og.svg"), { density: 144 })
  .resize(1200, 630, { fit: "fill" })
  .png({ compressionLevel: 9 })
  .toFile(join(root, "public", "og.png"));
writeFileSync(join(out, "figure-decision-chain.svg"), decisionChain());

console.log("assets/hero.svg + assets/figure-decision-chain.svg written");
