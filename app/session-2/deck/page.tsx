"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "../../deck/deck.css";
import "../../deck/connectors.css";
import "./session-2.css";

type SlideProps = {
  n: number;
  title: string;
  subtitle?: string;
  section?: string;
  source?: string;
  className?: string;
  children: React.ReactNode;
};

function Slide({ n, title, subtitle, section = "SESSION 2  |  LEARN", source, className = "", children }: SlideProps) {
  return <section className={`consulting-slide ${className}`} id={`slide-${n}`}>
    <header className="slide-header">
      <div className="section-label">{section}</div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
    <div className="slide-content">{children}</div>
    <footer className="slide-footer"><span>{source ? `Source: ${source}` : "Core PM course synthesis"}</span><b>{String(n).padStart(2, "0")}</b></footer>
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

export default function Session2Deck() {
  const requestedSlide = Number(useSearchParams().get("export"));
  const exportSlide = Number.isInteger(requestedSlide) && requestedSlide >= 1 && requestedSlide <= 19 ? requestedSlide : null;
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

  return <main className="consulting-deck session-two">
    {exportSlide && <style>{`
      html, body, .consulting-deck { width: 100%; height: 100%; min-height: 0; overflow: hidden; }
      .consulting-deck { display: flex; align-items: center; justify-content: center; }
      .consulting-deck .consulting-slide:not(#slide-${exportSlide}) { display: none; }
      .consulting-deck #slide-${exportSlide} { flex: none; width: 100vw; height: 56.25vw; min-height: 0; }
    `}</style>}
    {!exportSlide && <aside className="deck-controls"><span>Use arrow keys</span><button onClick={() => document.documentElement.requestFullscreen()}>Fullscreen</button></aside>}

    <Slide n={1} title="Make evidence earn the decision" subtitle="Session 2 | Build an evidence chain that updates the decision without overstating what is known" className="cover">
      <div className="cover-grid">
        <div className="cover-number">02</div>
        <div className="cover-steps">
          <div><span>04</span><b>Choose evidence</b><small>Match the claim, method, metric meaning, and observability.</small></div>
          <div><span>05</span><b>Update the belief</b><small>Move between detail and abstraction without erasing contradiction.</small></div>
          <div><span>06</span><b>Bound the result</b><small>Separate the observed estimate from product significance and action.</small></div>
        </div>
      </div>
    </Slide>

    <Slide n={2} title="Session 2 turns a weak consequential claim into one traceable belief update" subtitle="The live session follows the same teach, decide, and debrief rhythm across three cumulative units">
      <ExhibitTitle n={1}>Session logic and cumulative output</ExhibitTitle>
      <div className="journey">
        <div className="journey-step"><em>1</em><b>Evidence plan</b><p>Name what could change the decision, what each source can establish, and when to stop.</p></div>
        <div className="journey-arrow" aria-hidden="true" />
        <div className="journey-step"><em>2</em><b>Belief update</b><p>Preserve source lineage, counterevidence, segments, and known flaws while forming a view.</p></div>
        <div className="journey-arrow" aria-hidden="true" />
        <div className="journey-step"><em>3</em><b>Measurement boundary</b><p>Interpret the estimate, error consequences, integrity, and justified next action.</p></div>
      </div>
      <div className="implication"><b>Week 2 output</b><span>The record shows not only what was learned, but why the decision should—or should not—change.</span></div>
    </Slide>

    <Slide n={3} section="NOTED  |  WEEK 2 EVIDENCE RELEASE" title="Noted has more evidence than last week, but not all of it can answer the same claim" subtitle="The product context is real; every research observation and measurement below is constructed for practice" source="Noted teaching case; product context from noted-main; evidence constructed for practice">
      <ExhibitTitle n={2}>Evidence about decisions, action owners, shared context, and follow-up</ExhibitTitle>
      <div className="evidence-release">
        <article><small>INTERVIEWS</small><b>6 team leads</b><p>Four describe manual recap burden; two say ownership is usually settled during the meeting.</p></article>
        <article><small>SUPPORT TAGS</small><b>31 threads</b><p>“Missing context” appears often, but the tag combines retrieval, permissions, and follow-through issues.</p></article>
        <article><small>BEHAVIORAL DATA</small><b>42%</b><p>Of eligible meeting notes received an edit within 48 hours; actor identity is missing for 18% of events.</p></article>
        <article><small>PILOT READOUT</small><b>+4.2 pp</b><p>Confirmed follow-through increased; the interval spans -0.8 to +9.1 pp and the target was +5 pp.</p></article>
        <div className="case-question"><b>Weakest consequential claim</b><span>Enterprise team leads repeatedly lose decisions, action owners, or context after recurring meetings, causing rework or missed commitments.</span></div>
        <div className="case-constraint"><b>Constraint</b><span>Noted must choose the next evidence or product move before the next planning cycle.</span></div>
      </div>
    </Slide>

    <Slide n={4} section="UNIT 04  |  EVIDENCE FIT" title="Evidence is useful only when it has a defined decision job" subtitle="Relevance and sufficiency matter more than prestige, volume, or the appearance of certainty" source="Reforge, Decision-Evidence Fit; course synthesis">
      <ExhibitTitle n={3}>Decision-linked evidence chain</ExhibitTitle>
      <div className="evidence-chain">
        <article><small>1 · DECISION</small><b>Which response should Noted commit to next?</b><p>Names the choice that can go differently.</p></article><i/>
        <article><small>2 · CLAIM</small><b>Enterprise team leads lose decisions, action owners, or context after recurring meetings, causing rework or missed commitments.</b><p>Names the weakest consequential link.</p></article><i/>
        <article><small>3 · EVIDENCE</small><b>Observe consequence, mechanism, prevalence, and alternative explanations.</b><p>Defines what the activity must establish.</p></article><i/>
        <article><small>4 · ACTION</small><b>Proceed, narrow, reframe, gather targeted evidence, or stop.</b><p>Sets the decision state the evidence can change.</p></article>
      </div>
      <div className="implication"><b>Sufficiency</b><span>Stop when another evidence cycle has less decision value than acting within the remaining uncertainty.</span></div>
    </Slide>

    <Slide n={5} section="UNIT 04  |  EVIDENCE FIT" title="Methods answer different questions; no method owns the evidence hierarchy" subtitle="Select for the claim, population, fidelity, timing, and consequence—not familiarity" source="Reforge, Mapping Methods to Decision; Research Fidelity; When to Use Experimentation">
      <ExhibitTitle n={4}>Method-to-decision fit for the Noted claim</ExhibitTitle>
      <div className="method-matrix">
        <div className="matrix-head"><span>Method</span><span>Strongest contribution</span><span>Cannot establish alone</span><span>Noted fit now</span></div>
        <div><b>Interviews</b><span>Mechanism, context, language, workaround</span><span>Prevalence or causal effect</span><em className="fit high">HIGH</em></div>
        <div><b>Behavioral data</b><span>Pattern, population, sequence, magnitude</span><span>Meaning or motivation</span><em className="fit medium">MEDIUM</em></div>
        <div><b>Usability test</b><span>Interaction failure in a defined task</span><span>Whether the broader problem matters</span><em className="fit low">LOW NOW</em></div>
        <div><b>Survey</b><span>Structured attitudes across a wider sample</span><span>Observed behavior or mechanism</span><em className="fit medium">MEDIUM</em></div>
        <div><b>Controlled test</b><span>Bounded treatment effect under valid design</span><span>Durable production impact or root cause</span><em className="fit low">CONSTRAINED</em></div>
      </div>
      <div className="table-note"><b>The test</b><span>Would this evidence discriminate among the actual options—or merely create more information?</span></div>
    </Slide>

    <Slide n={6} section="UNIT 04  |  METRIC MEANING" title="A metric earns meaning through behavior, population, denominator, window, and value connection" subtitle="The name of a metric is shorthand; the product definition determines what it can support" source="Reforge, Altitude Maps; Describe Your Altitude Qualitatively">
      <ExhibitTitle n={5}>From local behavior to higher product value</ExhibitTitle>
      <div className="altitude-map">
        <article className="solution"><small>SOLUTION ALTITUDE</small><b>Confirmed follow-through within 48 hours</b><p>Eligible decision-heavy meetings with a confirmed owner action ÷ all eligible decision-heavy meetings.</p></article>
        <i/>
        <article className="product"><small>PRODUCT-AREA ALTITUDE</small><b>Teams can retrieve decisions, identify action owners, and complete follow-up</b><p>Assumes confirmation represents completed follow-up rather than an administrative click.</p></article>
        <i/>
        <article className="company"><small>COMPANY ALTITUDE</small><b>Enterprise teams retain Noted as trusted workflow infrastructure</b><p>The pathway is plausible, not yet causal proof.</p></article>
      </div>
      <div className="metric-definition"><b>Before analysis, state</b><span>Actor: enterprise team member</span><span>Object: decision-heavy meeting</span><span>Denominator: eligible meetings</span><span>Window: 48 hours</span></div>
    </Slide>

    <Slide n={7} section="UNIT 04  |  OBSERVABILITY" title="Instrumentation can make an answer impossible even when the dashboard looks complete" subtitle="If event semantics or coverage do not represent the behavior, narrow the claim or repair observability" source="Reforge, Effective Analysis Requires Effective Instrumentation; Structured Event Dictionary">
      <ExhibitTitle n={6}>Current Noted event audit</ExhibitTitle>
      <div className="instrument-audit">
        <div className="audit-head"><span>Event field</span><span>Required meaning</span><span>Current state</span><span>Decision consequence</span></div>
        <div><b>Trigger</b><span>Owner confirms a follow-through action</span><span><em className="amber">AMBIGUOUS</em> fires on open or edit</span><strong>Cannot claim confirmation</strong></div>
        <div><b>Actor</b><span>Known workspace member</span><span><em className="red">MISSING</em> for 18% of events</span><strong>Population comparison weakens</strong></div>
        <div><b>Meeting type</b><span>Decision-heavy recurring meeting</span><span><em className="red">NOT CAPTURED</em></span><strong>Target context is invisible</strong></div>
        <div><b>Object</b><span>Stable note and workspace IDs</span><span><em className="green">AVAILABLE</em></span><strong>Sequence remains traceable</strong></div>
      </div>
      <div className="implication"><b>Responsible response</b><span>Do not decorate the existing metric with confidence. Weaken the claim, add another source, instrument, or defer.</span></div>
    </Slide>

    <PromptSlide n={8} unit="UNIT 04" title="Which evidence should Noted obtain next—and when will it be enough?" output="Choose one claim-linked evidence plan. Define metric meaning, observability, sufficiency, and one attractive method you will exclude.">
      <p>Start from the weakest consequential claim. Choose one evidence plan, define the critical metric in product language, and identify the material instrumentation boundary.</p>
      <strong>State one attractive method you will not use and why.</strong>
    </PromptSlide>

    <Slide n={9} section="UNIT 05  |  DEFENSIBLE BELIEF" title="Raw observations become decision evidence only through traceable abstraction" subtitle="Staying too low produces a list; moving too high produces a story that outruns its sources" source="Reforge, Synthesis Traps; Hybrid Approach to Synthesis">
      <ExhibitTitle n={7}>The synthesis ladder and its failure modes</ExhibitTitle>
      <div className="synthesis-ladder">
        <article><small>ATOMIC EVIDENCE</small><b>“I rewrite the action list after every leadership sync.”</b><p>Recoverable source, actor, and context.</p></article><i/>
        <article><small>OBSERVATION</small><b>Four interviewed leads manually reconstruct follow-through.</b><p>Bounded to the sampled context.</p></article><i/>
        <article><small>PATTERN</small><b>Decision-heavy meetings may create recap burden when ownership remains implicit.</b><p>Mechanism with exceptions preserved.</p></article><i/>
        <article><small>BELIEF UPDATE</small><b>The problem narrows from missing summaries to action owners not being assigned during recurring meetings.</b><p>Changes the product decision.</p></article>
        <div className="trap low"><b>Too low</b><span>Quotes and requests never become a mechanism.</span></div>
        <div className="trap high"><b>Too high</b><span>A neat theme erases segments and contradiction.</span></div>
      </div>
    </Slide>

    <Slide n={10} section="UNIT 05  |  DEFENSIBLE BELIEF" title="Defensible synthesis moves repeatedly between the pattern and the evidence beneath it" subtitle="Every material abstraction must survive a downward trace to support, contradiction, context, and limits" source="Reforge, Hybrid Approach to Synthesis; Consistent Insight Generation Is a Loop">
      <ExhibitTitle n={8}>Bidirectional synthesis discipline</ExhibitTitle>
      <div className="hybrid-process">
        <article><small>1 · ABSTRACT UP</small><b>What pattern and mechanism explain the observations?</b></article><i/>
        <article><small>2 · PRESSURE TEST</small><b>What alternative, flaw, or segment could reverse it?</b></article><i/>
        <article><small>3 · TRACE DOWN</small><b>Which records support and contradict each claim?</b></article><i/>
        <article><small>4 · UPDATE</small><b>How does the decision state change?</b></article>
        <div className="process-belief"><small>CURRENT BELIEF AFTER THE LOOP</small><b>Unassigned action owners—not missing summaries—may cause recap work and missed follow-up.</b><span>Repeat until every material claim traces in both directions.</span></div>
      </div>
      <div className="implication"><b>AI boundary</b><span>Clustering can accelerate candidate patterns; the PM owns semantic fidelity, omissions, and the belief update.</span></div>
    </Slide>

    <Slide n={11} section="UNIT 05  |  LINEAGE" title="A belief is reviewable when support, counterevidence, segment, and flaw travel with the claim" subtitle="Contradiction is not noise to remove; it defines the boundary of what the evidence can justify" source="Reforge, Pressure Testing Your Own Findings; Segmentation Analysis; course synthesis">
      <ExhibitTitle n={9}>Illustrative Noted claim ledger</ExhibitTitle>
      <div className="claim-ledger">
        <div className="ledger-head"><span>Claim</span><span>Supporting evidence</span><span>Counterevidence</span><span>Boundary or flaw</span></div>
        <div><b>Recap work is repeated</b><span>4 of 6 leads describe manual reconstruction</span><span>2 settle ownership during the meeting</span><em>Small, selected interview sample</em></div>
        <div><b>The consequence is material</b><span>11 support threads mention missed context</span><span>No verified missed-commitment rate</span><em>Support tag mixes three mechanisms</em></div>
        <div><b>Follow-through is lower without a prompt</b><span>Pilot estimate: +4.2 pp treatment difference</span><span>Interval includes zero and target</span><em>Actor and meeting type partly unobserved</em></div>
        <div className="ledger-highlight"><b>Bounded update</b><span>Unassigned action owners are a plausible cause of recap work in recurring decision-heavy meetings</span><span>Missing summaries remain an alternative cause</span><em>Investigate the cause before product commitment</em></div>
      </div>
    </Slide>

    <Slide n={12} section="UNIT 05  |  FLAWED DATA" title="A known data flaw should change the claim—not automatically end the decision" subtitle="The responsible response depends on whether the defect threatens relevance, direction, magnitude, or population" source="Reforge, Working with Flawed Data; course synthesis">
      <ExhibitTitle n={10}>Four responses to imperfect evidence</ExhibitTitle>
      <div className="flaw-responses">
        <article><span>01</span><b>Use with boundary</b><p>The missingness is limited and cannot reverse the narrow claim.</p><small>STATE THE LIMIT</small></article>
        <article><span>02</span><b>Triangulate</b><p>Another source can test the same mechanism with different failure modes.</p><small>ADD A DISTINCT SOURCE</small></article>
        <article><span>03</span><b>Narrow or reframe</b><p>The evidence supports one population, context, or direction—not the broad claim.</p><small>REDUCE CLAIM SCOPE</small></article>
        <article><span>04</span><b>Stop or repair</b><p>The defect can reverse the consequential decision and no responsible workaround exists.</p><small>ESCALATE THE GAP</small></article>
      </div>
      <div className="implication"><b>Do not say</b><span>“All data is flawed” is neither a reason to trust the result nor a reason to ignore every useful signal.</span></div>
    </Slide>

    <PromptSlide n={13} unit="UNIT 05" title="What belief is justified after preserving contradiction and flaws?" output="State one traceable belief update. Preserve its strongest counterevidence, material flaw, alternative explanation, and decision implication.">
      <p>State the original conjecture, observation, interpretation, strongest counterevidence, material flaw, plausible alternative, and updated decision implication.</p>
      <strong>Your update must strengthen, weaken, narrow, reframe, or leave the belief unchanged.</strong>
    </PromptSlide>

    <Slide n={14} section="UNIT 06  |  UNCERTAINTY" title="The observed result is one estimate; the product decision concerns an unknown underlying effect" subtitle="Interpret the estimate with its uncertainty, design, population, time window, and minimum worthwhile effect" source="Reforge EXP-12; ASA (2016)">
      <ExhibitTitle n={11}>Illustrative Noted pilot estimate</ExhibitTitle>
      <div className="effect-plot">
        <div className="axis"><span>-5 pp</span><span>0</span><span>+5 pp</span><span>+10 pp</span><i className="zero"/><i className="target"/></div>
        <div className="interval"><i/><b>Observed estimate<br/><strong>+4.2 pp</strong></b><span>plausible range shown: -0.8 to +9.1 pp</span></div>
        <div className="target-label"><b>PREDECLARED TARGET</b><span>+5 pp minimum worthwhile effect</span></div>
        <div className="interpretation-grid"><article><small>WHAT WE OBSERVED</small><b>A positive point estimate below the target</b></article><article><small>WHAT REMAINS POSSIBLE</small><b>Small harm, negligible value, or worthwhile value</b></article><article><small>WHAT IT DOES NOT SAY</small><b>The true effect is +4.2 pp—or that no effect exists</b></article></div>
      </div>
    </Slide>

    <Slide n={15} section="UNIT 06  |  ERROR CONSEQUENCE" title="The responsible evidence threshold depends on the cost of being wrong in both directions" subtitle="False-positive and false-negative risk are product consequences—not abstract statistical penalties" source="Reforge, Statistical Significance; ASA Statement on p-Values; course synthesis">
      <ExhibitTitle n={12}>Decision-consequence matrix for the Noted pilot</ExhibitTitle>
      <div className="error-matrix">
        <div className="corner"><span>DECISION</span><span>UNDERLYING EFFECT</span></div><div className="col"><b>Worthwhile</b><span>At or above the product threshold</span></div><div className="col"><b>Not worthwhile</b><span>Below value or guardrail threshold</span></div>
        <div className="row"><b>Proceed</b><span>Stage or commit</span></div><article className="good"><b>Useful move</b><p>Value is realized within the operating boundary.</p></article><article className="risk"><small>FALSE POSITIVE CONSEQUENCE</small><b>Build and operationalize weak value</b><p>Integration, trust, and maintenance cost without worthwhile outcome.</p></article>
        <div className="row"><b>Do not proceed</b><span>Reframe, gather targeted evidence, or stop</span></div><article className="risk"><small>FALSE NEGATIVE CONSEQUENCE</small><b>Miss a valuable intervention</b><p>Enterprise teams continue reconstructing decisions or missing assigned follow-up.</p></article><article className="good"><b>Useful restraint</b><p>Avoid product commitment that would not earn its lifecycle cost.</p></article>
      </div>
    </Slide>

    <Slide n={16} section="UNIT 06  |  RESULT INTEGRITY" title="A result can be numerically precise and still fail the product decision" subtitle="Inspect what was declared before the result, how the test ran, and what the result can actually authorize" source="Reforge, Calling a Test Early; Evaluating Test Results">
      <ExhibitTitle n={13}>Three integrity gates before action</ExhibitTitle>
      <div className="integrity-gates">
        <article><small>BEFORE</small><b>Decision rule</b><ul><li>+5 pp minimum worthwhile effect</li><li>Workspace-level assignment</li><li>14-day duration</li><li>No trust guardrail decline</li></ul></article>
        <article><small>DURING</small><b>Execution integrity</b><ul><li>Dashboard viewed on Day 7</li><li>No early stop or sample extension</li><li>Cross-workspace contamination possible</li><li>Actor identity missing for 18%</li></ul></article>
        <article><small>AFTER</small><b>Interpretation boundary</b><ul><li>Estimate +4.2 pp; range crosses zero and target</li><li>High-complexity segment appears stronger</li><li>Segment finding is exploratory</li><li>Production impact remains unknown</li></ul></article>
      </div>
      <div className="implication"><b>Result</b><span>Inconclusive does not mean “no effect”; it also does not automatically justify running the same test longer.</span></div>
    </Slide>

    <PromptSlide n={17} unit="UNIT 06" title="What does the Noted pilot justify—and what should happen next?" output="Interpret the estimate within its design and product boundary, then choose one justified next action with both error consequences visible.">
      <p>Interpret the observed estimate, minimum worthwhile effect, uncertainty, design concern, false-positive and false-negative consequence, segment signal, and production boundary.</p>
      <strong>Choose proceed, stage, gather targeted evidence, reframe, or stop.</strong>
    </PromptSlide>

    <Slide n={18} section="SESSION 2  |  CAPSTONE CHECKPOINT" title="The Week 2 record makes the evidence-to-decision path inspectable" subtitle="One linked update replaces a research packet, dashboard readout, and experiment result that never change the decision">
      <ExhibitTitle n={14}>Evidence and Belief Update</ExhibitTitle>
      <div className="checkpoint-grid">
        <article><span>01</span><b>Decision-linked claim</b><p>Weakest consequential assumption and the choice it could change.</p></article>
        <article><span>02</span><b>Evidence plan</b><p>Source roles, limits, metric meaning, observability, and sufficiency.</p></article>
        <article><span>03</span><b>Traceable synthesis</b><p>Observations, abstraction, counterevidence, segment, flaw, and alternative.</p></article>
        <article><span>04</span><b>Measurement boundary</b><p>Estimate, error consequence, integrity, product significance, and justified action.</p></article>
        <div className="checkpoint-output"><small>HANDOFF TO SESSION 3</small><b>One calibrated belief, one current decision state, and the conditions that strategy must respect.</b></div>
      </div>
    </Slide>

    <Slide n={19} section="SESSION 2  |  CLOSE" title="Strategy begins with the belief the evidence can support—not the story the team wants to tell" subtitle="Session 3 will convert the updated belief into direction, portfolio allocation, and an AI-era technical choice" className="closing">
      <div className="closing-path">
        <div><span>CARRY FORWARD</span><b>Current belief</b><small>What the evidence supports, contradicts, and cannot establish.</small></div><i className="closing-connector" aria-hidden="true"/><div><span>NAME NOW</span><b>Weakest strategic link</b><small>The unsupported connection most capable of changing direction.</small></div><i className="closing-connector" aria-hidden="true"/><div className="next"><span>SESSION 3</span><b>Choose direction</b><small>Link diagnosis, strategy, portfolio, and lifecycle consequence.</small></div>
      </div>
      <div className="closing-note">Bring the belief update—not the raw evidence packet—to the next decision.</div>
    </Slide>
  </main>;
}
