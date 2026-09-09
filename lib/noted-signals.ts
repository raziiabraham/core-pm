// The four signals of the shared Noted case, placed by how much evidence is
// held (x) against how much time pressure they carry (y), on a 0-1 scale.
//
// The placement is a reading of the case, not a fact in it — `lessons/noted/case.md`
// says so, and disagreeing with it is most of the Phase 01 exercise. What matters
// is that every surface argues with the *same* reading. Two surfaces draw these
// points: the quadrant chart in `lessons/noted/case.md`, which the skills also
// read, and the `CompetingSignals` plate in the site hero. They used to carry
// separate hand-typed coordinates and had drifted by up to 0.22 on an axis.
//
// The case file is the source of truth for the numbers, because the skills teach
// from it. `tests/rendered-html.test.mjs` asserts its mermaid block still matches
// this table, so neither can move without the other.
//
// Label text differs per surface on purpose: the case chart has room for a full
// phrase, the hero plate is 460px wide and does not.

export type NotedSignal = {
  /** Ordering used in the case file's chart and its prose sections. */
  id: number;
  /** Evidence held, 0 (weak) to 1 (strong). */
  x: number;
  /** Time pressure, 0 (no deadline) to 1 (hard deadline). */
  y: number;
  /** Label in `lessons/noted/case.md`. */
  caseLabel: string;
  /** Shorter label for the hero plate. */
  heroLabel: string;
};

export const notedSignals: NotedSignal[] = [
  { id: 1, x: 0.42, y: 0.3, caseLabel: "Activation down 11 pct", heroLabel: "Activation −11%" },
  { id: 2, x: 0.18, y: 0.38, caseLabel: "Enterprise summaries", heroLabel: "Summaries ×3" },
  { id: 3, x: 0.62, y: 0.22, caseLabel: "Large-workspace P95", heroLabel: "P95 +34%" },
  { id: 4, x: 0.7, y: 0.88, caseLabel: "Dependency end-of-support", heroLabel: "Dependency, 10 wks" },
];

export const notedSignalById = (id: number): NotedSignal => {
  const signal = notedSignals.find((item) => item.id === id);
  if (!signal) throw new Error(`No Noted signal with id ${id}`);
  return signal;
};
