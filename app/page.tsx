import Link from "next/link";
import "./noted/noted.css";
import "./noted/audience.css";
import "./noted/verbose.css";
import "./session.css";
import "./decision-sequence.css";
import "./course-home.css";
import "./reading-prose.css";

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
  { title: "Presence", question: "Does the issue occur?" },
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
      <div className="noted-topbar-actions session-topbar-actions"><span>Session 1 · Reading · 30–40 min</span><Link href="/noted">Meet Noted ←</Link></div>
    </header>

    <section className="session-hero">
      <div className="session-hero-copy">
        <p className="noted-kicker">Session 1 · Frame</p>
        <h1 aria-label="Re-own the product decision">Re-own the<br /><em>product decision.</em></h1>
        <p>Before the live session, build the reasoning chain that makes a product decision inspectable—from its boundary and evidence to a revisable problem hypothesis.</p>
        <div className="noted-actions"><a className="noted-primary" href="#orientation">Begin Session 1 ↓</a><Link className="noted-secondary" href="/noted">Review the product context</Link></div>
      </div>
      <div className="session-hero-model" aria-label="Session 1 learning sequence">
        <header><span>WEEK 1 OUTPUT</span><b>Decision &amp; Problem Hypothesis</b></header>
        <div><small>01</small><b>Choose attention</b><p>Bound the consequential choice.</p></div>
        <i aria-hidden="true" />
        <div><small>02</small><b>Form a view</b><p>Synthesize evidence and judgment.</p></div>
        <i aria-hidden="true" />
        <div><small>03</small><b>Earn the problem</b><p>Keep the hypothesis revisable.</p></div>
      </div>
    </section>

    <nav className="noted-reading-map" aria-label="Session 1 contents"><span>Session map</span><a href="#orientation">00 · Start here</a><a href="#attention">01 · Choose attention</a><a href="#view">02 · Form a view</a><a href="#problem">03 · Earn the problem</a><a href="#checkpoint">04 · Checkpoint</a></nav>

    <section className="noted-section session-orientation" id="orientation">
      <div className="noted-section-heading"><span>Start here · The session contract</span><h2>Session 1 moves from competing signals to one inspectable decision record.</h2><p>The three units are not separate templates. Each adds one layer to the same decision case: first the choice, then the current view, then the linked audience–problem–value hypothesis.</p></div>
      <div className="session-arc">
        <article><span>01</span><h3>Decision boundary</h3><p>Choice, owner, population, horizon, consequence, reversibility, and deliberate exclusions.</p></article><i aria-hidden="true" />
        <article><span>02</span><h3>Current product view</h3><p>Evidence contribution, judgment, counter-signal, confidence boundary, and revision trigger.</p></article><i aria-hidden="true" />
        <article><span>03</span><h3>Linked hypothesis</h3><p>Audience, problem, value, current alternative, weakest consequential claim, and disposition.</p></article>
      </div>
      <div className="session-principles">
        <article><span>BEFORE CLASS</span><b>Read and notice</b><p>Read all three units. Mark one sentence you disagree with and bring your four fresh Noted observations.</p></article>
        <article><span>LIVE</span><b>Decide before the debrief</b><p>Use the shared Noted case. Make an individual call before hearing the facilitator’s model response.</p></article>
        <article><span>AFTER CLASS</span><b>Transfer the judgment</b><p>Apply the same reasoning to your own product or continue developing the Noted decision case.</p></article>
      </div>
      <aside className="session-standard"><b>The standard</b><p>You are not assessed on producing a beautiful artifact. You are assessed on whether another PM can inspect your reasoning, see its limits, and understand what would change your mind.</p></aside>
    </section>

    <section className="session-unit" id="attention">
      <header className="session-unit-header"><div><span>UNIT 01 · DECISION LEVERAGE</span><small>Choose what deserves PM attention</small></div><b>01</b></header>
      <section className="session-unit-intro"><h2>The PM’s scarce resource is high-quality judgment. Spend it on decisions whose consequences justify the attention.</h2><p>“Run discovery,” “improve onboarding,” and “write the spec” are legitimate activities, but they do not explain which choice the work should inform. Decision-first work defines that choice before selecting the evidence and activity; it makes the final call after the work has been synthesized.</p></section>
      <section className="session-concept-copy" aria-label="Unit 1 concept explanation">
        <div><p>A decision-first sequence has two distinct decision moments. At the beginning, the PM defines the choice, the plausible options, and the evidence that could discriminate among them. At the end, after the necessary activity and synthesis, the accountable owner selects an option and records what is deliberately not being chosen.</p><p>This matters because a familiar activity can generate useful-looking output without changing anything consequential. A bounded decision gives research, analysis, prototyping, or stakeholder work a specific job. It also makes stopping legitimate when another evidence cycle costs more than acting within the remaining uncertainty.</p></div>
        <aside><b>Read the exhibits as reinforcement</b><p>The sequence shows where activity belongs. The rigor screen explains how much care the choice deserves. The reversibility example shows how operating controls can reduce the cost of being wrong.</p></aside>
      </section>

      <section className="session-exhibit">
        <header><span>Exhibit 1</span><h3>Decision-first changes the sequence; it does not remove the activity.</h3><p>Reforge’s contrast is decision-last versus decision-first. “First” means defining the decision to be made, not deciding the answer before evidence exists.</p></header>
        <div className="session-comparison">
          <article className="weak"><span>DECISION-LAST</span><div><b>Run research</b><i aria-hidden="true" /><b>Collect evidence</b><i aria-hidden="true" /><b>Find a decision</b></div><p>Risk: familiar activity produces polished evidence with no defined decision consequence.</p></article>
          <article className="strong"><span>DECISION-FIRST</span><div className="five-step"><b>Define decision</b><i aria-hidden="true" /><b>Map evidence</b><i aria-hidden="true" /><b>Choose activity</b><i aria-hidden="true" /><b>Synthesize</b><i aria-hidden="true" /><b>Make decision</b></div><p>Benefit: the activity remains, but its method, audience, and rigor have a defined decision job.</p></article>
        </div>
        <aside className="session-test"><b>Decision test</b><p>Can you name at least two plausible findings that would lead to different actions? If not, the activity still lacks a decision-first evidence question.</p></aside>
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

      <DecisionPrompt label="MAKE THE CALL · UNIT 01" title="Which Noted decision deserves attention this week?">Choose among the activation decline, enterprise requests, reliability signal, and platform deadline. State the owner, population, horizon, consequence, reversibility, first uncertainty, minimum responsible rigor, and one activity you will defer.</DecisionPrompt>

      <aside className="session-carry"><b>Carry forward</b><p>A decision boundary: owner, population, horizon, consequence, reversibility, alternatives, first uncertainty, and deliberate exclusions.</p></aside>
      <SourceNote>Reforge: Mastering Product Management—PM Leverage and Decision Architecture; User Insights for Product Decisions—Decision-First Planning; Finding Product-Market Fit—Risk Prioritization.</SourceNote>
    </section>

    <section className="session-unit alternate" id="view">
      <header className="session-unit-header"><div><span>UNIT 02 · CALIBRATED JUDGMENT</span><small>Form a product view worth trusting</small></div><b>02</b></header>
      <section className="session-unit-intro"><h2>A PM cannot wait for certainty. But taking a position does not require pretending the evidence is stronger than it is.</h2><p>A product view is useful when it states a current position, exposes how each input contributed, and makes the boundary of confidence visible.</p></section>
      <section className="session-concept-copy" aria-label="Unit 2 concept explanation">
        <div><p>A product view is not a neutral summary of everything the team knows. It is the PM’s current, accountable interpretation for the decision at hand. Quantitative evidence describes a bounded pattern; user context helps explain circumstances and mechanism; accumulated judgment connects those inputs to a choice. None can do the other two jobs by itself.</p><p>When signals disagree, resist averaging them into a vague middle. Contradiction may indicate different populations, stages, or mechanisms. Separate observation from interpretation, preserve the strongest counter-signal, and state the condition that would materially change the recommendation. That turns confidence into a usable boundary rather than a performance of certainty.</p></div>
        <aside><b>Shared Noted continuation</b><p>The live case carries the enterprise handoff branch forward. The current view must therefore explain why retained-team workflow value is plausible while activation risk and the specific handoff mechanism remain unresolved.</p></aside>
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
          <div className="highlight"><b>Decision implication</b><p>Investigate enterprise team handoff before committing to automated summaries; keep activation diagnosis separately owned.</p><span>What action follows now?</span></div>
        </div>
      </section>

      <section className="session-two-column calibration">
        <article><span>CALIBRATION</span><h3>Confidence is useful when its boundary is explicit.</h3><p>Shrink confidence when population coverage, measurement meaning, contradiction, or source quality weakens. Use language that exposes the limit; do not invent a percentage.</p></article>
        <article><span>REVISION</span><h3>Protect the view from its own success.</h3><p>Record one counter-signal and a credible trigger that would change the recommendation before the outcome arrives. Later, update the history rather than rewriting it.</p></article>
      </section>

      <DecisionPrompt label="MAKE THE CALL · UNIT 02" title="What product view should the Noted PM hold now?">Use the activation trend, retained-team behavior, positive interviews, and enterprise requests to form a view relevant to the shared enterprise-attention decision. Distinguish observation, interpretation, and prior. State each input’s contribution, one counter-signal, your confidence boundary, and a credible revision trigger.</DecisionPrompt>
      <SourceNote>Reforge: Mastering Product Management—Feedback Systems and Lever Dashboards; User Insights for Product Decisions—Three Inputs; Product Leadership—PM Performance and Product Outcomes; Data for Product Managers—Calibrating Communication.</SourceNote>
    </section>

    <section className="session-unit" id="problem">
      <header className="session-unit-header"><div><span>UNIT 03 · AUDIENCE, PROBLEM, VALUE</span><small>Earn the problem definition</small></div><b>03</b></header>
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

      <DecisionPrompt label="MAKE THE CALL · UNIT 03" title="What problem—if any—has Noted earned?">Enterprise users ask for automated meeting summaries. Separate the request from the objective. Bound the audience, mechanism, severity, frequency, workaround, promised value, weakest assumption, and a no-build alternative. Recommend investigate, proceed, narrow, reframe, defer, or stop.</DecisionPrompt>
      <SourceNote>Reforge: Mastering Product Management—Objectives Before Initiatives; User Insights for Product Decisions—Research Audience and Interview Behavior; Finding Product-Market Fit—Audience, Problem, Value, and Risk; Scaling Product Delivery—Customer-Value Confidence.</SourceNote>
    </section>

    <section className="session-checkpoint" id="checkpoint" aria-label="Week 1 checkpoint">
      <header><span>WEEK 1 · CHECKPOINT</span><h2>One linked record should expose the full chain of judgment.</h2><p>Do not attach three disconnected templates. Another PM should be able to see the choice, the current view, the linked hypothesis, and what must be learned next.</p></header>
      <div className="session-record">
        <article><span>01</span><b>Decision boundary</b><ul><li>Choice and owner</li><li>Population and horizon</li><li>Consequence and rigor</li></ul></article>
        <article><span>02</span><b>Current view</b><ul><li>Evidence contribution</li><li>Counter-signal</li><li>Confidence and trigger</li></ul></article>
        <article><span>03</span><b>Linked hypothesis</b><ul><li>Audience, problem, value</li><li>Current alternative</li><li>Weakest assumption</li></ul></article>
        <article className="final"><span>04</span><b>Disposition</b><ul><li>Investigate or proceed</li><li>Narrow or reframe</li><li>Defer or stop</li></ul></article>
      </div>
      <aside><b>Review standard</b><p>Reasoning quality is judged from what was knowable at the time—not from hindsight after the outcome.</p></aside>
    </section>

    <section className="session-next">
      <div><span>SESSION 1</span><b>Bound the decision</b><p>Choose attention and state the current hypothesis.</p></div><i aria-hidden="true" /><Link className="next session-next-link" href="/session-2"><span>SESSION 2</span><b>Choose evidence</b><p>Target the claim most capable of reversing the choice.</p><strong>Open Session 2 overview <em aria-hidden="true">›</em></strong></Link><i aria-hidden="true" /><div><span>OUTCOME</span><b>Update belief</b><p>Measure without manufacturing certainty.</p></div>
    </section>

    <footer className="noted-footer"><span>CORE / PM · Session 1 reading</span><span>Before Session 2: apply the Week 1 record to your product, or continue with the Noted case.</span></footer>
  </main>;
}

const courseSessions = [
  {
    number: "01",
    arc: "FRAME",
    title: "Re-own the product decision",
    description: "Turn competing signals into one bounded product decision that can survive scrutiny.",
    units: ["Choose attention", "Form a product view", "Earn the problem"],
    output: "Decision & Problem Hypothesis",
  },
  {
    number: "02",
    arc: "LEARN",
    title: "Make evidence earn the decision",
    description: "Build an evidence chain strong enough to update the decision without overstating what is known.",
    units: ["Choose evidence", "Update the belief", "Bound the result"],
    output: "Evidence & Belief Update",
  },
  {
    number: "03",
    arc: "CHOOSE",
    title: "Turn evidence into an opinionated choice",
    description: "Convert a calibrated belief into a direction and set of trade-offs worth committing to.",
    units: ["Choose direction", "Allocate the portfolio", "Reprice the technical choice"],
    output: "Strategy & Constraint Choice",
  },
  {
    number: "04",
    arc: "COMMIT + LEARN",
    title: "Make the choice survivable",
    description: "Carry a consequential choice through execution while preserving ownership and honest learning.",
    units: ["Create commitment", "Adapt execution", "Close the loop"],
    output: "Completed Product Decision Case",
  },
];

export default function CourseHome() {
  return <main className="course-home">
    <header className="course-home-nav">
      <Link href="/" className="course-home-mark">CORE / PM</Link>
      <div><Link href="/noted">Meet Noted</Link><a href="#guided-cohort">Apply for live cohort</a><span>4 sessions · Week 5 Demo Day</span></div>
    </header>

    <section className="course-home-hero">
      <div className="course-home-intro">
        <p>OPEN READING · GUIDED LIVE COHORT</p>
        <h1>Re-own the<br /><em>PM core.</em></h1>
        <span>A four-session course for PMs with 2–6 years of experience. Move one decision from attention and evidence through strategy, commitment, and honest outcome learning.</span>
      </div>
      <div className="course-home-facts" aria-label="Course format">
        <article><b>04</b><span>live sessions</span></article>
        <article><b>135</b><span>minutes each</span></article>
        <article><b>10</b><span>learners maximum</span></article>
        <article><b>05</b><span>weeks including Demo Day</span></article>
      </div>
    </section>

    <section className="course-access" aria-labelledby="course-access-title">
      <header>
        <p>HOW TO JOIN</p>
        <h2 id="course-access-title">Re-own core PM practice in the course. Explore deeper specialist involvement in the book.</h2>
        <span>The course and <a className="course-book-link" href="https://book.raziiabraham.com" target="_blank" rel="noreferrer"><em>PM Is Now Another Member of Technical Staff</em></a> are independent. The course re-owns the core world of Product Management before deeper specialist-domain involvement; the book explores how PMs can participate more deeply across technical, data, design, AI, and delivery surfaces.</span>
      </header>
      <div className="course-access-paths">
        <article className="course-access-open">
          <div><span>OPEN TO EVERYONE</span><b>01</b></div>
          <h3>Read at your own pace.</h3>
          <p>The self-paced reading materials are open to everyone. Follow the four-session sequence, use the Noted case, and build one cumulative Product Decision Case. The course stands on its own—there is no book or technical prerequisite.</p>
          <div className="course-access-actions"><Link href="/noted">Start with Meet Noted <i aria-hidden="true">›</i></Link><a className="book-cta" href="https://book.raziiabraham.com" target="_blank" rel="noreferrer">Explore the book <i aria-hidden="true">↗</i></a></div>
        </article>
        <article className="course-access-guided" id="guided-cohort">
          <div><span>OPEN FOR APPLICATIONS</span><b>10 MAX</b></div>
          <h3>Join the guided live cohort.</h3>
          <p>Ten places are available for the four guided sessions and Week 5 Demo Day. Applicants who have purchased <a className="course-book-link inverse" href="https://book.raziiabraham.com" target="_blank" rel="noreferrer"><em>PM Is Now Another Member of Technical Staff</em></a> will be prioritised, but the book is not a prerequisite and the live course does not depend on it.</p>
          <div className="course-application-brief">
            <strong>DM me on LinkedIn and tell me three things:</strong>
            <ol>
              <li><span>01</span><p>What do you expect from taking this course?</p></li>
              <li><span>02</span><p>Are you ready to commit for five weeks, through Demo Day?</p></li>
              <li><span>03</span><p>What price range would feel reasonable for you for the guided cohort?</p></li>
            </ol>
          </div>
          <a href="https://linkedin.com/in/raziiabraham" target="_blank" rel="noreferrer">DM Razii on LinkedIn <i aria-hidden="true">›</i></a>
        </article>
      </div>
    </section>

    <section className="course-home-path" aria-labelledby="course-path-title">
      <header><p>COURSE PATH</p><h2 id="course-path-title">One decision develops across four cumulative sessions.</h2><span>Enter a session to understand its learning arc, complete the reading where available, open the live deck, and follow the cumulative checkpoint.</span></header>
      <div className="course-home-grid">
        {courseSessions.map((session) => <Link href={`/session-${Number(session.number)}`} className="course-session-card" key={session.number}>
          <div className="course-session-card-top"><span>SESSION {session.number}</span><em>{session.arc}</em></div>
          <h3>{session.title}</h3>
          <p>{session.description}</p>
          <ol>{session.units.map((unit, index) => <li key={unit}><small>0{index + 1}</small><span>{unit}</span></li>)}</ol>
          <footer><div><small>CHECKPOINT</small><b>{session.output}</b></div><strong>Open session <i aria-hidden="true">›</i></strong></footer>
        </Link>)}
      </div>
    </section>

    <section className="course-material-model" aria-labelledby="material-model-title">
      <header><p>HOW THE MATERIALS WORK</p><h2 id="material-model-title">The reading explains. The live deck challenges.</h2><span>Both materials use the same unit spine, Noted case, terminology, and checkpoint—but each has a different job.</span></header>
      <div className="course-material-grid">
        <article><div><span>BEFORE THE SESSION</span><b>Reading</b></div><h3>Build the shared mental model.</h3><p>Explains the core concepts, conditions, misconceptions, and source-grounded reasoning in enough depth to arrive prepared.</p><small>30–40 minutes · completed before live</small></article>
        <i aria-hidden="true" />
        <article><div><span>DURING THE SESSION</span><b>Live deck</b></div><h3>Put the concepts under decision pressure.</h3><p>Uses concise takeaway headlines, visual exhibits, staged Noted evidence, and three individual decisions instead of repeating the reading.</p><small>135 minutes · teach, decide, debrief</small></article>
      </div>
      <div className="course-material-alignment"><b>ONE SHARED SPINE</b><span>Same three unit decisions</span><i/><span>Same evolving Noted case</span><i/><span>Same cumulative checkpoint</span></div>
    </section>

    <section className="course-home-support">
      <div><p>BEFORE SESSION 1</p><h2>Meet the shared product case.</h2><span>Understand Noted&apos;s product, users, journey, current boundaries, and evidence provenance before making the first decision.</span></div>
      <Link href="/noted">Open Meet Noted <i aria-hidden="true">›</i></Link>
    </section>

    <footer className="course-home-footer"><span>CORE / PM · Re-owning Product Management</span><span>Independent paths: the course re-owns Core PM practice; <a href="https://book.raziiabraham.com" target="_blank" rel="noreferrer"><em>PM Is Now Another Member of Technical Staff</em></a> explores deeper involvement in specialist domains.</span></footer>
  </main>;
}
