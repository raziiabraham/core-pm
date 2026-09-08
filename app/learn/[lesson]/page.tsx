import Link from "next/link";
import { notFound } from "next/navigation";
import LessonProgress from "@/app/components/lesson-progress";
import { allLessons, lessonById, lessonBySlug } from "@/lib/curriculum";
import "./lesson.css";

export function generateStaticParams() {
  return allLessons.map((item) => ({ lesson: item.slug }));
}

const phaseFrames: Record<string, { mistake: string; model: string; boundary: string; practice: string[] }> = {
  PF: {
    mistake: "Teams often treat the loudest signal or most available method as the problem. That quietly commits attention before the decision is clear.",
    model: "Separate observation, interpretation, decision, and alternative. Tighten the population and horizon until the next action is honest.",
    boundary: "A good frame does not prove the answer. It states what is known, what is assumed, and which evidence could change the next choice.",
    practice: ["Name the signal without interpreting it.", "Write the decision and at least two alternatives.", "Bound the audience, context, horizon, and consequence.", "State what remains uncommitted."],
  },
  PJ: {
    mistake: "Neutral summaries and confident recommendations can both hide the reasoning that actually produced a choice.",
    model: "Make the current position explicit, show how each input contributed, and preserve the strongest reason the position may be wrong.",
    boundary: "Calibration is not hesitation. It is the discipline of matching confidence, rigor, and authority to exposure and uncertainty.",
    practice: ["State your current recommendation in one sentence.", "Separate evidence, prior, interpretation, and preference.", "Name the displaced alternative and reversal cost.", "Record a credible revision trigger."],
  },
  EV: {
    mistake: "More evidence can create more confidence without creating more decision-relevant information.",
    model: "Start from the claim. Match it to a method, make the measurement boundary explicit, and preserve lineage from observation to conclusion.",
    boundary: "No method answers every question. Evidence should carry only the claim its design, population, and measurement can support.",
    practice: ["Write the claim in falsifiable language.", "Choose the method and explain why it fits.", "Define the population, event, denominator, and window.", "State the inference the evidence cannot support."],
  },
  ST: {
    mistake: "A list of goals, initiatives, or themes can sound strategic while leaving every meaningful trade-off unresolved.",
    model: "Connect diagnosis, product-market hypotheses, a winning mechanism, exclusions, resource choices, sequence, and revision triggers.",
    boundary: "Strategy is a current theory of advantage under constraints. It should guide action now and remain revisable as evidence changes.",
    practice: ["Name the constraint that matters most.", "Describe the mechanism by which the choice creates advantage.", "Name what will not be funded now.", "Specify the signal that should change the strategy."],
  },
  TJ: {
    mistake: "Technical decisions become either black boxes delegated to specialists or architecture debates detached from product consequence.",
    model: "Reason through boundaries, failure modes, lifecycle costs, observability, ownership, and the product value exposed by the system.",
    boundary: "The PM owns product consequences and decision quality—not implementation authority or expertise they do not have.",
    practice: ["Sketch the system boundary and owner at each interface.", "Name the dominant failure modes and affected users.", "Compare lifecycle cost, control, reversibility, and strategic value.", "Record where specialist authority is required."],
  },
  DS: {
    mistake: "Delivery is easily reduced to dates and ticket movement, leaving value conviction, exposure, and learning implicit.",
    model: "Design the sequence as a system of decisions: commit, slice, integrate, review, expose, observe, and adapt.",
    boundary: "Speed is trustworthy when it preserves ownership, feedback, rollback, and the ability to learn before consequence compounds.",
    practice: ["State the value and effort conviction behind commitment.", "Slice around risk retirement and observable value.", "Define review, escalation, and rollback conditions.", "Name the post-launch learning decision."],
  },
  LD: {
    mistake: "Leaders can create dependence while trying to create quality—especially when direction, authority, and intervention are implicit.",
    model: "Make direction decision-enabling, distribute rights by consequence, and coach the reasoning without reclaiming the work.",
    boundary: "Autonomy and accountability grow together when standards, interfaces, evidence, and escalation conditions are visible.",
    practice: ["Name the decision the team should make independently.", "Clarify the owner, participants, and escalation boundary.", "Ask for the reasoning before offering your answer.", "Define how and when temporary control returns."],
  },
};

export default async function LessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params;
  const current = lessonBySlug(lesson);
  if (!current) notFound();
  const index = allLessons.findIndex((item) => item.id === current.id);
  const previous = allLessons[index - 1];
  const next = allLessons[index + 1];
  const frame = phaseFrames[current.phase.id];
  const prerequisites = current.prerequisites.map((id) => lessonById(id)).filter((item) => item !== undefined);

  return <main className="lesson-page">
    <header className="lesson-topbar">
      <Link href="/" className="lesson-brand">CORE / PM</Link>
      <nav><Link href="/#paths">Learning paths</Link><Link href="/#curriculum">All lessons</Link></nav>
      <span>{current.id} · {current.minutes} min</span>
    </header>

    <div className="lesson-shell">
      <aside className="lesson-rail">
        <span>PHASE {current.phase.number}</span>
        <b>{current.phase.title}</b>
        <ol><li><a href="#problem">The problem</a></li><li><a href="#concept">The concept</a></li><li><a href="#build">Build it</a></li><li><a href="#use">Use it</a></li><li><a href="#ship">Ship it</a></li><li><a href="#check">Check</a></li></ol>
        <small>{current.phase.sourcePrograms.join(" · ")}</small>
      </aside>

      <article className="lesson-article">
        <header className="lesson-hero">
          <p>{current.id} · {current.phase.title.toUpperCase()}</p>
          <h1>{current.title}</h1>
          <blockquote>{current.premise}</blockquote>
          <div><span>{current.minutes} min</span><span>1 exercise</span><span>1 artifact</span><span>3 checks</span></div>
        </header>

        {prerequisites.length > 0 && <section className="lesson-prereqs"><b>Before you start</b><p>This lesson builds on {prerequisites.map((item, i) => <span key={item.id}>{i > 0 ? ", " : ""}<Link href={`/learn/${item.slug}`}>{item.id} {item.title}</Link></span>)}.</p></section>}

        <section id="problem"><span className="lesson-kicker">01 · THE PROBLEM</span><h2>Why this judgment gets lost</h2><p>{frame.mistake}</p><p>{current.premise} The practical standard is not whether the artifact looks complete. It is whether another person can inspect the reasoning, locate its limits, and understand the next decision.</p></section>

        <section id="concept"><span className="lesson-kicker">02 · THE CONCEPT</span><h2>A durable model, not a ritual</h2><p>{frame.model}</p><div className="lesson-model"><b>{current.title}</b><i aria-hidden="true">→</i><strong>{current.artifact}</strong></div><aside><b>Boundary</b><p>{frame.boundary}</p></aside></section>

        <section id="build"><span className="lesson-kicker">03 · BUILD IT</span><h2>Practice on the Noted decision case</h2><p>Noted is an AI-assisted document product with four competing signals: activation is declining, enterprise customers request automated summaries, large workspaces are slower, and a platform dependency is nearing end-of-support.</p><ol className="lesson-steps">{frame.practice.map((step, i) => <li key={step}><span>0{i + 1}</span><p>{step}</p></li>)}</ol><div className="lesson-prompt"><b>Your decision</b><p>Apply <em>{current.title.toLowerCase()}</em> to one Noted signal. Make a recommendation, state the strongest reason against it, and name what would change your mind.</p></div></section>

        <section id="use"><span className="lesson-kicker">04 · USE IT</span><h2>Transfer the move to your product</h2><p>Choose one live decision—not a hypothetical initiative. Work from evidence available today and preserve the history before the outcome is known.</p><ul className="lesson-questions"><li>What exact decision will this work change?</li><li>Who owns the consequence and who holds specialist authority?</li><li>Which alternative is displaced if your recommendation is accepted?</li><li>What evidence supports the claim, and what can it not establish?</li><li>What condition should trigger review, reversal, or escalation?</li></ul></section>

        <section id="ship"><span className="lesson-kicker">05 · SHIP IT</span><h2>Keep one reusable artifact</h2><div className="lesson-artifact"><span>OUTPUT / {current.id}</span><h3>{current.artifact}</h3><p>Write it for the next person who must make or review the decision. Include the choice, evidence, uncertainty, alternatives, owner, and revision trigger. Link it into your cumulative Product Decision Case.</p></div><LessonProgress lesson={current.id} title={current.title} /></section>

        <section id="check"><span className="lesson-kicker">06 · CHECK UNDERSTANDING</span><h2>Can the reasoning survive these tests?</h2><div className="lesson-checks"><details><summary>Did you separate the signal from the interpretation?</summary><p>A defensible record lets a reviewer distinguish what was observed from the mechanism or meaning you inferred.</p></details><details><summary>Could a skeptical peer identify the confidence boundary?</summary><p>Name the population, missing evidence, counter-signal, and condition that would materially change the recommendation.</p></details><details><summary>Does the artifact change a real decision?</summary><p>If no owner, alternative, resource, authority, or next action changes, the work is probably informative but not yet decision-ready.</p></details></div></section>

        <footer className="lesson-nav">{previous ? <Link href={`/learn/${previous.slug}`}><span>PREVIOUS · {previous.id}</span><b>{previous.title}</b></Link> : <span />}{next ? <Link className="next" href={`/learn/${next.slug}`}><span>NEXT · {next.id}</span><b>{next.title}</b></Link> : <Link className="next" href="/#curriculum"><span>COMPLETE</span><b>Return to curriculum</b></Link>}</footer>
      </article>
    </div>
  </main>;
}
