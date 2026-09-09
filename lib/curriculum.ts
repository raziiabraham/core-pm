export type CurriculumLesson = {
  id: string;
  slug: string;
  title: string;
  minutes: number;
  prerequisites: string[];
  premise: string;
  artifact: string;
};

export type CurriculumPhase = {
  id: string;
  number: string;
  title: string;
  promise: string;
  domains: string[];
  lessons: CurriculumLesson[];
};

const lesson = (id: string, title: string, minutes: number, prerequisites: string[], premise: string, artifact: string): CurriculumLesson => ({
  id,
  slug: `${id.toLowerCase()}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
  title,
  minutes,
  prerequisites,
  premise,
  artifact,
});

export const curriculum: CurriculumPhase[] = [
  {
    id: "PF", number: "01", title: "Problem Framing", promise: "Turn noise, requests, and symptoms into a bounded decision worth investigating.",
    domains: ["Decision framing", "User insight", "Opportunity assessment"],
    lessons: [
      lesson("PF-01", "Decision before method", 22, [], "Research begins with the decision the evidence could change—not a favorite method or a preselected answer.", "Decision brief"),
      lesson("PF-02", "Problem, mechanism, alternatives", 26, ["PF-01"], "A symptom becomes useful only when you can name a plausible mechanism and competing explanations.", "Problem mechanism map"),
      lesson("PF-03", "Evidence boundaries", 24, ["PF-01"], "Every claim needs a visible population, time window, source, and limit before it can carry product weight.", "Evidence boundary note"),
      lesson("PF-04", "Right-sized framing", 24, ["PF-01", "PF-02"], "The frame should be no broader than the next consequential and reversible choice requires.", "Framing scale check"),
      lesson("PF-05", "User and context boundary", 27, ["PF-02"], "A useful audience is a behavior-and-context boundary, not a demographic label or an imagined average user.", "Audience boundary"),
      lesson("PF-06", "Opportunity worth solving", 30, ["PF-02", "PF-04", "PF-05"], "Opportunity earns priority through consequence, frequency, ownership, alternatives, and strategic fit—not request volume alone.", "Opportunity case"),
    ],
  },
  {
    id: "PJ", number: "02", title: "Product Judgment", promise: "Take a position without manufacturing certainty, then make the reasoning inspectable.",
    domains: ["Calibrated judgment", "Trade-off reasoning", "Decision architecture"],
    lessons: [
      lesson("PJ-01", "Calibrated product judgment", 28, ["PF-03", "PF-05"], "Judgment integrates evidence, accumulated exposure, strategic context, and accountability while preserving uncertainty.", "Calibrated product view"),
      lesson("PJ-02", "Define good", 24, ["PF-02", "PF-05"], "Teams cannot trade off intelligently until the desired change and its quality bar are explicit.", "Definition of good"),
      lesson("PJ-03", "Trade-offs and opportunity cost", 29, ["PF-04", "PF-06", "PJ-02"], "A choice is only real when the displaced option, resource, risk, and future flexibility are visible.", "Trade-off record"),
      lesson("PJ-04", "Decision architecture", 27, ["PF-01", "PF-04"], "Impact, reversibility, uncertainty, timing, and expertise should determine rigor, participation, and review depth.", "Decision architecture"),
      lesson("PJ-05", "Decision quality under uncertainty", 28, ["PJ-01", "PJ-04"], "Judge the reasoning from what was knowable at the time, then separate process quality from luck and outcome.", "Pre-outcome decision review"),
      lesson("PJ-06", "Delegation readiness", 25, ["PJ-02", "PJ-04", "PJ-05"], "Work is ready to delegate when intent, constraints, interfaces, evidence, and escalation conditions are portable.", "Delegation contract"),
    ],
  },
  {
    id: "EV", number: "03", title: "Evidence", promise: "Choose evidence that can answer the claim, then update belief without overclaiming.",
    domains: ["Qualitative research", "Measurement design", "Causal inference"],
    lessons: [
      lesson("EV-01", "Evidence fit and sufficiency", 28, ["PF-01", "PF-04"], "Evidence quality depends on whether the method can answer the claim and whether the decision needs more certainty.", "Evidence plan"),
      lesson("EV-02", "Qualitative evidence and synthesis", 34, ["PF-03", "PF-05", "EV-01"], "Qualitative work reveals mechanism and context when observations stay separate from interpretation and contradiction survives synthesis.", "Insight synthesis"),
      lesson("EV-03", "Measurement models and metrics", 32, ["PF-02", "PJ-02", "EV-01"], "A metric is meaningful only when its population, event, window, aggregation, and connection to value are explicit.", "Metric definition"),
      lesson("EV-04", "Instrumentation and data contracts", 30, ["EV-03"], "Instrumentation is a product contract about what happened, to whom, when, and with which identity—not an analytics afterthought.", "Tracking contract"),
      lesson("EV-05", "Data reasoning and SQL supervision", 38, ["EV-03", "EV-04"], "PMs need enough data literacy to specify the question, inspect joins and denominators, and challenge plausible but wrong output.", "Analysis review sheet"),
      lesson("EV-06", "Experiment and causal judgment", 42, ["PJ-05", "EV-03", "EV-04", "EV-05"], "Experiments estimate causal effects only inside their assignment, exposure, measurement, and inference boundaries.", "Experiment decision memo"),
      lesson("EV-07", "Triangulation and belief updating", 31, ["EV-01", "EV-02", "EV-05", "EV-06"], "Conflicting evidence should change the model of the world, not be averaged into false consensus.", "Belief update ledger"),
    ],
  },
  {
    id: "ST", number: "04", title: "Product Strategy", promise: "Convert evidence into a coherent choice about how the product will win—and what it will not do.",
    domains: ["Strategic diagnosis", "Positioning", "Portfolio and sequencing"],
    lessons: [
      lesson("ST-01", "Strategic diagnosis", 31, ["PF-02", "PF-03", "EV-07"], "Strategy starts by identifying the constraint or dynamic that matters most, not by writing an aspiration.", "Strategic diagnosis"),
      lesson("ST-02", "Product-market hypothesis system", 35, ["PF-05", "EV-03", "EV-07", "ST-01"], "Audience, problem, value, acquisition, retention, and economics are linked hypotheses that can fail independently.", "Product-market hypothesis map"),
      lesson("ST-03", "Advantage and positioning choice", 32, ["PJ-03", "ST-01", "ST-02"], "Positioning becomes strategic when it commits to an audience, alternative, valued difference, and capability the company can sustain.", "Positioning choice"),
      lesson("ST-04", "Product bets and portfolio", 34, ["PJ-03", "ST-02", "ST-03"], "A healthy portfolio funds feature, growth, scale, risk, and enabling work according to the constraint—not politics or visibility.", "Product bet portfolio"),
      lesson("ST-05", "Strategic sequencing and options", 29, ["PJ-04", "PJ-05", "ST-04"], "Sequence should retire the most decision-relevant uncertainty while preserving future options.", "Strategic sequence"),
      lesson("ST-06", "Strategy communication and revision", 28, ["ST-01", "ST-02", "ST-03", "ST-04", "ST-05"], "Strategy is useful when another team can make a trade-off from it and knows which evidence should trigger revision.", "Strategy narrative"),
    ],
  },
  {
    id: "TJ", number: "05", title: "Technical Judgment", promise: "Reason about systems, build choices, and AI without pretending to own specialist expertise.",
    domains: ["Systems reasoning", "Build trade-offs", "AI system evaluation"],
    lessons: [
      lesson("TJ-01", "Technical abstraction without ignorance", 30, ["PF-02", "PJ-02"], "A PM should understand boundaries, failure modes, constraints, and consequences deeply enough to ask better product questions.", "System boundary sketch"),
      lesson("TJ-02", "System boundaries and trade-offs", 34, ["PJ-03", "TJ-01"], "Technical choices move cost, latency, reliability, security, and ownership across system boundaries rather than removing them.", "Technical trade-off map"),
      lesson("TJ-03", "Technical portfolio and thresholds", 31, ["ST-04", "ST-05", "TJ-01"], "Scale, risk, debt, and enabling work should be funded against explicit consequence thresholds.", "Technical portfolio"),
      lesson("TJ-04", "Repository and delivery-system literacy", 36, ["TJ-01"], "Repository structure, tests, release paths, observability, and ownership reveal the real cost of changing a product.", "Repository orientation note"),
      lesson("TJ-05", "AI system judgment", 40, ["PJ-06", "EV-01", "EV-05", "TJ-01"], "AI output must be evaluated as a probabilistic system with context, evaluation, human authority, failure, and cost boundaries.", "AI system decision record"),
    ],
  },
  {
    id: "DS", number: "06", title: "Product Delivery Systems", promise: "Carry intent through slicing, commitment, exposure, adaptation, and learning.",
    domains: ["Delivery systems", "Staged exposure", "Operational learning"],
    lessons: [
      lesson("DS-01", "From evidence to commitment", 28, ["PJ-02", "PJ-05", "EV-07", "ST-06"], "Commitment begins when product value and effort conviction are strong enough to displace real alternatives.", "Commitment brief"),
      lesson("DS-02", "Sequence, slice, and dependencies", 35, ["ST-05", "TJ-02", "TJ-03", "DS-01"], "Smaller sequential delivery should create evidence, option value, and safe integration—not merely smaller tickets.", "Delivery sequence"),
      lesson("DS-03", "Delivery system design", 34, ["TJ-04", "DS-01", "DS-02"], "A delivery system coordinates decisions, work, integration, and learning across explicit ownership and interfaces.", "Delivery system map"),
      lesson("DS-04", "Review, adaptation, and escalation", 30, ["PJ-04", "DS-03"], "Review should improve the work and expose risk while preserving ownership; escalation should name the exact decision needed.", "Review and escalation protocol"),
      lesson("DS-05", "Launch, exposure, and learning", 36, ["EV-04", "EV-06", "TJ-05", "DS-03", "DS-04"], "Deployment, user exposure, operational readiness, and impact learning are separate decisions with separate controls.", "Staged launch plan"),
      lesson("DS-06", "System improvement", 29, ["DS-05"], "Retrospectives matter when they change an operating rule, interface, threshold, or capability—not when they only record sentiment.", "System change record"),
    ],
  },
  {
    id: "LD", number: "07", title: "Product Leadership", promise: "Create direction, autonomy, and accountability that improve judgment beyond one PM.",
    domains: ["Direction setting", "Decision rights", "Judgment coaching"],
    lessons: [
      lesson("LD-01", "Direction that enables decisions", 29, ["ST-06"], "Direction succeeds when people can use it to resolve a real trade-off without asking the leader to decide again.", "Decision-enabling direction"),
      lesson("LD-02", "Decision rights and progressive autonomy", 32, ["PJ-04", "PJ-06"], "Autonomy grows when authority, consequence, evidence standards, and escalation boundaries are explicit.", "Decision-rights map"),
      lesson("LD-03", "Developing judgment in others", 33, ["PJ-05", "LD-02"], "Leaders develop judgment by exposing reasoning, asking calibrated questions, and reviewing decisions without taking them back.", "Judgment coaching plan"),
      lesson("LD-04", "Operating systems for good product work", 34, ["DS-03", "DS-06"], "Cadence, artifacts, forums, and information flow should make the next important decision easier—not add ritual.", "Product operating system"),
      lesson("LD-05", "Team capability architecture", 31, ["LD-03", "LD-04"], "A team needs a portfolio of capabilities, not identical PMs; gaps should be addressed through development, hiring, or interfaces.", "Capability portfolio"),
      lesson("LD-06", "Intervention and accountability", 30, ["LD-02", "LD-03"], "Intervention should be proportionate, temporary, explicit about the failure mode, and designed to return ownership.", "Intervention contract"),
      lesson("LD-07", "Executive and cross-functional leadership", 35, ["LD-01", "LD-02", "DS-04"], "Influence rises when context, recommendation, trade-offs, confidence, dissent, and the exact ask are clear.", "Executive decision memo"),
    ],
  },
];

export const allLessons = curriculum.flatMap((phase) => phase.lessons.map((item) => ({ ...item, phase })));
export const totalMinutes = allLessons.reduce((sum, item) => sum + item.minutes, 0);

export const learningPaths = [
  { id: "complete", title: "Complete foundation", description: "All 43 lessons in dependency order.", lessons: allLessons.map((item) => item.id), hours: Math.round(totalMinutes / 60) },
  { id: "field", title: "Decision field path", description: "Twelve applied lessons carrying one consequential decision from first signal to outcome.", lessons: ["PF-01", "PJ-01", "PF-06", "EV-01", "EV-02", "EV-07", "ST-01", "ST-04", "TJ-05", "DS-01", "DS-04", "DS-05"], hours: 6 },
  { id: "technical", title: "Technical + AI judgment", description: "For PMs working closely with engineering and AI systems.", lessons: ["PF-01", "PJ-03", "PJ-06", "EV-03", "EV-04", "EV-05", "TJ-01", "TJ-02", "TJ-03", "TJ-04", "TJ-05", "DS-02", "DS-05"], hours: 7 },
  { id: "leadership", title: "Product leadership", description: "For group PMs and product leaders scaling judgment through others.", lessons: ["PJ-04", "PJ-05", "PJ-06", "ST-04", "ST-06", "DS-03", "DS-04", "DS-06", "LD-01", "LD-02", "LD-03", "LD-04", "LD-05", "LD-06", "LD-07"], hours: 8 },
];

export function lessonBySlug(slug: string) {
  return allLessons.find((item) => item.slug === slug);
}

export function lessonById(id: string) {
  return allLessons.find((item) => item.id === id);
}
