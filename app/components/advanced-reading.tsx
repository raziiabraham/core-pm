import Link from "next/link";
import "../noted/noted.css";
import "../noted/verbose.css";
import "../session.css";
import "../reading-prose.css";
import "./advanced-reading.css";
import LessonProgress from "./lesson-progress";

export type ReadingItem = {
  kicker?: string;
  title: string;
  copy: string;
  note?: string;
  tone?: "default" | "highlight" | "warning" | "muted";
};

export type ReadingExhibit = {
  label: string;
  title: string;
  description?: string;
  kind: "chain" | "grid" | "ledger" | "contrast" | "spectrum";
  items: ReadingItem[];
  implication?: { label: string; copy: string };
};

export type ReadingUnit = {
  number: string;
  eyebrow: string;
  shortTitle: string;
  title: string;
  thesis: string;
  intro: string;
  prose: string[];
  aside: { title: string; copy: string };
  exhibits: ReadingExhibit[];
  prompt: { title: string; copy: string; output: string };
  carry: string;
  sources: string;
};

export type SessionReadingData = {
  number: number;
  arc: string;
  title: string;
  description: string;
  checkpoint: string;
  orientation: string;
  units: ReadingUnit[];
  checkpointIntro: string;
  checkpointFields: ReadingItem[];
  next: { label: string; title: string; copy: string };
};

function Exhibit({ exhibit }: { exhibit: ReadingExhibit }) {
  return <section className={`advanced-exhibit ${exhibit.kind}`}>
    <header><span>{exhibit.label}</span><h3>{exhibit.title}</h3>{exhibit.description && <p>{exhibit.description}</p>}</header>
    <div className={`advanced-exhibit-items ${exhibit.kind}`}>
      {exhibit.items.map((item, index) => <article className={item.tone ?? "default"} key={`${item.title}-${index}`}>
        <span>{item.kicker ?? String(index + 1).padStart(2, "0")}</span>
        <b>{item.title}</b>
        <p>{item.copy}</p>
        {item.note && <small>{item.note}</small>}
      </article>)}
    </div>
    {exhibit.implication && <aside className="advanced-implication"><b>{exhibit.implication.label}</b><p>{exhibit.implication.copy}</p></aside>}
  </section>;
}

function ReadingDecision({ unit }: { unit: ReadingUnit }) {
  return <section className="advanced-decision">
    <div><span>MAKE THE CALL · LESSON {unit.number}</span><small>Write before continuing</small></div>
    <article><h3>{unit.prompt.title}</h3><p>{unit.prompt.copy}</p></article>
    <aside><b>BRING THIS OUTPUT</b><p>{unit.prompt.output}</p></aside>
  </section>;
}

function ReadingHeroVisual({ data }: { data: SessionReadingData }) {
  const visualHeader = <header className="reading-visual-header"><span>PHASE {data.number} ARTIFACT</span><b>{data.checkpoint}</b></header>;

  if (data.number === 2) {
    return <section className="reading-hero-visual evidence-visual" aria-label="Evidence to belief update model">
      {visualHeader}
      <div className="evidence-inputs">
        <article><small>CLAIM</small><b>What must be true?</b><p>Start with the weakest consequential belief.</p></article>
        <article><small>OBSERVABILITY</small><b>What can we actually know?</b><p>Match the method to what the product can reveal.</p></article>
        <article><small>CONTRADICTION</small><b>What could change our mind?</b><p>Keep disconfirming evidence inside the synthesis.</p></article>
      </div>
      <i className="evidence-connector" aria-hidden="true" />
      <div className="evidence-update">
        <span>BELIEF UPDATE</span>
        <strong>Strengthen · weaken<br />narrow · reframe</strong>
        <p>Change the decision state—not the size of the evidence packet.</p>
      </div>
    </section>;
  }

  if (data.number === 3) {
    return <section className="reading-hero-visual choice-visual" aria-label="Strategy and constraint choice architecture">
      {visualHeader}
      <div className="choice-direction">
        <span>01 · DIRECTION</span>
        <b>Choose the governing logic</b>
        <p>One diagnosis. One winning mechanism. One explicit exclusion.</p>
      </div>
      <div className="choice-branches" aria-hidden="true"><i /><i /></div>
      <div className="choice-options">
        <article><span>02 · PORTFOLIO</span><b>Allocate the work</b><p>Fund the strategy and make displacement visible.</p></article>
        <article><span>03 · TECHNICAL OPTION</span><b>Reprice the path</b><p>Build, buy, adapt, defer, or choose no-build.</p></article>
      </div>
      <div className="choice-record"><span>PORTABLE CHOICE</span><b>Direction + allocation + threshold + owner</b></div>
    </section>;
  }

  return <section className="reading-hero-visual loop-visual" aria-label="Commit adapt and learn decision loop">
    {visualHeader}
    <div className="decision-loop">
      <article className="loop-node commit"><span>01 · COMMIT</span><b>Authority + dissent</b></article>
      <article className="loop-node adapt"><span>02 · ADAPT</span><b>Sequence + ownership</b></article>
      <article className="loop-node learn"><span>03 · LEARN</span><b>Outcome + revision</b></article>
      <div className="loop-core"><span>DECISION SURVIVES</span><strong>Context stays<br />portable</strong></div>
    </div>
    <div className="loop-demo"><span>FINAL REVIEW</span><b>Explain how the judgment evolved—not only where it ended.</b></div>
  </section>;
}

export default function AdvancedReading({ data }: { data: SessionReadingData }) {
  return <main className="noted-briefing session-page advanced-reading">
    <header className="noted-topbar">
      <Link href="/" className="noted-course-mark">CORE / PM</Link>
      <div className="noted-topbar-actions session-topbar-actions"><span>Phase {data.number} · 3 lessons · 40 min</span><Link href="/">Curriculum ←</Link></div>
    </header>

    <section className="advanced-reading-hero">
      <div className="advanced-reading-hero-copy">
        <p className="noted-kicker">Phase {data.number} · {data.arc}</p>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="noted-actions"><a className="noted-primary" href="#orientation">Begin phase {data.number} ↓</a><Link className="noted-secondary" href={`/session-${data.number}`}>Phase overview</Link></div>
      </div>
      <ReadingHeroVisual data={data} />
    </section>

    <nav className="noted-reading-map" aria-label={`Phase ${data.number} contents`}>
      <span>Phase map</span><a href="#orientation">00 · Start here</a>{data.units.map((unit) => <a href={`#unit-${unit.number}`} key={unit.number}>{unit.number} · {unit.shortTitle}</a>)}<a href="#checkpoint">Artifact</a>
    </nav>

    <section className="noted-section advanced-orientation" id="orientation">
      <div className="noted-section-heading"><span>Start here · The learning contract</span><h2>{data.orientation}</h2><p>Read for the reasoning, not the labels. Work each decision before moving on, apply it to Noted or your own product, then keep the result in one evolving Product Decision Case.</p></div>
      <div className="advanced-reading-arc">
        {data.units.map((unit, index) => <article key={unit.number}><span>{unit.number}</span><small>{unit.eyebrow}</small><b>{unit.shortTitle}</b><p>{unit.carry}</p>{index < data.units.length - 1 && <i aria-hidden="true" />}</article>)}
      </div>
      <aside className="session-standard"><b>The standard</b><p>A strong answer makes the decision consequence, evidence boundary, uncertainty, and revision condition inspectable. Completing a framework is never sufficient by itself.</p></aside>
    </section>

    {data.units.map((unit, unitIndex) => <section className={`session-unit advanced-unit ${unitIndex % 2 ? "alternate" : ""}`} id={`unit-${unit.number}`} key={unit.number}>
      <header className="session-unit-header"><div><span>LESSON {unit.number} · {unit.eyebrow}</span><small>{unit.title}</small></div><b>{unit.number}</b></header>
      <section className="session-unit-intro"><h2>{unit.thesis}</h2><p>{unit.intro}</p></section>
      <section className="session-concept-copy" aria-label={`Unit ${unit.number} concept explanation`}>
        <div>{unit.prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside><b>{unit.aside.title}</b><p>{unit.aside.copy}</p></aside>
      </section>
      {unit.exhibits.map((exhibit) => <Exhibit exhibit={exhibit} key={exhibit.label} />)}
      <ReadingDecision unit={unit} />
      <aside className="session-carry"><b>Carry forward</b><p>{unit.carry}</p></aside>
      <LessonProgress lesson={`lesson-${unit.number}`} title={unit.shortTitle} />
      <footer className="session-source"><b>Sources and further reading</b><p>{unit.sources}</p></footer>
    </section>)}

    <section className="session-checkpoint advanced-checkpoint" id="checkpoint" aria-label={`Phase ${data.number} artifact`}>
      <header><span>PHASE {data.number} · KEEP THIS ARTIFACT</span><h2>{data.checkpoint}</h2><p>{data.checkpointIntro}</p></header>
      <div className="advanced-checkpoint-grid">{data.checkpointFields.map((field, index) => <article className={field.tone === "highlight" ? "final" : ""} key={field.title}><span>{String(index + 1).padStart(2, "0")}</span><b>{field.title}</b><p>{field.copy}</p>{field.note && <small>{field.note}</small>}</article>)}</div>
      <aside><b>Review standard</b><p>The checkpoint should show how the new reasoning changes one evolving Product Decision Case—not attach three disconnected worksheets.</p></aside>
    </section>

    <section className="advanced-next">
      <div><span>PHASE {data.number}</span><b>{data.checkpoint}</b><p>Keep this linked decision record.</p></div><i aria-hidden="true" />{data.number < 4 ? <Link className="next advanced-next-link" href={`/session-${data.number + 1}`}><span>{data.next.label}</span><b>{data.next.title}</b><p>{data.next.copy}</p><strong>Open phase {data.number + 1} <em aria-hidden="true">›</em></strong></Link> : <div className="next"><span>{data.next.label}</span><b>{data.next.title}</b><p>{data.next.copy}</p></div>}
    </section>
    <footer className="noted-footer"><span>CORE / PM · Phase {data.number}</span><span>Product context from Noted; staged evidence is constructed for practice unless explicitly labeled real.</span></footer>
  </main>;
}
