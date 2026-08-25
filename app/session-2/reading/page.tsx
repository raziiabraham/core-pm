import AdvancedReading, { SessionReadingData } from "../../components/advanced-reading";

const data: SessionReadingData = {
  number: 2,
  arc: "Learn",
  title: "Make evidence earn the decision.",
  description: "Learn how to choose evidence for a consequential claim, turn mixed observations into a defensible belief, and interpret a measured result without manufacturing certainty.",
  checkpoint: "Evidence & Belief Update",
  orientation: "Session 2 turns the weakest consequential claim from Week 1 into one traceable update—not a larger evidence packet.",
  units: [
    {
      number: "04",
      eyebrow: "Decision-linked evidence",
      shortTitle: "Choose evidence",
      title: "Choose evidence that can answer the decision",
      thesis: "Evidence becomes useful only when it has a defined decision job.",
      intro: "A method is not strong in the abstract. It is strong for a particular claim, population, mechanism, and decision—and only within what the method and instrumentation can actually establish.",
      prose: [
        "Begin with the weakest consequential claim carried from Session 1. For the shared Noted case, the claim is not that enterprise users like summaries; it is that loss of meeting meaning creates repeated rework or missed commitments for enterprise team leads. That wording matters because different findings could lead to different actions. Evidence planning should identify those discriminating findings before selecting interviews, behavioral analysis, a usability study, a pilot, or an experiment.",
        "Every evidence source has a job and a boundary. Interviews can reveal circumstances, language, alternatives, and plausible mechanism, but a small selected sample cannot estimate prevalence. Behavioral data can show patterns at scale, but it cannot explain why the pattern occurs when the event semantics are weak. A controlled comparison can estimate a narrow treatment effect under its design, but it cannot automatically establish durable product value or authorize a broad launch.",
        "Measurement starts before a query or dashboard. Define the actor, behavior, object, population, denominator, and time window in product language, then inspect whether the captured events represent that definition. If actor identity is missing or the target meeting type is not recorded, the responsible response is to narrow the claim, add another source, instrument, or defer. Confidence language cannot repair an unobservable question."
      ],
      aside: { title: "Sufficiency is a decision boundary", copy: "Stop when the remaining uncertainty no longer justifies another evidence cycle relative to consequence, reversibility, timing, and the value of acting. Sufficiency is not the disappearance of disagreement." },
      exhibits: [
        {
          label: "Exhibit 1 · Evidence plan",
          title: "A defensible plan traces the decision all the way to a stopping condition.",
          description: "If any link is vague, the team can produce polished evidence without learning what the decision needs.",
          kind: "chain",
          items: [
            { kicker: "01", title: "Decision", copy: "Choose whether enterprise ownership handoff deserves focused product investment now." },
            { kicker: "02", title: "Weak claim", copy: "Lost meeting meaning creates repeated material rework or missed commitments." },
            { kicker: "03", title: "Evidence job", copy: "Establish presence, mechanism, consequence, population boundary, or response to an intervention." },
            { kicker: "04", title: "Method", copy: "Choose the lowest-cost credible source capable of doing that job within the constraints." },
            { kicker: "05", title: "Sufficiency", copy: "Name the finding that would proceed, narrow, reframe, defer, or stop the decision." }
          ],
          implication: { label: "Planning test", copy: "Can you name two plausible findings that would produce different actions? If not, the evidence question is still too detached from the decision." }
        },
        {
          label: "Exhibit 2 · Noted observability",
          title: "A familiar metric can remain unanswerable when its product meaning and instrumentation diverge.",
          description: "“Confirmed follow-through within 48 hours” sounds precise. Its validity depends on what the event actually represents.",
          kind: "ledger",
          items: [
            { kicker: "ACTOR", title: "Known workspace member", copy: "Missing for 18% of events.", note: "Population comparisons weaken.", tone: "warning" },
            { kicker: "BEHAVIOR", title: "Confirmed owner action", copy: "The confirmation action is captured.", note: "The click may not equal meaningful follow-through." },
            { kicker: "OBJECT", title: "Stable note and workspace IDs", copy: "The event can be linked over time.", note: "Sequence remains traceable.", tone: "highlight" },
            { kicker: "CONTEXT", title: "Decision-heavy recurring meeting", copy: "Meeting type is not captured.", note: "The target context is invisible.", tone: "warning" }
          ],
          implication: { label: "Responsible response", copy: "Do not decorate the existing metric with confidence. Weaken the claim, add another source, instrument, or defer." }
        }
      ],
      prompt: {
        title: "Which evidence should Noted obtain next—and when will it be enough?",
        copy: "Start from the weakest consequential claim. Choose one evidence plan, define the critical metric in product language, inspect observability, and state one attractive method you will deliberately exclude.",
        output: "One claim-linked evidence plan with metric meaning, observability boundary, sufficiency condition, and explicit non-method."
      },
      carry: "Decision-linked claim, evidence roles and limits, metric meaning, observability gaps, and a proportionate stopping condition.",
      sources: "Reforge: User Insights for Product Decisions—Decision-Evidence Fit, Mapping Methods to Decision, and Research Fidelity; Data for Product Managers—Outcome Altitudes, Qualitative Metric Definition, Effective Instrumentation, and Event Dictionaries; Experimentation and Testing—When to Use Experimentation."
    },
    {
      number: "05",
      eyebrow: "Traceable synthesis",
      shortTitle: "Update the belief",
      title: "Turn observations into a defensible belief",
      thesis: "Synthesis earns trust when every important abstraction can travel back to the evidence—and every material contradiction survives the trip.",
      intro: "Raw observations are too fragmented to guide a decision. Broad themes are too easy to believe. The PM’s job is to move repeatedly between them until the belief is both useful and inspectable.",
      prose: [
        "A quote, request, support tag, or event is an observation—not yet an insight. It becomes decision evidence only through an interpretation that names the population, context, plausible mechanism, and consequence. The opposite mistake is abstraction too early: a neat theme such as “teams need better meeting memory” can hide that two of six interviewed leads already settle ownership during the meeting and that the support tag mixes retrieval, permission, and follow-through problems.",
        "Hybrid synthesis moves upward and downward. Move upward to identify a candidate pattern and mechanism; move downward to recover the observations that support and contradict it. Preserve source lineage so another PM can inspect which evidence contributed to the claim. Preserve at least one alternative explanation, because the same pattern may be caused by missing summaries, unclear ownership, fragmented retrieval, or governance friction.",
        "Known flaws should change the scope and strength of the belief. Missing actor identity weakens population comparison; a selected interview sample weakens generalization; retained users may hide survivorship; post-result segmentation can manufacture a preferred story. None automatically makes the evidence worthless. The responsible update might strengthen, weaken, narrow, reframe, or leave the belief unchanged while triggering another source or specialist review."
      ],
      aside: { title: "AI increases the supervision burden", copy: "AI can retrieve, cluster, and link evidence quickly, but neat majority-shaped summaries can erase exceptions and provenance. The PM still owns whether the abstraction preserves meaning." },
      exhibits: [
        {
          label: "Exhibit 3 · Two-way synthesis",
          title: "A usable belief moves upward toward meaning and downward toward recoverable evidence.",
          description: "Do not throw away the atomic observations after a theme appears.",
          kind: "chain",
          items: [
            { kicker: "EVIDENCE", title: "Atomic observations", copy: "Four leads reconstruct recap; two settle ownership live; support tags mix several mechanisms." },
            { kicker: "PATTERN", title: "Bounded repetition", copy: "Recap burden appears in some recurring decision-heavy meetings when ownership remains implicit." },
            { kicker: "MECHANISM", title: "Plausible explanation", copy: "Meaning and accountability decay between the meeting and the next owner action." },
            { kicker: "BELIEF", title: "Current interpretation", copy: "Ownership handoff is plausible for the target context; summary absence remains an alternative." },
            { kicker: "DECISION", title: "Changed state", copy: "Investigate the handoff mechanism before making a product commitment." }
          ],
          implication: { label: "Traceability rule", copy: "If the mechanism or belief cannot point back to supporting and contradicting observations, the synthesis is a persuasive story rather than an inspectable update." }
        },
        {
          label: "Exhibit 4 · Pressure test",
          title: "Six questions prevent a clean narrative from outrunning the evidence.",
          kind: "grid",
          items: [
            { kicker: "CONFIRMATION", title: "What evidence would weaken this?", copy: "Actively recover observations that do not fit the preferred interpretation." },
            { kicker: "SELECTION", title: "Who entered the evidence?", copy: "Requesters, retained users, responders, and design partners may not represent the decision population." },
            { kicker: "SURVIVORSHIP", title: "Who disappeared?", copy: "Active teams can conceal why new or unsuccessful teams stopped using the workflow." },
            { kicker: "GENERALIZATION", title: "Where does the claim travel?", copy: "Evidence from recurring enterprise meetings should not silently become a claim about all meetings." },
            { kicker: "SEGMENTATION", title: "Was the segment declared?", copy: "Post-result cuts are exploratory until another test or source supports them." },
            { kicker: "MISSINGNESS", title: "What is absent—and why?", copy: "Missing actor or context data may be systematic rather than random." }
          ],
          implication: { label: "Bounded update", copy: "A flaw should narrow the claim or change the next evidence move in proportion to its decision consequence; “all data is flawed” is not a reason to ignore it." }
        }
      ],
      prompt: {
        title: "What belief is justified after preserving contradiction and flaws?",
        copy: "State the original conjecture, observations, interpretation, strongest counterevidence, material flaw, plausible alternative, and updated decision implication.",
        output: "One traceable belief update that preserves its strongest counterevidence, material flaw, alternative explanation, and decision implication."
      },
      carry: "Original conjecture, claim-to-source lineage, counterevidence, segment and flaw boundaries, alternative explanation, and an explicit belief update.",
      sources: "Reforge: User Insights for Product Decisions—Synthesis Traps and the Hybrid Approach; Data for Product Managers—Insight-Generation Loop, Pressure-Testing Findings, Segmentation, Data Narrative Calibration, and Working with Flawed Data; Mastering Product Management—Feedback System of Record."
    },
    {
      number: "06",
      eyebrow: "Uncertainty-aware measurement",
      shortTitle: "Bound the result",
      title: "Measure without manufacturing certainty",
      thesis: "A measured result is one estimate under one design; the product decision concerns the unknown effect, its consequence, and the boundary of action.",
      intro: "Statistical output can discipline judgment, but it cannot define product significance, repair a weak design, or decide which error the product should risk.",
      prose: [
        "The observed difference in a pilot or experiment is not the true effect the product will realize. Sampling variation, assignment, interference, missing data, implementation, time, and population all constrain the estimate. For Noted, the observed +4.2 percentage-point increase in confirmed follow-through comes with a plausible interval from −0.8 to +9.1 points. The evidence remains compatible with small harm, negligible value, and worthwhile value.",
        "Set the product decision rule before the result. Name the minimum worthwhile effect, the guardrails, and the consequences of acting on a false positive or failing to act on a real effect. The preferred balance is contextual: launching an easily reversible reminder carries a different false-positive cost from changing permissions, retention, or trust-sensitive AI behavior. Statistical significance does not define strategic importance, and a p-value does not report the probability that a hypothesis is true or false.",
        "An inconclusive result is a design-bounded statement, not proof of no effect. Continuing the test may improve precision, but it also costs time and can become motivated waiting. Unplanned peeking, extending, or stopping when the dashboard looks favorable changes the error properties of ordinary analysis. Segment differences can alter the rollout or product decision, but unplanned segments should remain exploratory until supported. High-stakes causal or inferential claims belong with statistics or experimentation specialists."
      ],
      aside: { title: "Interpretation begins before the result", copy: "Metric meaning, assignment, minimum worthwhile effect, error consequences, stopping rule, and guardrails should be visible before anyone sees which story the data appears to favor." },
      exhibits: [
        {
          label: "Exhibit 5 · Estimate boundary",
          title: "The +4.2 point estimate does not collapse the plausible outcomes into one answer.",
          description: "The interval is illustrative course evidence, not a probability distribution over the true effect.",
          kind: "spectrum",
          items: [
            { kicker: "LOWER BOUND", title: "−0.8 pp", copy: "Small harm remains compatible with the evidence.", tone: "warning" },
            { kicker: "NEAR ZERO", title: "Negligible value", copy: "The mechanism may exist without producing a worthwhile product effect." },
            { kicker: "OBSERVED", title: "+4.2 pp", copy: "A positive estimate below the predeclared +5 point product target.", tone: "highlight" },
            { kicker: "UPPER BOUND", title: "+9.1 pp", copy: "Worthwhile value also remains compatible with the evidence." }
          ],
          implication: { label: "What follows", copy: "The result can narrow the belief and change the next action without proving success, failure, or the exact underlying effect." }
        },
        {
          label: "Exhibit 6 · Error consequence",
          title: "A responsible threshold depends on which mistake the product can afford.",
          kind: "contrast",
          items: [
            { kicker: "FALSE POSITIVE", title: "Proceed when value is not real", copy: "Waste capacity, create trust or governance exposure, and institutionalize a workflow that does not improve follow-through.", note: "Raise rigor when consequence is persistent or hard to reverse.", tone: "warning" },
            { kicker: "FALSE NEGATIVE", title: "Stop when value is real", copy: "Miss a credible enterprise mechanism, delay learning, and leave recurring reconstruction or missed commitments unresolved.", note: "Consider a bounded stage when waiting destroys option value.", tone: "highlight" }
          ],
          implication: { label: "Noted decision", copy: "Stage or gather targeted evidence within a bounded population; do not treat a threshold-adjacent, integrity-limited result as launch authority or as proof of no value." }
        }
      ],
      prompt: {
        title: "What does the Noted pilot justify—and what should happen next?",
        copy: "Interpret the estimate within its design and product boundary. Identify the minimum worthwhile effect, uncertainty, design concern, error consequences, segment signal, and production boundary.",
        output: "One justified next action—proceed, stage, gather targeted evidence, reframe, or stop—with both error consequences visible."
      },
      carry: "Observed result versus unknown effect, minimum worthwhile effect, design and stopping integrity, error consequences, exploratory segment boundary, and justified next action.",
      sources: "Reforge: Experimentation and Testing—True vs. Observed Probabilities, Statistical Significance, Calling a Test Early, Extending Tests Longer, and Segmenting Results; American Statistical Association—Statement on Statistical Significance and P-Values; primary statistical-reporting guidance on interpreting non-significant results."
    }
  ],
  checkpointIntro: "The Week 2 record should reveal how the decision-linked claim shaped the evidence plan, how the evidence changed the belief, and which uncertainty still constrains action.",
  checkpointFields: [
    { title: "Evidence plan", copy: "Claim, evidence jobs, selected sources, exclusions, and sufficiency condition." },
    { title: "Metric + observability", copy: "Behavioral meaning, population, denominator, window, event semantics, and gaps." },
    { title: "Belief update", copy: "Lineage, counterevidence, segment boundary, known flaws, confidence, and alternative." },
    { title: "Decision implication", copy: "What the result justifies now, which error matters, and what remains unresolved.", tone: "highlight" }
  ],
  next: { label: "SESSION 3 · CHOOSE", title: "Turn the belief into direction", copy: "Use the calibrated belief to choose a strategy, allocate the portfolio, and reprice the technical option." }
};

export default function Session2Reading(){ return <AdvancedReading data={data} />; }
