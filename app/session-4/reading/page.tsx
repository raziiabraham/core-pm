import AdvancedReading, { SessionReadingData } from "../../components/advanced-reading";

const data: SessionReadingData = {
  number: 4,
  arc: "Commit + Learn",
  title: "Make the choice survivable.",
  description: "Carry an opinionated product choice through disagreement, delivery change, staged exposure, and mixed outcomes while preserving clear ownership and honest learning.",
  checkpoint: "Completed Product Decision Case",
  orientation: "Session 4 tests whether the product choice can survive contact with people and reality without dissolving into consensus, PM takeover, or retrospective storytelling.",
  units: [
    {
      number: "10",
      eyebrow: "Commitment boundary",
      shortTitle: "Create commitment",
      title: "Create commitment without consensus",
      thesis: "Commitment requires shared context, differentiated participation, and explicit authority—not universal agreement.",
      intro: "A decision is not portable because it appeared on a slide. People need enough context to act, clarity about how they participated, and a precise record of who decides what when confidence differs.",
      prose: [
        "Begin with context that travels: the diagnosis, chosen direction, evidence boundary, exclusions, dependencies, and revision trigger. Then distinguish awareness, input, alignment, shaping the work, and decision authority. These are not levels of status. They are different participation needs for a particular decision. A person can provide essential input without owning the product-direction call, while Engineering, Security, Legal, or another domain owner retains authority inside its own remit.",
        "Commitment is not consensus. A team can understand the decision, preserve material dissent, and commit to a bounded next step even when confidence is uneven. Product confidence concerns whether the chosen direction creates worthwhile value; engineering confidence concerns whether the proposed system can be delivered and operated responsibly. Combining them into one confidence score hides the conversation the team actually needs.",
        "Escalation should contain an exact ask. Instead of reporting that stakeholders disagree, state the decision owner, unresolved consequence, options considered, recommendation, and the help required by when. Preserve dissent in the record so later learning can distinguish a known risk from a surprise. The objective is not frictionless agreement; it is a commitment boundary that allows action without pretending uncertainty disappeared."
      ],
      aside: { title: "Authority is decision-specific", copy: "Product can own product direction without owning security acceptance, architectural integrity, legal interpretation, or another specialist’s domain judgment." },
      exhibits: [
        {
          label: "Exhibit 1 · Participation map",
          title: "Participation should match the decision rather than flatten every contributor into the same role.",
          kind: "grid",
          items: [
            { kicker: "AWARENESS", title: "Know what changed", copy: "People affected downstream receive the decision, rationale, and consequence." },
            { kicker: "INPUT", title: "Inform the choice", copy: "Relevant expertise and constraints enter before the boundary closes." },
            { kicker: "ALIGNMENT", title: "Coordinate dependencies", copy: "Owners reconcile interfaces, timing, and cross-team consequences." },
            { kicker: "SHAPE", title: "Develop the path", copy: "The delivery team helps design the sequence and expose feasibility risk." },
            { kicker: "PRODUCT DIRECTION", title: "Own the product call", copy: "The named owner chooses the direction and accepts its trade-offs.", tone: "highlight" },
            { kicker: "DOMAIN AUTHORITY", title: "Retain specialist remit", copy: "Engineering, Security, Legal, and other owners decide within their accountability." }
          ],
          implication: { label: "Operating rule", copy: "Consultation does not transfer authority, and product ownership does not erase specialist decision rights." }
        },
        {
          label: "Exhibit 2 · Commitment record",
          title: "A durable commitment preserves both the call and the unresolved consequence.",
          kind: "ledger",
          items: [
            { kicker: "DECIDED", title: "Bounded enterprise handoff pilot", copy: "Proceed with Partner A and a constrained permission model.", tone: "highlight" },
            { kicker: "CONFIDENCE", title: "Product and engineering differ", copy: "Product mechanism is plausible; identity integration remains uncertain." },
            { kicker: "DISSENT", title: "Governance risk remains", copy: "Security believes workspace inheritance may expose restricted notes.", tone: "warning" },
            { kicker: "EXACT ASK", title: "Choose the acceptable boundary", copy: "Security owner confirms whether the constrained model is acceptable by Thursday." },
            { kicker: "CONSEQUENCE", title: "No answer means narrower exposure", copy: "Partner B remains out until the identity path is resolved." }
          ],
          implication: { label: "Commitment test", copy: "Can each owner state what was decided, what remains contested, what they now own, and which condition reopens the decision?" }
        }
      ],
      prompt: {
        title: "What commitment boundary allows Noted to move without pretending consensus?",
        copy: "Map participation and authority for the pilot, separate product from engineering confidence, retain the strongest dissent, and make one escalation ask exact.",
        output: "State the owner, differentiated participation, product and engineering confidence, retained dissent, and one exact escalation ask."
      },
      carry: "Portable context, decision-specific owner, differentiated participation, confidence by domain, retained dissent, exact ask, and reopening condition.",
      sources: "Reforge: Mastering Product Management—Empowering Context, Narrative–Commitments–Tasks, Awareness–Alignment–Inclusion, Opinionated Decision-Making, Clear Asks, Product Conviction, and Effort and Alignment."
    },
    {
      number: "11",
      eyebrow: "Adaptive delivery system",
      shortTitle: "Adapt execution",
      title: "Adapt execution without reclaiming ownership",
      thesis: "When reality changes, intervene in the delivery system before turning the PM into the substitute owner.",
      intro: "A strong plan will still encounter dependencies, estimation error, and changing evidence. The response should preserve the strategic choice while changing sequence, interfaces, review cadence, or exposure in proportion to the risk.",
      prose: [
        "Delivery is a system of estimates, dependencies, interfaces, decisions, review loops, and risk controls. When Noted’s permission dependency expands from two weeks to four, the original sequence is no longer credible. The PM should not simply demand the old date or absorb engineering ownership. Instead, revisit which slice can still create value or learning, which partner can be exposed safely, and which interface needs a named decision right.",
        "Delegation requires a contract: outcome, boundary, owner, decision rights, interfaces, review cadence, evidence expected, and stop or escalation condition. Without this clarity, autonomy becomes abandonment until a late surprise triggers takeover. Good team touchpoints and product reviews make the work inspectable early enough to adapt while the owner still has room to act.",
        "Intervention should be proportional, explicit, and temporary. Increase review frequency, narrow exposure, add a specialist, or take one bounded decision when consequence requires it. State the return-to-autonomy condition so temporary control does not become the permanent operating model. The PM owns the integrity of the product choice and delivery interfaces; each domain owner still owns the work and decisions inside the agreed boundary."
      ],
      aside: { title: "Adapt the system before replacing the owner", copy: "Sequence, scope, interfaces, exposure, and cadence are legitimate controls. Silent takeover often solves today’s anxiety by weakening tomorrow’s team." },
      exhibits: [
        {
          label: "Exhibit 3 · Sequence under pressure",
          title: "A four-week permission dependency changes exposure—not the entire strategic thesis.",
          description: "The revised path protects the learning mechanism while containing the governance risk.",
          kind: "contrast",
          items: [
            { kicker: "ORIGINAL", title: "Expose both partners in Week 3", copy: "Ship decision-and-owner capture with inherited workspace permissions after a two-week integration.", note: "No longer credible after identity complexity surfaces.", tone: "warning" },
            { kicker: "REVISED", title: "Stage the exposure", copy: "Use a constrained manual path for Partner A, shadow the intelligence layer, run an identity spike, and hold Partner B.", note: "Preserves product learning and contains the trust boundary.", tone: "highlight" }
          ],
          implication: { label: "What stayed stable", copy: "The enterprise handoff direction remains; the sequence, exposure, and governance controls change in response to new delivery evidence." }
        },
        {
          label: "Exhibit 4 · Delegation and intervention",
          title: "Explicit decision rights make a temporary intervention reversible.",
          kind: "ledger",
          items: [
            { kicker: "OUTCOME", title: "Learn whether accountable handoff changes follow-through", copy: "The product goal remains owned by the PM." },
            { kicker: "DELIVERY OWNER", title: "Engineering lead owns the pilot path", copy: "Chooses implementation within the accepted security boundary." },
            { kicker: "INTERFACES", title: "Security accepts exposure; PM selects partner scope", copy: "Cross-domain decisions have named owners." },
            { kicker: "CADENCE", title: "Twice-weekly risk review", copy: "Temporary while identity and missing-actor rates exceed the agreed threshold." },
            { kicker: "STOP", title: "Pause on trust or observability breach", copy: "No expansion if restricted notes can leak or actor missingness stays above 10%.", tone: "warning" },
            { kicker: "RETURN", title: "Restore ordinary autonomy", copy: "Return to weekly review after the identity path passes and two stable cycles complete.", tone: "highlight" }
          ],
          implication: { label: "Selective control", copy: "The intervention is justified by consequence and ends when the named condition is met—not when the PM feels generally reassured." }
        }
      ],
      prompt: {
        title: "How should Noted adapt the pilot without making the PM the substitute owner?",
        copy: "Revise the delivery system around the permission dependency. Show which elements change, who retains each decision right, and when temporary intervention ends.",
        output: "State the revised sequence, interfaces, decision rights, review cadence, stop condition, and return-to-autonomy condition."
      },
      carry: "Revised sequence and exposure, owners, interfaces, decision rights, review cadence, stop condition, intervention rationale, and return-to-autonomy condition.",
      sources: "Reforge: Mastering Product Management—Delivery Systems, Estimate–Sequence–Mitigate, Delegate and Manage, Product Reviews, Team Touchpoints, and Selective Micromanagement; Product Strategy—Staging and Shifting Gears."
    },
    {
      number: "12",
      eyebrow: "Closed learning loop",
      shortTitle: "Learn honestly",
      title: "Learn without rewriting history",
      thesis: "A mixed outcome should update the product judgment and the operating system without allowing hindsight to rewrite what was knowable at the time.",
      intro: "The end of a cycle is not a verdict on whether the PM was good or bad. It is a comparison between forecast and result across deployment, exposure, observed outcome, durable impact, decision quality, and luck.",
      prose: [
        "Deployment, exposure, observed outcome, and durable product impact are distinct. A capability can be deployed but barely exposed; exposed but not used as intended; used and associated with a short-term movement; or capable of producing sustained value. For Noted, the staged pilot reaches 64 meetings across two workspaces and shows a +3 percentage-point overall follow-through movement. That is an observed outcome inside a bounded pilot, not yet durable enterprise impact.",
        "Compare the result with the forecast made before exposure. The team expected +8 points and planned to expand above +5 without a trust decline. Partner A shows +9 while Partner B shows −1 amid governance friction, and actor identity is still missing for 12% of events. The correct response is not to average the result into a success story or declare the mechanism false. It is to separate population, implementation, trust, and measurement boundaries and choose the next product action they justify.",
        "Assess decision quality using the information available when the decision was made. A sound bounded pilot can produce a disappointing result; a weak decision can get lucky. Then update the operating system: improve the forecast, evidence plan, instrumentation, review cadence, ownership boundary, or staging rule that shaped the outcome. Honest learning changes both what the product believes and how the team will make the next consequential decision."
      ],
      aside: { title: "Outcomes do not grade decisions by themselves", copy: "Judge the process against what was knowable at the time, then use the result to update both the product thesis and the decision system." },
      exhibits: [
        {
          label: "Exhibit 5 · Evidence boundary after launch",
          title: "The pilot has moved through exposure and outcome—but not yet to durable impact.",
          kind: "chain",
          items: [
            { kicker: "DEPLOYED", title: "Capability available", copy: "The bounded decision-and-owner workflow is live behind the pilot controls." },
            { kicker: "EXPOSED", title: "64 meetings · 2 workspaces", copy: "Exposure is real but narrow and uneven across partners." },
            { kicker: "OBSERVED", title: "+3 pp overall · 12% actor missing", copy: "A mixed short-term movement sits inside an integrity limitation.", tone: "highlight" },
            { kicker: "IMPACT", title: "Durable value unknown", copy: "Retention, repeated behavior, wider population, and operating cost remain unresolved.", tone: "warning" }
          ],
          implication: { label: "Claim boundary", copy: "The team can update the bounded pilot belief and next action; it cannot claim durable enterprise impact or generalize to every meeting." }
        },
        {
          label: "Exhibit 6 · Forecast, result, update",
          title: "The mixed result supports a differentiated next action rather than one global verdict.",
          kind: "ledger",
          items: [
            { kicker: "FORECAST", title: "+8 pp expected", copy: "Expand above +5 points if trust does not decline." },
            { kicker: "RESULT", title: "+3 pp overall", copy: "Partner A reaches +9; Partner B reaches −1 amid governance friction." },
            { kicker: "INTEGRITY", title: "Actor identity missing for 12%", copy: "Population and follow-through estimates remain constrained.", tone: "warning" },
            { kicker: "PRODUCT UPDATE", title: "Continue A; pause B", copy: "Preserve the mechanism test while repairing access and observability.", tone: "highlight" },
            { kicker: "SYSTEM UPDATE", title: "Gate exposure on governance readiness", copy: "Add a pre-pilot identity and instrumentation review to future staging." }
          ],
          implication: { label: "Decision-quality judgment", copy: "The staged choice was justified given the known trust risk; the operating system underestimated identity readiness and needs a stronger exposure gate." }
        }
      ],
      prompt: {
        title: "What should Noted do next—and what must its decision system learn?",
        copy: "Separate deployment, exposure, observed result, and durable impact. Compare forecast with result, judge the earlier choice from what was knowable, and update both product and process.",
        output: "Choose one justified next action. State the evidence boundary, decision-quality judgment, and one operating-system improvement."
      },
      carry: "Forecast versus result, exposure and evidence boundaries, product update, decision-quality judgment, luck, and one operating-system improvement.",
      sources: "Reforge: Product Strategy—Metrics and Instrumentation, Shifting Gears, Retrospectives, and Test vs. Actual Impact; Mastering Product Management—Completing the Decision Loop; OKR Reviews and Postmortems."
    }
  ],
  checkpointIntro: "The completed case should show how one product decision changed from initial signal through evidence, strategy, commitment, execution, and outcome.",
  checkpointFields: [
    { title: "Commitment boundary", copy: "Owners, participation, authority, confidence by domain, retained dissent, exact ask, and reopening condition." },
    { title: "Delivery adaptation", copy: "Revised sequence, exposure, interfaces, decision rights, cadence, stop rule, and return to autonomy." },
    { title: "Outcome interpretation", copy: "Forecast, exposure, observed result, evidence boundary, and durable-impact limit." },
    { title: "Product + system update", copy: "Justified next action, decision-quality judgment, and one operating-system improvement.", tone: "highlight" }
  ],
  next: { label: "WEEK 5 · DEMO DAY", title: "Present the evolution of judgment", copy: "Use six minutes to show how the decision changed, then use four minutes for live feedback on the quality of the reasoning." }
};

export default function Session4Reading(){ return <AdvancedReading data={data} />; }
