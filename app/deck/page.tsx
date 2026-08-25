"use client";

import { useEffect } from "react";
import "./deck.css";
import "./connectors.css";
import "./chart.css";
import "./decision-boundary.css";

type SlideProps = {
  n: number;
  title: string;
  subtitle?: string;
  section?: string;
  source?: string;
  className?: string;
  children: React.ReactNode;
};

function Slide({ n, title, subtitle, section = "SESSION 1  |  FRAME", source, className = "", children }: SlideProps) {
  return <section className={`consulting-slide ${className}`} id={`slide-${n}`}>
    <header className="slide-header">
      <div className="section-label">{section}</div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
    <div className="slide-content">{children}</div>
    <footer className="slide-footer">
      <span>{source ? `Source: ${source}` : "Core PM course synthesis"}</span>
      <b>{String(n).padStart(2, "0")}</b>
    </footer>
  </section>;
}

function ExhibitTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return <div className="exhibit-title"><b>Exhibit {n}</b><span>{children}</span></div>;
}

function PromptSlide({ n, unit, title, output, children }: { n: number; unit: string; title: string; output: string; children: React.ReactNode }) {
  return <Slide n={n} section={`${unit}  |  MAKE THE CALL`} title={title} className="prompt">
    <div className="prompt-layout">
      <div className="prompt-flag"><span>INDIVIDUAL DECISION</span><b>06 min</b></div>
      <div className="prompt-question">{children}</div>
      <div className="prompt-output"><span>OUTPUT</span><p>{output}</p></div>
    </div>
  </Slide>;
}

export default function Deck() {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const forward = ["ArrowRight", "ArrowDown", "PageDown"];
      const backward = ["ArrowLeft", "ArrowUp", "PageUp"];
      if (![...forward, ...backward].includes(event.key)) return;
      event.preventDefault();
      const slides = [...document.querySelectorAll<HTMLElement>(".consulting-slide")];
      const current = slides.reduce((best, slide, index) => Math.abs(slide.getBoundingClientRect().top) < Math.abs(slides[best].getBoundingClientRect().top) ? index : best, 0);
      const next = current + (forward.includes(event.key) ? 1 : -1);
      slides[Math.max(0, Math.min(slides.length - 1, next))]?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <main className="consulting-deck">
    <aside className="deck-controls"><span>Use arrow keys</span><button onClick={() => document.documentElement.requestFullscreen()}>Fullscreen</button></aside>

    <Slide n={1} title="Re-own the product decision" subtitle="Session 1 | Turn competing signals into one bounded decision that can survive scrutiny" className="cover">
      <div className="cover-grid">
        <div className="cover-number">01</div>
        <div className="cover-steps">
          <div><span>01</span><b>Choose attention</b><small>Name the consequential choice before choosing the work.</small></div>
          <div><span>02</span><b>Form a view</b><small>Separate what you know from what you infer - and say what would change your mind.</small></div>
          <div><span>03</span><b>Earn the problem</b><small>Treat requests as clues while keeping the problem and solution revisable.</small></div>
        </div>
      </div>
    </Slide>

    <Slide n={2} title="Session 1 moves from competing signals to one inspectable decision record" subtitle="The live session follows a teach, decide, and debrief rhythm across three linked units">
      <ExhibitTitle n={1}>Session logic and cumulative output</ExhibitTitle>
      <div className="journey">
        <div className="journey-step"><em>1</em><b>Decision boundary</b><p>Make the choice, owner, affected population, horizon, and consequence explicit.</p></div>
        <div className="journey-arrow" aria-hidden="true" />
        <div className="journey-step"><em>2</em><b>Current product view</b><p>Separate observation from interpretation, then state confidence and a revision trigger.</p></div>
        <div className="journey-arrow" aria-hidden="true" />
        <div className="journey-step"><em>3</em><b>Linked hypothesis</b><p>Connect a bounded audience and problem to value, alternatives, and the weakest consequential claim.</p></div>
      </div>
      <div className="implication"><b>Week 1 output</b><span>One record lets another PM challenge the reasoning without reconstructing how you got there.</span></div>
    </Slide>

    <Slide n={3} section="NOTED  |  CASE SNAPSHOT" title="Noted faces four signals, but signal volume alone does not determine PM attention" subtitle="The product context is real; the evidence is constructed for practice and must be treated as bounded" source="Noted teaching case; product context from noted-main; evidence constructed for practice">
      <ExhibitTitle n={2}>Initial information available to the Noted PM</ExhibitTitle>
      <div className="case-dashboard">
        <div className="metric primary"><span>ACTIVATION</span><b>-11%</b><small>New-user activation fell across six weeks.</small></div>
        <div className="metric"><span>ENTERPRISE</span><b>3</b><small>Customers requested automated summaries.</small></div>
        <div className="metric"><span>RELIABILITY</span><b>P95 +34%</b><small>Large workspaces are taking longer to respond.</small></div>
        <div className="metric"><span>PLATFORM</span><b>10 weeks</b><small>A dependency is approaching end-of-support.</small></div>
        <div className="spark-panel">
          <div className="spark-title"><b>New-user activation</b><span>Indexed to Week 1 = 100</span></div>
          <div className="spark-chart" role="img" aria-label="Illustrative six-week activation index: 100, 98, 99, 95, 94, and 89">
            <i className="grid g1"/><i className="grid g2"/><i className="grid g3"/>
            <div className="spark-series" aria-hidden="true">
              <i className="spark-segment s1"/><i className="spark-segment s2"/><i className="spark-segment s3"/><i className="spark-segment s4"/><i className="spark-segment s5"/>
              <i className="spark-dot d1"/><i className="spark-dot d2"/><i className="spark-dot d3"/><i className="spark-dot d4"/><i className="spark-dot d5"/><i className="spark-dot d6"/>
            </div>
            <span className="p p1">100</span><span className="p p2">98</span><span className="p p3">99</span><span className="p p4">95</span><span className="p p5">94</span><span className="p p6">89</span>
            <span className="week w1">W1</span><span className="week w2">W2</span><span className="week w3">W3</span><span className="week w4">W4</span><span className="week w5">W5</span><span className="week w6">W6</span>
          </div>
        </div>
        <div className="case-note"><b>Key question</b><p>The loudest signal is not automatically the most consequential. Which choice needs scarce PM judgment now?</p></div>
      </div>
    </Slide>

    <Slide n={4} section="UNIT 01  |  DECISION LEVERAGE" title="Decision-first changes the order; it does not remove the activity" subtitle="Define the decision to be made, use evidence work to inform it, then return to make the decision" source="Reforge, A Decision-First Approach to User Insights; The User Insights Process" className="decision-sequence-slide">
      <ExhibitTitle n={3}>The same ingredients produce different value when the sequence changes</ExhibitTitle>
      <div className="decision-sequence-exhibit">
        <article className="sequence-row last">
          <header><span>DECISION-LAST</span><p>The team starts from familiar work and searches for a consequential use afterward.</p></header>
          <div className="sequence-steps three"><div><small>START</small><b>Choose a research activity</b></div><i/><div><small>OUTPUT</small><b>Collect evidence and insights</b></div><i/><div><small>LATE QUESTION</small><b>Ask which decision they should change</b></div></div>
        </article>
        <article className="sequence-row first">
          <header><span>DECISION-FIRST</span><p>“Define” and “make” are different moments. The activity remains in the middle.</p></header>
          <div className="sequence-steps five"><div><small>1 · DEFINE</small><b>Name the decision to be made</b></div><i/><div><small>2 · TARGET</small><b>Identify evidence that could change it</b></div><i/><div><small>3 · ACT</small><b>Choose and execute the fitting activity</b></div><i/><div><small>4 · SYNTHESIZE</small><b>Turn findings into decision evidence</b></div><i/><div><small>5 · MAKE</small><b>Select an option and record non-choices</b></div></div>
        </article>
      </div>
      <div className="implication"><b>The distinction</b><span>Decision-first gives the activity a defined decision job; it does not make the answer before the evidence exists.</span></div>
    </Slide>

    <Slide n={5} section="UNIT 01  |  DECISION LEVERAGE" title="A decision boundary turns competing roadmap signals into an explicit choice set" subtitle="The boundary defines what must be chosen; it does not preselect which option will win" source="Reforge, Decision-First Planning; course application" className="roadmap-choice">
      <ExhibitTitle n={4}>Illustrative Noted roadmap decision boundary</ExhibitTitle>
      <div className="roadmap-boundary">
        <div className="boundary-question"><span>DECISION TO BE MADE</span><b>Which response should receive primary PM attention before the next roadmap commitment?</b></div>
        <div className="boundary-meta"><div><small>OWNER</small><b>Noted PM</b></div><div><small>HORIZON</small><b>Next 2 weeks</b></div><div><small>CONSTRAINT</small><b>One primary focus</b></div><div><small>REVIEW POINT</small><b>Next planning cycle</b></div></div>
        <div className="roadmap-options">
          <article><span>A</span><small>ACTIVATION</small><b>Investigate the new-user decline before changing onboarding</b></article>
          <article><span>B</span><small>ENTERPRISE</small><b>Define the meeting-summary problem before choosing a solution</b></article>
          <article><span>C</span><small>RELIABILITY</small><b>Prioritize diagnosis of large-workspace latency</b></article>
          <article><span>D</span><small>PLATFORM</small><b>Begin scoping the dependency migration now</b></article>
          <article className="defer"><span>E</span><small>NO NEW COMMITMENT</small><b>Keep the current roadmap and revisit when evidence or exposure changes</b></article>
        </div>
        <div className="boundary-implication"><b>Frame the choice now; make it after the necessary evidence and judgment work.</b><span>The activity earns its place by helping discriminate among these options.</span></div>
      </div>
    </Slide>

    <Slide n={6} section="UNIT 01  |  DECISION LEVERAGE" title="Five conditions determine the appropriate rigor; none should become a mechanical score" subtitle="Rigor rises when consequence, irreversibility, uncertainty, time pressure, or specialist dependence increases" source="Reforge, Determine Your Decision Budget; course synthesis">
      <ExhibitTitle n={5}>Qualitative decision-rigor screen</ExhibitTitle>
      <div className="rigor-table">
        <div className="table-head"><span>Condition</span><span>Diagnostic question</span><span>Low rigor signal</span><span>High rigor signal</span></div>
        <div><b>Consequence</b><span>What value, harm, trust, or cost is exposed?</span><em className="rigor-signal">Limited, recoverable exposure</em><em className="rigor-signal high">Trust, safety, revenue, or strategic option</em></div>
        <div><b>Reversibility</b><span>Can the choice be undone cleanly?</span><em className="rigor-signal">Clean rollback and low switching cost</em><em className="rigor-signal high">Persistent data, behavior, or reputation change</em></div>
        <div><b>Uncertainty</b><span>Which unknown could reverse the choice?</span><em className="rigor-signal">Known mechanism; narrow unknown</em><em className="rigor-signal high">Unknown could reverse the choice</em></div>
        <div><b>Timing</b><span>What is the cost of waiting or moving too soon?</span><em className="rigor-signal">Delay cost is small</em><em className="rigor-signal high">Window closes or harm compounds</em></div>
        <div><b>Expertise</b><span>Whose specialist judgment or authority is required?</span><em className="rigor-signal">Within tested team competence</em><em className="rigor-signal high">Specialist authority or judgment required</em></div>
      </div>
      <div className="table-note"><b>Use, do not score</b><span>The screen exposes why a decision needs more or less rigor; adding the rows would replace judgment with arithmetic.</span></div>
    </Slide>

    <Slide n={7} section="UNIT 01  |  DECISION LEVERAGE" title="Reversibility is created by the operating design around a choice" subtitle="A pilot becomes meaningfully reversible only when exposure, rollback, stop conditions, and data boundaries are explicit" source="Reforge, Decision Architecture">
      <ExhibitTitle n={6}>From broad commitment to bounded move</ExhibitTitle>
      <div className="reversibility-flow">
        <div className="flow-start"><small>UNBOUNDED CHOICE</small><b>Replace onboarding for every new workspace at once.</b></div>
        <div className="control-stack"><div><b>Limit exposure</b><span>Only new solo users enter the pilot.</span></div><div><b>Preserve rollback</b><span>A feature flag restores the prior flow.</span></div><div><b>Predeclare a stop</b><span>Pause when activation or support crosses a threshold.</span></div><div><b>Bound the data</b><span>Do not reuse free text beyond the pilot.</span></div></div>
        <div className="flow-end"><small>BOUNDED MOVE</small><b>Run a 14-day first-session pilot that is easier to review and recover.</b></div>
      </div>
      <div className="implication"><b>Implication</b><span>Calling work an experiment does not make it reversible; the operating constraints do.</span></div>
    </Slide>

    <PromptSlide n={8} unit="UNIT 01" title="Which Noted decision deserves attention this week?" output="Choose one bounded decision. State its owner, consequence, first uncertainty, responsible rigor, and one deliberate exclusion.">
      <p>Choose one decision from the case snapshot. State the owner, population, horizon, consequence, reversibility, first uncertainty, and minimum responsible rigor.</p>
      <strong>Name one activity you will explicitly defer. The shared case will then carry the enterprise-handoff branch forward; your recommendation may differ.</strong>
    </PromptSlide>

    <Slide n={9} section="UNIT 02  |  CALIBRATED JUDGMENT" title="A trustworthy product view synthesizes three inputs that perform different jobs" subtitle="Quantitative evidence, user context, and accumulated judgment should be integrated - not averaged" source="Reforge, The Three Inputs of Great Decisions">
      <ExhibitTitle n={7}>Contribution of each input to a current product view</ExhibitTitle>
      <div className="input-model">
        <div className="input-row"><span>Quantitative evidence</span><div className="contribution"><b>Shows pattern and magnitude</b><span>It reveals what changed, for whom, and over what window.</span></div><small>It cannot explain why the change happened on its own.</small></div>
        <div className="input-row"><span>User context</span><div className="contribution"><b>Reveals mechanism and circumstances</b><span>It shows how the experience unfolds and why it matters.</span></div><small>It cannot tell us how prevalent the experience is on its own.</small></div>
        <div className="input-row"><span>Product judgment</span><div className="contribution"><b>Integrates evidence into a choice</b><span>It makes the trade-off accountable for this decision now.</span></div><small>It can guide action, but it cannot create evidence that is missing.</small></div>
        <div className="view-output"><span>CURRENT VIEW</span><b>Noted appears strongest in retained-team workflows; enterprise handoff is plausible, but the mechanism and consequence remain unearned.</b></div>
      </div>
    </Slide>

    <Slide n={10} section="UNIT 02  |  CALIBRATED JUDGMENT" title="Conflicting inputs often signal a segment or mechanism - not an evidence failure" subtitle="Illustrative case signals, not to scale: the pattern can be simultaneously true when population boundaries differ" source="Reforge, Three Inputs; Lever Dashboards; synthetic Noted case synthesis">
      <ExhibitTitle n={8}>Illustrative Noted signals by user stage</ExhibitTitle>
      <div className="segmentation-chart">
        <div className="y-axis"><span>HIGH</span><span>INDEX</span><span>LOW</span></div>
        <div className="plot"><i className="hline l1"/><i className="hline l2"/><i className="hline l3"/><div className="series activation"><span>Activation</span></div><div className="series retained"><span>Retained-team activity</span></div><div className="series interviews"><span>Interview sentiment</span></div><div className="segment-band"><b>Likely boundary</b><small>new solo users</small></div></div>
        <div className="x-axis"><span>First session</span><span>Week 1</span><span>Month 1</span><span>Retained</span></div>
        <div className="chart-legend"><span><i className="dot d1"/>Activation</span><span><i className="dot d2"/>Retained use</span><span><i className="dot d3"/>Interview sentiment</span></div>
      </div>
      <div className="implication"><b>What the conflict means</b><span>Do not average the contradiction away. Ask which population and mechanism could make all three signals true.</span></div>
    </Slide>

    <Slide n={11} section="UNIT 02  |  CALIBRATED JUDGMENT" title="Separating evidence from interpretation makes product judgment reviewable" subtitle="A reasoning ledger reveals which claims come from sources and which require accountable judgment" source="Reforge, Data for Product Managers; Product Leadership">
      <ExhibitTitle n={9}>Illustrative reasoning ledger for the Noted view</ExhibitTitle>
      <div className="ledger">
        <div className="ledger-head"><span>Reasoning layer</span><span>What we can currently say</span><span>How another PM should challenge it</span></div>
        <div><b>Observation</b><span>Activation declined 11% across six weeks</span><em>What does the metric include?</em></div>
        <div><b>Interpretation</b><span>The first-session experience may be creating friction</span><em>What alternative explanation fits?</em></div>
        <div><b>Prior</b><span>Past onboarding changes affected solo users more than teams</span><em>Is this context still comparable?</em></div>
        <div className="ledger-highlight"><b>Decision implication</b><span>Investigate enterprise team handoff before committing to automated summaries; keep activation diagnosis separately owned</span><em>What action follows now?</em></div>
      </div>
    </Slide>

    <Slide n={12} section="UNIT 02  |  CALIBRATED JUDGMENT" title="Confidence becomes useful when its boundary and revision trigger are explicit" subtitle="The PM should communicate a current position without performing certainty" source="Reforge, Calibrating Our Communications">
      <ExhibitTitle n={10}>Confidence statement with counter-signal and revision trigger</ExhibitTitle>
      <div className="confidence-exhibit">
        <div className="confidence-scale"><span>FRAGILE</span><span>BOUNDED</span><span>STRONG</span><div className="scale-bar"><i/><b>Current position</b></div></div>
        <div className="confidence-cards"><div><small>CURRENT BELIEF</small><b>Retained-team workflow value makes enterprise handoff worth investigating.</b></div><div><small>COUNTER-SIGNAL</small><b>The activation decline may deserve the primary product response instead.</b></div><div><small>REVISION TRIGGER</small><b>Enterprise requests do not connect to repeated material follow-through failure.</b></div></div>
      </div>
      <div className="implication"><b>Calibrated, not vague</b><span>Take a position, preserve the strongest evidence against it, and name the observable condition that would change it.</span></div>
    </Slide>

    <PromptSlide n={13} unit="UNIT 02" title="What product view should the Noted PM hold now?" output="State one current view. Separate observation, interpretation, and prior; preserve a counter-signal, confidence boundary, and revision trigger.">
      <p>Use the activation trend, retained-team behavior, positive interviews, and enterprise requests. Form a view relevant to the shared enterprise-attention decision, then distinguish observation, interpretation, and prior.</p>
      <strong>State one counter-signal, your confidence boundary, and a credible revision trigger.</strong>
    </PromptSlide>

    <Slide n={14} section="UNIT 03  |  AUDIENCE, PROBLEM, VALUE" title="An enterprise feature request compresses at least six claims that can fail independently" subtitle="The request is evidence of interest; it does not establish audience, mechanism, severity, or value" source="Reforge, Finding Product-Market Fit; Product Conviction">
      <ExhibitTitle n={11}>Decomposition of the automated-summary request</ExhibitTitle>
      <div className="claim-tree">
        <div className="request-root"><small>REQUEST</small><b>&ldquo;Give us automated meeting summaries&rdquo;</b></div>
        <div className="tree-line"/>
        <div className="claims"><div><b>Audience</b><span>Which enterprise users actually experience the issue?</span></div><div><b>Objective</b><span>What outcome are they trying to preserve after a meeting?</span></div><div><b>Mechanism</b><span>Why is meaning or ownership being lost today?</span></div><div><b>Severity</b><span>What material consequence follows when it happens?</span></div><div><b>Alternative</b><span>What do they do now without this feature?</span></div><div><b>Value</b><span>Why would they switch or incur a meaningful cost?</span></div></div>
      </div>
      <div className="implication"><b>How to use the request</b><span>Treat it as evidence of interest, then test the audience, problem, consequence, alternative, and value separately.</span></div>
    </Slide>

    <Slide n={15} section="UNIT 03  |  AUDIENCE, PROBLEM, VALUE" title="A problem definition is earned by pressure-testing presence, consequence, and commitment" subtitle="The claim should remain proportionate to the evidence and explicit about what remains unknown" source="Reforge, Problem to Solve; Refine User Profile and Problem">
      <ExhibitTitle n={12}>Problem-hypothesis pressure test</ExhibitTitle>
      <div className="pressure-table">
        <div className="pressure-head"><span>Dimension</span><span>Question</span><span>Current evidence</span><span>Status</span></div>
        <div><b>Presence</b><span>Does the issue occur for a bounded audience?</span><em>Three requests and two interviews show it occurs somewhere.</em><i className="status partial">Partial</i></div>
        <div><b>Severity</b><span>What material consequence does it create?</span><em>No missed commitment, rework, delay, or trust cost is established.</em><i className="status weak">Weak</i></div>
        <div><b>Frequency</b><span>When and how often does it happen?</span><em>The rate and relevant meeting types remain unknown.</em><i className="status weak">Weak</i></div>
        <div><b>Ownership</b><span>Who experiences and owns the consequence?</span><em>Team leads report follow-up burden, but ownership is not yet clear.</em><i className="status partial">Partial</i></div>
        <div><b>Workaround</b><span>What happens today without the feature?</span><em>Teams use manual notes and action-item recaps.</em><i className="status strong">Visible</i></div>
        <div><b>Commitment</b><span>What meaningful cost will users incur?</span><em>No behavior, switching cost, or payment signal exists yet.</em><i className="status weak">Weak</i></div>
      </div>
    </Slide>

    <Slide n={16} section="UNIT 03  |  AUDIENCE, PROBLEM, VALUE" title="The product option should remain one alternative among several until value is earned" subtitle="Workflow, policy, service, product, and deferral options preserve different levels of speed and reversibility" source="Reforge, Finding Product-Market Fit; Product Conviction; course synthesis">
      <ExhibitTitle n={13}>Illustrative option screen for recovering meeting meaning</ExhibitTitle>
      <div className="option-matrix">
        <div className="matrix-head"><span>Option</span><span>Time to learn</span><span>Reversibility</span><span>Operating cost</span><span>Product commitment</span></div>
        <div><b>Decision-log ritual</b><span>Days</span><span className="rating-label high">High</span><span className="rating-label low">Low</span><span className="rating-label low">Low</span></div>
        <div><b>Owner + outcome policy</b><span>Days</span><span className="rating-label high">High</span><span className="rating-label low">Low</span><span className="rating-label low">Low</span></div>
        <div><b>Concierge summaries</b><span>1-2 weeks</span><span className="rating-label medium">Medium</span><span className="rating-label high">High</span><span className="rating-label medium">Medium</span></div>
        <div className="selected"><b>Automated summaries</b><span>Multiple weeks</span><span className="rating-label low">Low</span><span className="rating-label medium">Medium</span><span className="rating-label high">High</span></div>
        <div><b>Defer</b><span>Immediate</span><span className="rating-label high">High</span><span className="rating-label low">Low</span><span className="rating-label none">None</span></div>
      </div>
      <div className="table-note"><b>Decision rule</b><span>The objective is to preserve meeting meaning - not to automate summaries. Product work must beat cheaper, faster, and more reversible ways to reach that objective.</span></div>
    </Slide>

    <PromptSlide n={17} unit="UNIT 03" title="What problem - if any - has Noted earned?" output="State one bounded audience–problem–value hypothesis, its weakest consequential claim, current disposition, and one credible no-build alternative.">
      <p>Separate the feature request from the objective. Bound the audience, mechanism, severity, frequency, workaround, promised value, and weakest assumption.</p>
      <strong>Recommend investigate, proceed, narrow, reframe, defer, or stop - and name one no-build alternative.</strong>
    </PromptSlide>

    <Slide n={18} section="WEEK 1  |  CHECKPOINT" title="The Week 1 deliverable is one linked record that exposes the full chain of judgment" subtitle="The record should let another PM inspect the choice, evidence limits, hypothesis, and next disposition">
      <ExhibitTitle n={14}>Product Decision Case - Week 1 structure</ExhibitTitle>
      <div className="record">
        <div className="record-column"><em>01</em><b>Decision boundary</b><ul><li>State the choice and who owns it.</li><li>Bound the population and horizon.</li><li>Explain the consequence and responsible rigor.</li></ul></div>
        <div className="record-column"><em>02</em><b>Current view</b><ul><li>Separate evidence from interpretation.</li><li>Preserve the strongest counter-signal.</li><li>State confidence and a revision trigger.</li></ul></div>
        <div className="record-column"><em>03</em><b>Linked hypothesis</b><ul><li>Connect audience, problem, and value.</li><li>Keep the current alternative visible.</li><li>Name the weakest consequential claim.</li></ul></div>
        <div className="record-column final"><em>04</em><b>Disposition</b><ul><li>Say what should happen next and why.</li><li>Choose: investigate, proceed, narrow, or reframe.</li><li>Deferral and stopping remain valid decisions.</li></ul></div>
      </div>
      <div className="implication"><b>Review standard</b><span>Reasoning quality is judged from what was knowable at the time - not from hindsight after the outcome.</span></div>
    </Slide>

    <Slide n={19} section="CLOSE" title="The weakest consequential claim should determine the next evidence method" subtitle="Session 2 will move from a bounded decision to evidence selection, belief updating, and measurement" className="closing">
      <div className="closing-path">
        <div><span>SESSION 1</span><b>Bound the decision</b><small>Choose where judgment belongs and state the hypothesis you currently hold.</small></div>
        <i className="closing-connector" aria-hidden="true" />
        <div className="next"><span>SESSION 2</span><b>Choose evidence</b><small>Target the unsupported claim whose failure would most change the decision.</small></div>
        <i className="closing-connector" aria-hidden="true" />
        <div><span>OUTCOME</span><b>Update belief</b><small>Use what the evidence can justify without manufacturing certainty.</small></div>
      </div>
      <p className="closing-note">Before Session 2: apply the Week 1 record to your product, or continue with the Noted case.</p>
    </Slide>
  </main>;
}
