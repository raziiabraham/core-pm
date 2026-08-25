import AdvancedReading, { SessionReadingData } from "../../components/advanced-reading";

const data: SessionReadingData = {
  number: 3,
  arc: "Choose",
  title: "Turn evidence into an opinionated choice.",
  description: "Use a calibrated belief to choose a coherent direction, make the allocation visible, and reprice the technical option now that coding agents have changed—but not erased—the cost of building.",
  checkpoint: "Strategy & Constraint Choice",
  orientation: "Session 3 begins where evidence stops: the point at which a PM must turn an incomplete but defensible belief into an explicit direction and set of trade-offs.",
  units: [
    {
      number: "07",
      eyebrow: "Coherent strategy",
      shortTitle: "Choose direction",
      title: "Turn evidence into a coherent strategy",
      thesis: "Strategy is a linked explanation of where to play, how to win, and what must be true—not a list of attractive initiatives.",
      intro: "The evidence narrows the field, but it does not select the strategy. Judgment is still required to explain the situation, choose a mechanism, and accept the opportunities the choice will leave behind.",
      prose: [
        "Begin with diagnosis. A diagnosis interprets the evidence into the central tension the product must resolve; it is neither a data summary nor a restatement of the goal. For Noted, the evidence suggests that the valuable enterprise mechanism is not generic meeting summarization. It is preserving meaning and accountability between a decision-heavy meeting and the next owner action. Activation remains a counter-signal, so choosing enterprise workflow depth also means explaining why that branch deserves the next cycle now.",
        "A direction becomes coherent when its hypotheses reinforce one another. The target audience must experience the problem, the product must create distinct value, the advantage must be plausible, distribution must reach the audience, and the economics must support the work. Weakness in one link can invalidate the whole story. Noted may have a credible handoff mechanism yet still lack a repeatable route from an enthusiastic team lead to an authorized enterprise workspace.",
        "An opinionated strategy makes exclusions and revision conditions visible. It says what the team will not optimize for during this cycle, which uncertainty remains most dangerous, and which signal would force reconsideration. This protects the strategy from becoming a retrospective label applied to whatever the roadmap already contains. Evidence informs the choice; the choice organizes subsequent evidence, allocation, and execution."
      ],
      aside: { title: "Coherence is stronger than confidence", copy: "A high-confidence claim can still sit inside a weak strategy. Test whether the audience, problem, value, advantage, growth, and economics form one mutually reinforcing system." },
      exhibits: [
        {
          label: "Exhibit 1 · From evidence to direction",
          title: "Strategy compresses many observations into one governing choice.",
          description: "Each step adds judgment. The chain should remain traceable without pretending the evidence selected the answer by itself.",
          kind: "chain",
          items: [
            { kicker: "EVIDENCE", title: "Bounded belief", copy: "Ownership handoff appears consequential in recurring decision-heavy enterprise meetings; the effect and population remain bounded." },
            { kicker: "TENSION", title: "What prevents progress", copy: "Meeting meaning decays before the next owner action, while enterprise governance slows adoption." },
            { kicker: "DIAGNOSIS", title: "Interpret the situation", copy: "The valuable wedge is accountable handoff, not more complete generic summaries." },
            { kicker: "DIRECTION", title: "Choose how to win", copy: "Deepen the decision-to-owner workflow for a bounded enterprise context and make governance part of the product." },
            { kicker: "REVISION", title: "Name the trigger", copy: "Reconsider if repeated use fails to improve follow-through or admin-led distribution cannot become viable." }
          ],
          implication: { label: "Decision test", copy: "Could another plausible diagnosis have produced a materially different direction? If not, the strategy may only be relabeling an existing plan." }
        },
        {
          label: "Exhibit 2 · Linked hypothesis system",
          title: "The direction is only as strong as its weakest consequential link.",
          description: "A strategy review should search for the link most likely to break the system, not average six dimensions into reassurance.",
          kind: "grid",
          items: [
            { kicker: "AUDIENCE", title: "Enterprise team leads", copy: "Recurring decision-heavy meetings with distributed follow-through.", tone: "highlight" },
            { kicker: "PROBLEM", title: "Meaning and ownership decay", copy: "Reconstruction and missed commitments occur after the meeting." },
            { kicker: "VALUE", title: "Accountable handoff", copy: "Preserve the decision, owner, and next action into the workflow." },
            { kicker: "ADVANTAGE", title: "Decision context", copy: "A structured record can compound across meetings and follow-through." },
            { kicker: "GROWTH", title: "Admin-led distribution", copy: "Authorization and rollout remain weak and may constrain adoption.", tone: "warning" },
            { kicker: "ECONOMICS", title: "Focused enterprise depth", copy: "Value must justify governance, support, and lifecycle cost." }
          ],
          implication: { label: "Current weakest link", copy: "Admin-led distribution and governance—not code generation—may determine whether the enterprise direction can become a viable product strategy." }
        }
      ],
      prompt: {
        title: "Which strategic direction should govern Noted’s next cycle?",
        copy: "Choose one direction that explains the evidence rather than merely collecting initiatives. Make the trade-off and the most dangerous linked hypothesis inspectable.",
        output: "Choose one direction. State the diagnosis, winning mechanism, explicit exclusion, weakest linked hypothesis, and revision trigger."
      },
      carry: "Diagnosis, chosen direction, winning mechanism, explicit exclusion, linked hypotheses, weakest link, and revision trigger.",
      sources: "Reforge: Mastering Product Management—Strategic Foundations; Product Strategy—Great Product Strategy; Product-Market Fit—linked product narrative and multi-signal measurement."
    },
    {
      number: "08",
      eyebrow: "Portfolio and sequence",
      shortTitle: "Allocate the work",
      title: "Make the portfolio choice portable",
      thesis: "A strategy becomes real when it changes what receives capacity, what gets sequenced first, and what is explicitly displaced.",
      intro: "Roadmaps often hide allocation inside a list of features. A portable portfolio choice shows how different work contributes to the strategy and why this sequence preserves both value and learning.",
      prose: [
        "Product work serves different purposes. Feature work creates user value; growth work changes acquisition, activation, retention, or expansion; scale work protects performance; risk work addresses trust or compliance; enabling work creates future options. Treating every item as an interchangeable feature makes trade-offs invisible. For Noted, permission and retention work may carry direct strategic value because governance determines whether the enterprise workflow can be adopted at all.",
        "Scoring can expose assumptions, but it cannot make the allocation decision. Reach, impact, confidence, and effort rarely share equally reliable inputs, and a numerical ranking can obscure dependencies, option value, or the cost of delay. The PM must decide which portfolio expresses the strategy, which opportunity is displaced, and how much capacity remains for existing product health and counter-signals such as activation.",
        "Sequence the smallest value-bearing and learning-bearing path. Early work should test the strategic mechanism without silently committing the full lifecycle cost. A staged Noted sequence can begin with explicit decision-and-owner capture for two design partners, pair it with the minimum permission and retention controls, and use the result to choose whether to deepen, expand, or stop. The sequence is part of the thesis, not an implementation footnote."
      ],
      aside: { title: "A roadmap is evidence of allocation", copy: "If stakeholders cannot see what is funded, displaced, dependent, and revisable, the roadmap communicates activity but not the strategic choice." },
      exhibits: [
        {
          label: "Exhibit 3 · Portfolio lenses",
          title: "Different work types create different forms of product value.",
          description: "The categories prevent visible features from consuming capacity that the strategy needs elsewhere.",
          kind: "grid",
          items: [
            { kicker: "FEATURE", title: "User capability", copy: "Explicit decision, owner, and next-action capture." },
            { kicker: "GROWTH", title: "Adoption movement", copy: "Workspace activation and repeat use in the target context." },
            { kicker: "EXPANSION", title: "More value captured", copy: "Broader team and meeting coverage after the wedge works." },
            { kicker: "SCALE", title: "Reliable operation", copy: "Performance and support as usage and history grow." },
            { kicker: "RISK", title: "Trust boundary", copy: "Permission, retention, visibility, and enterprise governance.", tone: "highlight" },
            { kicker: "ENABLING", title: "Future option", copy: "Meeting classification and observability needed to learn." }
          ],
          implication: { label: "Allocation consequence", copy: "Funding enterprise depth requires capacity for risk and enabling work; counting only the visible workflow understates the chosen portfolio." }
        },
        {
          label: "Exhibit 4 · Value-bearing sequence",
          title: "The sequence reaches a product judgment before it reaches a complete platform.",
          kind: "chain",
          items: [
            { kicker: "WEEKS 1–2", title: "Make context observable", copy: "Instrument meeting type; support an admin template; retain a manual fallback." },
            { kicker: "WEEKS 2–4", title: "Test the handoff", copy: "Ship explicit decision-and-owner capture to two design partners." },
            { kicker: "WEEKS 3–6", title: "Carry minimum governance", copy: "Add the permission and retention controls required for credible exposure." },
            { kicker: "WEEKS 7–8", title: "Choose the next branch", copy: "Use adoption, follow-through, trust, and operating cost to deepen, expand, or stop." }
          ],
          implication: { label: "Portfolio logic", copy: "Each stage should either deliver bounded value, reduce a consequential uncertainty, or satisfy a dependency required by the direction." }
        }
      ],
      prompt: {
        title: "Which portfolio and sequence actually express the strategy?",
        copy: "Allocate the next cycle across work types, show the opportunity you are displacing, and sequence the smallest path that can change the strategic judgment.",
        output: "Choose one portfolio and sequence. State funded work, displaced opportunity, owner, learning logic, and revision point."
      },
      carry: "Funded work types, displaced opportunity, dependencies, smallest value-bearing sequence, owners, learning logic, and revision point.",
      sources: "Reforge: Product Strategy—Portfolio of Product Work, Strategic Priorities, Product Workplan, and Communicating and Iterating the Workplan."
    },
    {
      number: "09",
      eyebrow: "AI-era technical economics",
      shortTitle: "Reprice the option",
      title: "Recalculate technical trade-offs in the age of coding agents",
      thesis: "Coding agents reduce the cost of producing plausible software; they do not remove evaluation, integration, security, operability, maintenance, or ownership.",
      intro: "When generation becomes cheaper, more ideas become buildable. The PM still has to decide which option creates durable product leverage and who will own the consequences after the first implementation works.",
      prose: [
        "Build-versus-buy is no longer a binary procurement question. The option set includes building, buying, adapting an existing component, deferring until a threshold is met, and choosing not to build. Coding agents can compress exploration, scaffolding, and some implementation work, especially in bounded and well-tested environments. That changes the estimate, but it does not by itself change the product strategy or establish production readiness.",
        "The cost stack moves rather than disappears. Generated code must still be evaluated against the intended behavior, integrated with data and identity systems, reviewed for privacy and security, observed in production, maintained as dependencies change, and supported when users encounter edge cases. For Noted, permissions, retention, auditability, and ownership may dominate lifecycle cost even if the first decision-extraction workflow is quick to prototype.",
        "Choose the smallest technical sequence that preserves strategic learning without smuggling in irreversible commitments. State the scale, latency, quality, trust, or operating threshold that would change the option. Invite specialists where the claim crosses their domain, and name the enduring operational owner. AI-assisted production increases the value of disciplined product judgment because the team can now create convincing artifacts faster than it can validate and responsibly own them."
      ],
      aside: { title: "Cheap to generate is not cheap to own", copy: "A prototype can answer whether an interaction is plausible. It cannot by itself answer whether the capability is reliable, governable, differentiated, or worth carrying for years." },
      exhibits: [
        {
          label: "Exhibit 5 · The shifted cost stack",
          title: "AI compresses one layer while leaving the surrounding system consequential.",
          description: "The appropriate comparison is total lifecycle consequence, not developer hours for the first plausible demo.",
          kind: "ledger",
          items: [
            { kicker: "GENERATION", title: "Prototype and implementation", copy: "Agents can reduce time for scaffolding, variants, and bounded code production.", note: "Cost often falls materially.", tone: "highlight" },
            { kicker: "EVALUATION", title: "Prove intended behavior", copy: "Test quality, edge cases, regressions, and model behavior against the product claim.", note: "Supervision becomes more important." },
            { kicker: "INTEGRATION", title: "Fit the real system", copy: "Identity, permissions, data contracts, migration, and failure paths remain contextual." },
            { kicker: "OPERABILITY", title: "Run it responsibly", copy: "Monitoring, security, privacy, support, and incident response persist after launch." },
            { kicker: "OWNERSHIP", title: "Carry the lifecycle", copy: "Someone must maintain, revise, fund, or retire the capability as conditions change.", tone: "warning" }
          ],
          implication: { label: "Repricing rule", copy: "Reduce the generation estimate where evidence supports it; do not reduce every other lifecycle category by association." }
        },
        {
          label: "Exhibit 6 · Technical option set",
          title: "The best option depends on strategic leverage, uncertainty, and the cost of responsible ownership.",
          kind: "grid",
          items: [
            { kicker: "BUILD", title: "Own the capability", copy: "Choose when the workflow is differentiating and control justifies lifecycle cost." },
            { kicker: "BUY", title: "Acquire a mature component", copy: "Choose when the capability is necessary but not strategically distinctive." },
            { kicker: "ADAPT", title: "Combine existing and proprietary", copy: "Preserve a differentiated layer while externalizing commodity work.", tone: "highlight" },
            { kicker: "DEFER", title: "Wait for a threshold", copy: "Name the scale, quality, or dependency that would make the option timely." },
            { kicker: "NO BUILD", title: "Solve another way", copy: "Use process, manual service, or a narrower product path when software adds little leverage." }
          ],
          implication: { label: "Noted boundary", copy: "Adapt a bounded extraction component behind the existing workflow; keep governance and product semantics owned, and delay broader automation until quality and trust thresholds are met." }
        }
      ],
      prompt: {
        title: "Which technical option should Noted choose now?",
        copy: "Compare build, buy, adapt, defer, and no-build using total lifecycle consequence. Make the next threshold and the enduring ownership explicit.",
        output: "Choose one technical option. State lifecycle consequence, threshold, smaller sequence, specialist review, and operational owner."
      },
      carry: "Chosen technical option, lifecycle cost stack, threshold, smaller sequence, specialist review, operational owner, and rejected alternatives.",
      sources: "Reforge: Technical Strategy—Technical Debt Limits, Build vs. Buy, Scope–Time–Resources, Smaller Sequences, and Scale and Risk Thresholds; Anthropic Economic Index (2025); METR research on AI-assisted software task completion (2025)."
    }
  ],
  checkpointIntro: "The Week 3 record should make one strategic direction portable from product logic through allocation and technical ownership.",
  checkpointFields: [
    { title: "Direction", copy: "Diagnosis, winning mechanism, explicit exclusion, weakest linked hypothesis, and revision trigger." },
    { title: "Portfolio", copy: "Funded work types, displaced opportunity, dependencies, owners, and capacity logic." },
    { title: "Sequence", copy: "Smallest value- and learning-bearing path with decision points." },
    { title: "Technical choice", copy: "Option, lifecycle consequence, threshold, specialist review, and operational owner.", tone: "highlight" }
  ],
  next: { label: "SESSION 4 · COMMIT + LEARN", title: "Make the choice survivable", copy: "Carry the direction through commitment, execution change, exposure, and outcome without losing ownership or rewriting history." }
};

export default function Session3Reading(){ return <AdvancedReading data={data} />; }
