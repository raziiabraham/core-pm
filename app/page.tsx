import Link from "next/link";
import { enterpriseProductQuestion, notedDecisionQuestions } from "../lib/session-one-framing";
import "./noted/noted.css";
import "./noted/audience.css";
import "./noted/verbose.css";
import "./session.css";
import "./decision-sequence.css";
import "./course-home.css";
import "./reading-prose.css";
import CourseCatalog from "./components/course-catalog";
import LessonProgress from "./components/lesson-progress";

const rigorConditions = [
  { title: "Consequence", question: "What value, harm, trust, money, or strategic option is exposed?", high: "Trust, safety, revenue, or a strategic option is at risk." },
  { title: "Reversibility", question: "Can the choice be undone cleanly—and who absorbs the reversal cost?", high: "The choice changes persistent data, behavior, reputation, or switching cost." },
  { title: "Uncertainty", question: "Which unknown could realistically reverse the decision?", high: "A plausible unknown could change the recommendation." },
  { title: "Timing", question: "What is the cost of waiting—and of moving too soon?", high: "A window closes, harm compounds, or premature action creates exposure." },
  { title: "Expertise", question: "Whose specialist knowledge or authority is required?", high: "The decision depends on expertise the PM does not hold." },
];

const evidenceInputs = [
  { title: "Quantitative evidence", job: "Pattern and magnitude", copy: "Shows what changed within a defined population, measurement system, and time window.", limit: "Cannot establish the mechanism by itself." },
  { title: "User context", job: "Mechanism and circumstances", copy: "Reveals how the experience unfolds, the language people use, their constraints, and their alternatives.", limit: "Cannot estimate prevalence by itself." },
  { title: "Product judgment", job: "Integration and trade-offs", copy: "Combines the evidence with accumulated exposure, priors, strategic context, and accountability.", limit: "Cannot create evidence that is missing." },
];

const pressureDimensions = [
  { title: "Presence", question: "Do members of the named audience experience the specific problem?" },
  { title: "Severity", question: "What consequence does it create?" },
  { title: "Frequency", question: "How often and under which conditions?" },
  { title: "Ownership", question: "Who feels responsible for solving it?" },
  { title: "Workaround", question: "What do people do today?" },
  { title: "Commitment", question: "What behavior or cost shows willingness to change?" },
];

function SourceNote({ children }: { children: React.ReactNode }) {
  return <footer className="session-source"><b>Sources and further reading</b><p>{children}</p></footer>;
}

function DecisionPrompt({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="session-prompt">
    <div><span>{label}</span><small>Individual decision</small></div>
    <article><h3>{title}</h3><p>{children}</p></article>
    <aside><b>Output</b><p>Make one recommendation. State the strongest reason against it and what would change your mind.</p></aside>
  </section>;
}

export function SessionOneReading() {
  return <main className="noted-briefing session-page">
    <header className="noted-topbar">
      <Link href="/" className="noted-course-mark">CORE / PM</Link>
      <div className="noted-topbar-actions session-topbar-actions"><span>Phase 1 · 3 lessons · 40 min</span><Link href="/">Curriculum ←</Link></div>
    </header>

    <section className="session-hero">
      <div className="session-hero-copy">
        <p className="noted-kicker">Phase 1 · Frame</p>
        <h1 aria-label="Re-own the product decision">Re-own the<br /><em>product decision.</em></h1>
        <p>Build the reasoning chain that makes a product decision inspectable—from its boundary and evidence to a revisable problem hypothesis.</p>
        <div className="noted-actions"><a className="noted-primary" href="#orientation">Begin phase 1 ↓</a><Link className="noted-secondary" href="/noted">Review the product context</Link></div>
      </div>
      <div className="session-hero-model" aria-label="Phase 1 learning sequence">
        <header><span>PHASE 1 ARTIFACT</span><b>Decision &amp; Problem Hypothesis</b></header>
        <div><small>01</small><b>Choose an investigation</b><p>Name the product decision the evidence could change.</p></div>
        <i aria-hidden="true" />
        <div><small>02</small><b>Form a view</b><p>Synthesize evidence and judgment.</p></div>
        <i aria-hidden="true" />
        <div><small>03</small><b>Earn the problem</b><p>Keep the hypothesis revisable.</p></div>
      </div>
    </section>

    <nav className="noted-reading-map" aria-label="Phase 1 contents"><span>Phase map</span><a href="#orientation">00 · Start here</a><a href="#attention">01 · Choose attention</a><a href="#view">02 · Form a view</a><a href="#problem">03 · Earn the problem</a><a href="#checkpoint">Artifact</a></nav>

    <section className="noted-section session-orientation" id="orientation">
      <div className="noted-section-heading"><span>Start here · The learning contract</span><h2>Phase 1 moves from competing signals to one inspectable decision record.</h2><p>The three lessons are not separate templates. Each adds one layer to the same decision case: first the choice, then the current view, then the linked audience–problem–value hypothesis.</p></div>
      <div className="session-arc">
        <article><span>01</span><h3>Decision boundary</h3><p>Choice, owner, population, horizon, consequence, reversibility, and deliberate exclusions.</p></article><i aria-hidden="true" />
        <article><span>02</span><h3>Current product view</h3><p>Evidence contribution, judgment, counter-signal, confidence boundary, and revision trigger.</p></article><i aria-hidden="true" />
        <article><span>03</span><h3>Linked hypothesis</h3><p>Audience, problem, value, current alternative, weakest consequential claim, and disposition.</p></article>
      </div>
      <div className="session-principles">
        <article><span>READ</span><b>Build the model</b><p>Follow the explanation and exhibits. Mark one sentence you disagree with.</p></article>
        <article><span>DECIDE</span><b>Make the call</b><p>Use the shared Noted case and commit your answer before moving forward.</p></article>
        <article><span>APPLY + KEEP</span><b>Transfer the judgment</b><p>Apply the reasoning to your product and add the result to one evolving case.</p></article>
      </div>
      <aside className="session-standard"><b>The standard</b><p>You are not assessed on producing a beautiful artifact. You are assessed on whether another PM can inspect your reasoning, see its limits, and understand what would change your mind.</p></aside>
    </section>

    <section className="session-unit" id="attention">
      <header className="session-unit-header"><div><span>LESSON 01 · DECISION LEVERAGE</span><small>Choose what deserves PM attention</small></div><b>01</b></header>
      <section className="session-unit-intro"><h2>You cannot investigate every signal at once. First, state the exact product decision that evidence about each signal could change.</h2><p>Noted has an activation decline, three automated-summary requests, slower large workspaces, and a dependency migration deadline. Each signal could lead to different work. The first task is to choose which product decision receives PM investigation time this week—not which solution receives design and engineering capacity.</p></section>
      <section className="session-concept-copy" aria-label="Unit 1 concept explanation">
        <div><p>A signal is an observation: a metric changed, customers requested a feature, system performance worsened, or a deadline moved closer. A signal does not establish its cause, priority, or solution. The activation decline does not prove that the first-session experience caused it. Three automated-summary requests do not prove that summaries should be built. Translate each signal into an explicit product decision with alternatives.</p><p>Then decide which product decision receives PM investigation time this week. Design and engineering capacity remains uncommitted until the PM reviews the evidence and competing priorities. Choosing an investigation is not the same as adding a solution to the roadmap.</p><p>This is how we apply Reforge’s decision-first principle: before selecting a research method, state the product decision the evidence could change. The PM does not choose the product answer first and search for confirming evidence. The explicit decision gives the investigation a defined job.</p></div>
        <aside><b>Follow one explicit chain</b><p>Observe the signal. State the product decision and alternatives. Choose one investigation. Collect decision-relevant evidence. Then decide whether any product work receives capacity.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 1</span><h3>Map each signal to the product decision its evidence could change.</h3><p>These are working decisions with explicit alternatives. They do not establish a cause, select an answer, or rank the four signals.</p></header>
        <div className="reading-decision-example signal-question-reading" aria-label="Noted signals and the product questions behind them">
          <dl>
            {notedDecisionQuestions.map((item) => <div key={item.id}><dt>{item.signal}</dt><dd>{item.question}</dd></div>)}
          </dl>
          <p>Now choose which product decision receives PM investigation time this week. Compare the exposed value or harm, deadline, cost of waiting, reversibility, and evidence requirement—not only how loud or recent each signal is. The next exhibit explains exactly what the enterprise investigation commits and leaves uncommitted.</p>
        </div>
        <div className="reading-decision-example" aria-label="Choosing an investigation without committing the roadmap">
          <h4>Choose what to investigate, not what to build yet.</h4>
          <p>Suppose the Noted PM spends this week on the enterprise question: <strong>{enterpriseProductQuestion}</strong> Enterprise is an example here—not a proven top priority. The Noted PM investigates with enterprise team leads and presents the findings at the next planning discussion.</p>
          <dl>
            <div><dt>PM investigation this week</dt><dd>Test the enterprise workflow hypothesis with enterprise team leads. No design or engineering time has been assigned to summaries or another solution.</dd></div>
            <div><dt>Evidence to collect</dt><dd>Review recent recurring meetings. Check whether decisions, action owners, or required context were lost; who reconstructed the missing information; and whether rework, delay, or a missed commitment followed. Document how teams manage the workflow today.</dd></div>
            <div><dt>Product decision after review</dt><dd>Review the evidence and competing priorities, then decide whether to assign design and engineering capacity to the workflow, keep the current roadmap, or redefine the problem.</dd></div>
          </dl>
          <p>For example, a team may retain every decision but fail to assign an action owner before the meeting ends. That finding would point to owner assignment, not missing summaries. Another team may already use a task tool that records decisions and owners without material rework. These are possible findings, not facts supplied by the case. A few interviews also cannot establish how often any breakdown occurs across all enterprise teams.</p>
          <p>Exploratory discovery still belongs here. The investigation may show that the working decision names the wrong audience, workflow breakdown, or alternatives. The PM does not need a fixed solution shortlist before talking to users, but must state which product decision the evidence is intended to change.</p>
        </div>
        <aside className="session-test"><b>What decision-first means here</b><p>Before choosing a research method, state the product decision and alternatives the evidence could change. Reforge contrasts this with decision-last: doing research first, then trying to find a decision that can use the results. Choosing an investigation allocates PM time. It does not allocate design or engineering capacity.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 2</span><h3>Five conditions determine the appropriate rigor; none should become a mechanical score.</h3><p>Rigor should rise when a condition increases the exposure or the chance of making an avoidable mistake.</p></header>
        <div className="session-rigor-table">
          <div className="head"><span>Condition</span><span>Diagnostic question</span><span>Higher-rigor signal</span></div>
          {rigorConditions.map((item) => <div key={item.title}><b>{item.title}</b><span>{item.question}</span><em>{item.high}</em></div>)}
        </div>
        <aside className="session-note"><b>Interpretation</b><p>The screen structures a judgment conversation. It does not calculate the answer.</p></aside>
      </section>

      <section className="session-two-column">
        <article><span>REVERSIBILITY</span><h3>A decision is not reversible because the team calls it an experiment.</h3><p>Exposure limits, rollback paths, data boundaries, and explicit stop conditions create reversibility. A small change can still be consequential when it touches trust, money, safety, or persistent data.</p></article>
        <article><span>AI’S ROLE</span><h3>Use AI to reduce retrieval cost—not to choose importance.</h3><p>AI can gather requests, summarize decision history, and expose missing context. Its speed makes weak questions more dangerous: it can produce a large, plausible evidence packet for a decision that never deserved investigation.</p></article>
      </section>

      <DecisionPrompt label="MAKE THE CALL · LESSON 01" title="Which product decision should the Noted PM investigate this week?">Choose one of the four product decisions. State its alternatives, owner, affected users, deadline, exposed value or harm, reversal cost, and evidence requirement. Name the investigation you will start and one competing activity you will defer. Do not select the product answer yet.</DecisionPrompt>

      <aside className="session-carry"><b>Carry forward</b><p>One explicit product decision, its alternatives, why it receives PM investigation time now, who owns it, who is affected, the exposed value or harm, the first evidence to collect, and the competing activity that will wait.</p></aside>
      <LessonProgress lesson="lesson-01" title="Choose what deserves attention" />
      <SourceNote>Reforge: A Decision-First Approach to User Insights, pp. 13–21; The User Insights Process, pp. 2–4 and 7–14. The Noted example and two-level distinction are course applications. Also: Mastering Product Management—PM Leverage and Decision Architecture; Finding Product-Market Fit—Risk Prioritization.</SourceNote>
    </section>

    <section className="session-unit alternate" id="view">
      <header className="session-unit-header"><div><span>LESSON 02 · CALIBRATED JUDGMENT</span><small>Form a product view worth trusting</small></div><b>02</b></header>
      <section className="session-unit-intro"><h2>A PM cannot wait for certainty. But taking a position does not require pretending the evidence is stronger than it is.</h2><p>A product view is useful when it states a current position, exposes how each input contributed, and makes the boundary of confidence visible.</p></section>
      <section className="session-concept-copy" aria-label="Unit 2 concept explanation">
        <div><p>A product view is not a neutral summary of everything the team knows. It is the PM’s current, accountable interpretation for the decision at hand. Quantitative evidence describes a bounded pattern; user context helps explain circumstances and mechanism; accumulated judgment connects those inputs to a choice. None can do the other two jobs by itself.</p><p>When signals disagree, resist averaging them into a vague middle. Contradiction may indicate different populations, stages, or mechanisms. Separate observation from interpretation, preserve the strongest counter-signal, and state the condition that would materially change the recommendation. That turns confidence into a usable boundary rather than a performance of certainty.</p></div>
        <aside><b>Shared Noted continuation</b><p>The case carries forward the question of whether enterprise team leads lose decisions, action owners, or context after recurring meetings. The current view must explain why the question warrants investigation while the frequency, mechanism, and material consequence remain unknown.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 3</span><h3>Three inputs perform different jobs; integrate them rather than averaging them.</h3></header>
        <div className="session-inputs">
          {evidenceInputs.map((input, index) => <article key={input.title}><span>0{index + 1}</span><small>{input.job}</small><h3>{input.title}</h3><p>{input.copy}</p><aside>{input.limit}</aside></article>)}
        </div>
        <aside className="session-note"><b>When inputs conflict</b><p>Do not average the contradiction away. It may reveal a population boundary, a measurement problem, or a mechanism that makes all signals simultaneously possible.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 4</span><h3>Separate evidence from interpretation so the judgment can be reviewed.</h3></header>
        <div className="session-ledger">
          <div><b>Observation</b><p>Activation declined 11% across six weeks.</p><span>What does the metric actually include?</span></div>
          <div><b>Interpretation</b><p>The first-session experience may be creating friction.</p><span>What alternative explanation also fits?</span></div>
          <div><b>Prior</b><p>Past onboarding changes affected solo users more than teams.</p><span>Is this context still comparable?</span></div>
          <div className="highlight"><b>Decision implication</b><p>Investigate whether enterprise team leads lose decisions, action owners, or context after recurring meetings; do not commit to automated summaries; keep activation diagnosis separately owned.</p><span>What action follows now?</span></div>
        </div>
      </section>

      <section className="session-two-column calibration">
        <article><span>CALIBRATION</span><h3>Confidence is useful when its boundary is explicit.</h3><p>Shrink confidence when population coverage, measurement meaning, contradiction, or source quality weakens. Use language that exposes the limit; do not invent a percentage.</p></article>
        <article><span>REVISION</span><h3>Protect the view from its own success.</h3><p>Record one counter-signal and a credible trigger that would change the recommendation before the outcome arrives. Later, update the history rather than rewriting it.</p></article>
      </section>

      <DecisionPrompt label="MAKE THE CALL · LESSON 02" title="What product view should the Noted PM hold now?">Use the activation trend, retained-team behavior, positive interviews, and enterprise requests to judge whether the enterprise workflow question warrants further investigation. Distinguish observation, interpretation, and prior. State each input’s contribution, one counter-signal, your confidence boundary, and a credible revision trigger.</DecisionPrompt>
      <LessonProgress lesson="lesson-02" title="Form a product view" />
      <SourceNote>Reforge: Mastering Product Management—Feedback Systems and Lever Dashboards; User Insights for Product Decisions—Three Inputs; Product Leadership—PM Performance and Product Outcomes; Data for Product Managers—Calibrating Communication.</SourceNote>
    </section>

    <section className="session-unit" id="problem">
      <header className="session-unit-header"><div><span>LESSON 03 · AUDIENCE, PROBLEM, VALUE</span><small>Earn the problem definition</small></div><b>03</b></header>
      <section className="session-unit-intro"><h2>A request is not a problem. A pain point is not automatically urgent. And a persuasive promise is not yet value.</h2><p>Before ranking initiatives, name the change you want and connect the audience, problem, and promised value as claims that can fail independently.</p></section>
      <section className="session-concept-copy" aria-label="Unit 3 concept explanation">
        <div><p>A feature request is evidence of interest and vocabulary, not proof of the underlying problem or the right intervention. Decompose it into a bounded audience, an observed symptom, a plausible mechanism, the consequence and frequency, the current alternative, and the value a better option must create. Each link needs its own support.</p><p>“Earned” does not mean proven beyond doubt. It means the definition is proportionate to what is known and explicit about what is still hypothetical. The next move can be investigate, narrow, reframe, defer, or stop. A product build becomes responsible only after it beats credible workflow, policy, service, and no-action alternatives.</p></div>
        <aside><b>How to read the pressure test</b><p>Presence alone is weak. A consequential problem also needs a credible audience boundary, mechanism, material effect, repeated context, and evidence that the current alternative is inadequate.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 5</span><h3>Replace the feature request with a linked, revisable hypothesis.</h3></header>
        <div className="session-hypothesis">
          <article><span>01</span><b>Audience</b><p>Which group, in what context, is the claim about?</p></article><i aria-hidden="true" />
          <article><span>02</span><b>Problem</b><p>What behavior or symptom occurs, through which plausible mechanism?</p></article><i aria-hidden="true" />
          <article><span>03</span><b>Value</b><p>What meaningful benefit improves on the current alternative?</p></article>
        </div>
        <aside className="session-note"><b>Earned, not proven</b><p>An earned problem definition is proportionate to the evidence and explicit about what remains hypothetical. The goal is enough confidence for the next responsible decision—not final truth.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 6</span><h3>Pressure-test the problem without overclaiming it.</h3><p>“Users asked for it” may support presence. It rarely establishes mechanism, severity, audience validity, or willingness to switch.</p></header>
        <div className="session-pressure-grid">{pressureDimensions.map((item, index) => <article key={item.title}><span>0{index + 1}</span><b>{item.title}</b><p>{item.question}</p></article>)}</div>
      </section>

      <section className="session-alternatives">
        <div><span>KEEP THE ALTERNATIVE ALIVE</span><h3>The product option must earn its place.</h3><p>The current alternative may be another product, a spreadsheet, a manual workflow, a policy, doing nothing, or tolerating the pain. Sometimes the responsible choice is workflow improvement or no build.</p></div>
        <ol><li>Workflow or ritual</li><li>Policy or ownership</li><li>Concierge service</li><li>Product intervention</li><li>Defer or stop</li></ol>
      </section>

      <DecisionPrompt label="MAKE THE CALL · LESSON 03" title="What problem—if any—has Noted earned?">Enterprise customers request automated meeting summaries. Separate that feature request from the workflow outcome. Name the enterprise role, where decisions, action owners, or context are lost, how often the breakdown occurs, the material consequence, current workaround, promised value, weakest assumption, and one no-build alternative. Recommend investigate, proceed, narrow, reframe, defer, or stop.</DecisionPrompt>
      <LessonProgress lesson="lesson-03" title="Earn the problem definition" />
      <SourceNote>Reforge: Mastering Product Management—Objectives Before Initiatives; User Insights for Product Decisions—Research Audience and Interview Behavior; Finding Product-Market Fit—Audience, Problem, Value, and Risk; Scaling Product Delivery—Customer-Value Confidence.</SourceNote>
    </section>

    <section className="session-checkpoint" id="checkpoint" aria-label="Phase 1 artifact">
      <header><span>PHASE 1 · KEEP THIS ARTIFACT</span><h2>One linked record should expose the full chain of judgment.</h2><p>Do not attach three disconnected templates. Another PM should be able to see the choice, the current view, the linked hypothesis, and what must be learned next.</p></header>
      <div className="session-record">
        <article><span>01</span><b>Decision boundary</b><ul><li>Choice and owner</li><li>Population and horizon</li><li>Consequence and rigor</li></ul></article>
        <article><span>02</span><b>Current view</b><ul><li>Evidence contribution</li><li>Counter-signal</li><li>Confidence and trigger</li></ul></article>
        <article><span>03</span><b>Linked hypothesis</b><ul><li>Audience, problem, value</li><li>Current alternative</li><li>Weakest assumption</li></ul></article>
        <article className="final"><span>04</span><b>Disposition</b><ul><li>Investigate or proceed</li><li>Narrow or reframe</li><li>Defer or stop</li></ul></article>
      </div>
      <aside><b>Review standard</b><p>Reasoning quality is judged from what was knowable at the time—not from hindsight after the outcome.</p></aside>
    </section>

    <section className="session-next">
      <div><span>PHASE 1</span><b>Bound the decision</b><p>Choose attention and state the current hypothesis.</p></div><i aria-hidden="true" /><Link className="next session-next-link" href="/session-2"><span>PHASE 2</span><b>Choose evidence</b><p>Target the claim most capable of reversing the choice.</p><strong>Open phase 2 <em aria-hidden="true">›</em></strong></Link><i aria-hidden="true" /><div><span>OUTCOME</span><b>Update belief</b><p>Measure without manufacturing certainty.</p></div>
    </section>

    <footer className="noted-footer"><span>CORE / PM · Phase 1</span><span>Apply this record to your product, or continue with the Noted case.</span></footer>
  </main>;
}

export default function CourseHome() {
  return <main className="course-home">
    <header className="course-home-nav">
      <Link href="/" className="course-home-mark"><span>CORE / PM</span><small>FIELD COURSE 01</small></Link>
      <nav aria-label="Primary navigation"><a href="#curriculum">Curriculum</a><Link href="/noted">The Noted case</Link><a href="#method">How to study</a><a href="https://book.raziiabraham.com" target="_blank" rel="noreferrer">Book ↗</a></nav>
      <span>12 lessons · browser progress</span>
    </header>

    <CourseCatalog />

    <section className="course-loop" id="method" aria-labelledby="method-title">
      <header><p>THE LEARNING LOOP</p><h2 id="method-title">Every lesson ends in evidence you can keep.</h2><span>Reading is only the first move. Use the same four-beat loop for all twelve lessons.</span></header>
      <div>
        <article><span>01</span><b>Read</b><p>Understand the product problem, the durable principle, and the boundary where it stops being true.</p></article>
        <i aria-hidden="true">→</i>
        <article><span>02</span><b>Decide</b><p>Make the call before seeing a model answer. State the strongest reason against your position.</p></article>
        <i aria-hidden="true">→</i>
        <article><span>03</span><b>Apply</b><p>Use Noted or a real product decision. Preserve the population, uncertainty, and consequence.</p></article>
        <i aria-hidden="true">→</i>
        <article className="highlight"><span>04</span><b>Keep</b><p>Add the result to one cumulative Product Decision Case. Do not collect disconnected templates.</p></article>
      </div>
    </section>

    <section className="course-case" aria-labelledby="case-title">
      <div>
        <p>ONE LIVING CASE</p>
        <h2 id="case-title">Practice on Noted.<br />Transfer to your product.</h2>
        <span>Noted is a working AI-assisted document product with intentionally incomplete evidence. It gives every learner the same decisions to inspect without pretending the teaching case is real market proof.</span>
        <Link href="/noted">Meet the product case <i aria-hidden="true">›</i></Link>
      </div>
      <ol>
        <li><span>PHASE 01</span><b>Decision &amp; problem</b><p>What deserves attention, for whom, and why now?</p></li>
        <li><span>PHASE 02</span><b>Evidence &amp; belief</b><p>What can the evidence establish, and what changed?</p></li>
        <li><span>PHASE 03</span><b>Strategy &amp; constraints</b><p>What direction earns commitment, and what will wait?</p></li>
        <li><span>PHASE 04</span><b>Commitment &amp; learning</b><p>How will the choice survive delivery and honest review?</p></li>
      </ol>
    </section>

    <section className="course-foundation" aria-labelledby="foundation-title">
      <header><p>RESEARCH FOUNDATION</p><h2 id="foundation-title">Broad source material. One original learning spine.</h2><span>The course synthesizes 563 PDF resources across nine Reforge product-management programs. It keeps the durable decision principles and rebuilds their sequence around one cumulative act of product judgment.</span></header>
      <div><b>9</b><span>source programs</span><b>563</b><span>PDF resources reviewed</span><b>12</b><span>synthesized lessons</span><b>1</b><span>decision case to keep</span></div>
      <p>Covered domains include product craft, product-market fit, user insight, data, experimentation, strategy, technical strategy, delivery, and leadership. Source notes remain visible at the end of each lesson.</p>
    </section>

    <section className="course-book">
      <div><p>OPTIONAL CONTINUATION</p><h2>The course rebuilds the core. The book extends the role.</h2><span><em>PM Is Now Another Member of Technical Staff</em> explores deeper contribution across technical and specialist domains. The course stands alone; no lesson or assessment depends on the book.</span></div>
      <a href="https://book.raziiabraham.com" target="_blank" rel="noreferrer">Explore the book <i aria-hidden="true">↗</i></a>
    </section>

    <footer className="course-home-footer"><span>CORE / PM · A self-paced field course</span><span>Built for practicing PMs. Progress stays on your device.</span></footer>
  </main>;
}
