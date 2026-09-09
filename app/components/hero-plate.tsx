"use client";

import { useState } from "react";

// A rotating exhibit in the hero. Each plate is one of the course's own
// reasoning structures, drawn rather than described, so a first-time visitor
// can see what a lesson actually contains before committing to anything.
//
// The canvas is 460x250 to match the rendered column width almost exactly. A
// wider viewBox gets scaled down by the browser, which shrinks the labels below
// readable size — that is the whole reason these are hand-drawn rather than
// generated.

const INK = "#e4ece7";
const MUTED = "#8aa79c";
const ACCENT = "#f0b99d";
const CANVAS = { w: 460, h: 250 };

function Panel({
  x, y, w, h, lines, tone = "ink",
}: {
  x: number; y: number; w: number; h: number; lines: string[]; tone?: "ink" | "muted" | "accent";
}) {
  const stroke = tone === "muted" ? MUTED : tone === "accent" ? ACCENT : INK;
  const fill = tone === "muted" ? MUTED : INK;
  const first = y + h / 2 - ((lines.length - 1) * 15) / 2 + 4.5;

  return <g>
    <rect x={x} y={y} width={w} height={h} fill="none" stroke={stroke} strokeWidth="1" strokeDasharray={tone === "muted" ? "3 3" : undefined} />
    {tone === "accent" && <line x1={x} y1={y} x2={x + w} y2={y} stroke={ACCENT} strokeWidth="2.5" />}
    {lines.map((line, i) => <text key={line} x={x + w / 2} y={first + i * 15} textAnchor="middle" fill={fill} fontSize="12.5">{line}</text>)}
  </g>;
}

function Down({ x, y1, y2, tone = "ink" }: { x: number; y1: number; y2: number; tone?: "ink" | "muted" }) {
  const stroke = tone === "muted" ? MUTED : INK;
  return <g>
    <line x1={x} y1={y1} x2={x} y2={y2 - 6} stroke={stroke} strokeWidth="1" strokeDasharray={tone === "muted" ? "3 3" : undefined} />
    <path d={`M${x - 3.5} ${y2 - 6} L${x} ${y2} L${x + 3.5} ${y2 - 6}`} fill="none" stroke={stroke} strokeWidth="1" />
  </g>;
}

/** Fig. 01 — the same signal down two paths; only one ends in a changed action. */
function DecisionChain() {
  const left = 6;
  const right = 240;
  const w = 214;

  return <svg viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`} role="img" aria-label="One signal routed down two paths. Naming the decision first leads to a changed action. Picking a method first leads to output that changes nothing.">
    <Panel x={6} y={6} w={448} h={32} lines={["Signal · activation fell 11%"]} />

    <path d={`M120 38 L120 52 L${left + w / 2} 52`} fill="none" stroke={INK} strokeWidth="1" />
    <Down x={left + w / 2} y1={52} y2={66} />
    <path d={`M340 38 L340 52 L${right + w / 2} 52`} fill="none" stroke={MUTED} strokeWidth="1" strokeDasharray="3 3" />
    <Down x={right + w / 2} y1={52} y2={66} tone="muted" />

    <Panel x={left} y={68} w={w} h={44} lines={["Decision named,", "two live alternatives"]} tone="accent" />
    <Down x={left + w / 2} y1={112} y2={130} />
    <Panel x={left} y={132} w={w} h={44} lines={["Evidence that", "discriminates"]} />
    <Down x={left + w / 2} y1={176} y2={196} />
    <text x={left + w / 2} y={216} textAnchor="middle" fill={ACCENT} fontSize="13.5" fontWeight="600">An action changes</text>

    <Panel x={right} y={68} w={w} h={44} lines={["Method picked first"]} tone="muted" />
    <Down x={right + w / 2} y1={112} y2={130} tone="muted" />
    <Panel x={right} y={132} w={w} h={44} lines={["Output that looks", "like progress"]} tone="muted" />
    <Down x={right + w / 2} y1={176} y2={196} tone="muted" />
    <text x={right + w / 2} y={216} textAnchor="middle" fill={MUTED} fontSize="13.5">Nothing changes</text>
  </svg>;
}

/** Fig. 02 — the four signals of the shared case, and why they conflict. */
function CompetingSignals() {
  const points = [
    { x: 150, y: 178, label: "Summaries ×3", anchor: "start" as const },
    { x: 232, y: 156, label: "Activation −11%", anchor: "start" as const },
    { x: 366, y: 182, label: "P95 +34%", anchor: "end" as const },
    { x: 392, y: 62, label: "Dependency, 10 wks", anchor: "end" as const },
  ];

  return <svg viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`} role="img" aria-label="The four signals of the shared case plotted by how much evidence is held against how much time pressure they carry.">
    <line x1={64} y1={206} x2={444} y2={206} stroke={MUTED} strokeWidth="1" />
    <line x1={64} y1={26} x2={64} y2={206} stroke={MUTED} strokeWidth="1" />
    <line x1={254} y1={26} x2={254} y2={206} stroke={MUTED} strokeWidth="1" strokeDasharray="2 4" />
    <line x1={64} y1={116} x2={444} y2={116} stroke={MUTED} strokeWidth="1" strokeDasharray="2 4" />

    <text x={68} y={224} fill={MUTED} fontSize="11">weak evidence</text>
    <text x={444} y={224} textAnchor="end" fill={MUTED} fontSize="11">strong evidence</text>
    <text x={56} y={26} textAnchor="end" fill={MUTED} fontSize="11" transform="rotate(-90 56 26)">hard deadline</text>
    <text x={56} y={206} textAnchor="start" fill={MUTED} fontSize="11" transform="rotate(-90 56 206)">no deadline</text>

    {points.map((point) => <g key={point.label}>
      <circle cx={point.x} cy={point.y} r="4.5" fill={ACCENT} />
      <text
        x={point.anchor === "start" ? point.x + 11 : point.x - 11}
        y={point.y + 4.5}
        textAnchor={point.anchor}
        fill={INK}
        fontSize="12.5"
      >{point.label}</text>
    </g>)}
  </svg>;
}

/** Fig. 03 — what every artifact in the course has to expose. */
function SixExposures() {
  const cells = ["The choice", "The evidence", "The uncertainty", "The alternatives", "The owner", "What changes your mind"];

  return <svg viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`} role="img" aria-label="The six things every decision artifact in the course must expose: the choice, the evidence, the uncertainty, the alternatives, the owner, and what would change your mind.">
    <text x={6} y={18} fill={MUTED} fontSize="11.5">Decision brief · what a reviewer must be able to find</text>
    <line x1={6} y1={28} x2={454} y2={28} stroke={MUTED} strokeWidth="1" />

    {cells.map((cell, i) => {
      const x = i % 2 === 0 ? 6 : 236;
      const y = 42 + Math.floor(i / 2) * 70;
      return <g key={cell}>
        <rect x={x} y={y} width={218} height={56} fill="none" stroke={INK} strokeWidth="1" />
        <line x1={x} y1={y} x2={x + 218} y2={y} stroke={ACCENT} strokeWidth="2.5" />
        <text x={x + 14} y={y + 24} fill={MUTED} fontSize="11">{String(i + 1).padStart(2, "0")}</text>
        <text x={x + 14} y={y + 43} fill={INK} fontSize="13">{cell}</text>
      </g>;
    })}
  </svg>;
}

const plates = [
  {
    id: "01",
    title: "Decision before method",
    caption: "The move every lesson starts from. Name the choice, or no finding can change anything.",
    Figure: DecisionChain,
  },
  {
    id: "02",
    title: "One shared case",
    caption: "Four signals compete for the same scarce attention. Deciding which earns it is the work.",
    Figure: CompetingSignals,
  },
  {
    id: "03",
    title: "What you keep",
    caption: "Every lesson ends in an artifact another PM can inspect, challenge, and reuse.",
    Figure: SixExposures,
  },
];

export default function HeroPlate() {
  const [index, setIndex] = useState(0);
  const plate = plates[index];
  const { Figure } = plate;
  const go = (next: number) => setIndex((next + plates.length) % plates.length);

  return <figure className="hero-plate">
    <header>
      <span>Fig. {plate.id}</span>
      <b>{plate.title}</b>
    </header>

    <div className="hero-plate-frame"><Figure /></div>

    <figcaption>{plate.caption}</figcaption>

    <nav aria-label="Hero figures">
      <button type="button" onClick={() => go(index - 1)} aria-label="Previous figure">Previous</button>
      <span className="hero-plate-dots">
        {plates.map((item, i) => <button
          key={item.id}
          type="button"
          className={i === index ? "is-active" : ""}
          aria-label={`Figure ${item.id}: ${item.title}`}
          aria-current={i === index}
          onClick={() => setIndex(i)}
        />)}
      </span>
      <button type="button" onClick={() => go(index + 1)} aria-label="Next figure">Next</button>
    </nav>
  </figure>;
}
