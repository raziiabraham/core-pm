import Link from "next/link";
import MermaidDiagrams from "@/app/components/mermaid-diagrams";
import { notFound } from "next/navigation";
import LessonProgress from "@/app/components/lesson-progress";
import { allLessons, lessonById, lessonBySlug } from "@/lib/curriculum";
import { lessonArtifact, lessonChecks, lessonContent } from "@/lib/lesson-content";
import CopyMarkdown from "@/app/components/copy-markdown";
import "./lesson.css";

// Lesson bodies are authored markdown in lessons/**/lesson.md and rendered at
// build time. The source is trusted repository content, not user input.
function Prose({ html }: { html: string }) {
  return <div className="lesson-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}

// Each lesson supplies its own section heading after an em dash, e.g.
// "## Problem — the survey nobody acts on". These are the fallbacks for a
// lesson that has not been given one yet; they are deliberately generic, and a
// page showing them means the lesson still needs a heading written for it.
const sectionHeadings: Record<string, string> = {
  problem: "Why this judgment gets lost",
  concept: "A durable model, not a ritual",
  build: "Practice on the Noted decision case",
  use: "Transfer the move to your product",
};

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
  const authored = lessonContent(current.slug);
  const checks = lessonChecks(current.slug);
  const artifact = lessonArtifact(current.slug);
  const prerequisites = current.prerequisites.map((id) => lessonById(id)).filter((item) => item !== undefined);

  return <main className="lesson-page">
    <header className="lesson-topbar">
      <Link href="/" className="lesson-brand">CORE / PM</Link>
      <nav><Link href="/#paths">Learning paths</Link><Link href="/#curriculum">All lessons</Link></nav>
      <span>{current.id} · {current.minutes} min</span>
    </header>

    <div className="lesson-shell">
      <aside className="lesson-rail">
        <span>Phase {current.phase.number}</span>
        <b>{current.phase.title}</b>
        <ol><li><a href="#problem">The problem</a></li><li><a href="#concept">The concept</a></li><li><a href="#build">Build it</a></li><li><a href="#use">Use it</a></li><li><a href="#ship">Ship it</a></li><li><a href="#check">Check</a></li></ol>
        <small>{current.phase.domains.join(" · ")}</small>
      </aside>

      <article className="lesson-article">
        <header className="lesson-hero">
          <p>{current.id} · {current.phase.title}</p>
          <h1>{current.title}</h1>
          <blockquote>{current.premise}</blockquote>
          <div><span>{current.minutes} min</span><span>1 exercise</span><span>1 artifact</span><span>{checks.length || 3} checks</span></div>
        </header>

        {prerequisites.length > 0 && <section className="lesson-prereqs"><b>Before you start</b><p>This lesson builds on {prerequisites.map((item, i) => <span key={item.id}>{i > 0 ? ", " : ""}<Link href={`/learn/${item.slug}`}>{item.id} {item.title}</Link></span>)}.</p></section>}

        <section id="problem"><span className="lesson-kicker">01 · The problem</span>{authored?.byKey.problem
          ? <><h2>{authored.byKey.problem.subtitle ?? sectionHeadings.problem}</h2><Prose html={authored.byKey.problem.html} /></>
          : <><h2>Why this judgment gets lost</h2><p>{frame.mistake}</p><p>{current.premise} The practical standard is not whether the artifact looks complete. It is whether another person can inspect the reasoning, locate its limits, and understand the next decision.</p></>}</section>

        <section id="concept"><span className="lesson-kicker">02 · The concept</span>{authored?.byKey.concept
          ? <><h2>{authored.byKey.concept.subtitle ?? sectionHeadings.concept}</h2><Prose html={authored.byKey.concept.html} /></>
          : <><h2>A durable model, not a ritual</h2><p>{frame.model}</p><div className="lesson-model"><b>{current.title}</b><i aria-hidden="true">→</i><strong>{current.artifact}</strong></div><aside><b>Boundary</b><p>{frame.boundary}</p></aside></>}</section>

        <section id="build"><span className="lesson-kicker">03 · Build it</span>{authored?.byKey.build
          ? <><h2>{sectionHeadings.build}</h2><Prose html={authored.byKey.build.html} /></>
          : <><h2>Practice on the Noted decision case</h2><p>Noted is an AI-assisted document product with four competing signals: activation is declining, enterprise customers request automated summaries, large workspaces are slower, and a platform dependency is nearing end-of-support.</p><ol className="lesson-steps">{frame.practice.map((step, i) => <li key={step}><span>0{i + 1}</span><p>{step}</p></li>)}</ol><div className="lesson-prompt"><b>Your decision</b><p>Apply <em>{current.title.toLowerCase()}</em> to one Noted signal. Make a recommendation, state the strongest reason against it, and name what would change your mind.</p></div></>}</section>

        <section id="use"><span className="lesson-kicker">04 · Use it</span>{authored?.byKey.use
          ? <><h2>{sectionHeadings.use}</h2><div className="lesson-worksheet"><header><b>Worksheet · your product</b><CopyMarkdown text={authored.byKey.use.markdown} label="Copy questions as .md" /></header><Prose html={authored.byKey.use.html} /></div></>
          : <><h2>Transfer the move to your product</h2><p>Choose one live decision—not a hypothetical initiative. Work from evidence available today and preserve the history before the outcome is known.</p><ul className="lesson-questions"><li>What exact decision will this work change?</li><li>Who owns the consequence and who holds specialist authority?</li><li>Which alternative is displaced if your recommendation is accepted?</li><li>What evidence supports the claim, and what can it not establish?</li><li>What condition should trigger review, reversal, or escalation?</li></ul></>}</section>

        <section id="ship"><span className="lesson-kicker">05 · Ship it</span><h2>Keep one reusable artifact</h2><div className="lesson-artifact"><span>Output · {current.id}</span><h3>{current.artifact}</h3><p>Write it for the next person who must make or review the decision. Include the choice, evidence, uncertainty, alternatives, owner, and revision trigger. Link it into your cumulative Product Decision Case.</p></div>{authored?.byKey.ship && <Prose html={authored.byKey.ship.html} />}{artifact && <>
          <div className="lesson-template">
            <header><div><b>Template · {artifact.name}</b>{artifact.filename && <code>{artifact.filename}</code>}</div><CopyMarkdown text={artifact.template} label="Copy template as .md" /></header>
            <pre>{artifact.template}</pre>
            <footer>Replace every <code>&lt;angle-bracket&gt;</code> with your own judgment. Where you do not know, write <code>&lt;unknown&gt;</code> and keep it — a named gap is a finding. Never fill a slot with a number you did not measure.</footer>
          </div>
          {artifact.qualityBarHtml && <div className="lesson-quality"><h3>Before you call it done</h3><p>Six things a reviewer must be able to find. If one is missing, the artifact is not finished — it is a draft with a hole in it.</p><Prose html={artifact.qualityBarHtml} /></div>}
        </>}<LessonProgress lesson={current.id} title={current.title} /></section>

        <section id="check"><span className="lesson-kicker">06 · Check understanding</span><h2>Can the reasoning survive these tests?</h2>{checks.length > 0
          ? <><p className="lesson-checks-intro">Answer before you open the explanation. The tutor asks these one at a time and does not show the options&rsquo; verdicts until you commit.</p><ol className="lesson-quiz">{checks.map((check, i) => <li key={check.question}><p className="lesson-quiz-q"><span>{String(i + 1).padStart(2, "0")}</span>{check.question}</p><ul>{check.options.map((option, n) => <li key={option}><b>{"ABCD"[n]}</b>{option}</li>)}</ul><details><summary>Reveal the answer</summary><p><b>{"ABCD"[check.correct]}.</b> {check.explanation}</p></details></li>)}</ol></>
          : <div className="lesson-checks"><details><summary>Did you separate the signal from the interpretation?</summary><p>A defensible record lets a reviewer distinguish what was observed from the mechanism or meaning you inferred.</p></details><details><summary>Could a skeptical peer identify the confidence boundary?</summary><p>Name the population, missing evidence, counter-signal, and condition that would materially change the recommendation.</p></details><details><summary>Does the artifact change a real decision?</summary><p>If no owner, alternative, resource, authority, or next action changes, the work is probably informative but not yet decision-ready.</p></details></div>}</section>

        <footer className="lesson-nav">{previous ? <Link href={`/learn/${previous.slug}`}><span>Previous · {previous.id}</span><b>{previous.title}</b></Link> : <span />}{next ? <Link className="next" href={`/learn/${next.slug}`}><span>Next · {next.id}</span><b>{next.title}</b></Link> : <Link className="next" href="/#curriculum"><span>Complete</span><b>Return to curriculum</b></Link>}</footer>
      </article>
    </div>
    <MermaidDiagrams />
  </main>;
}
