# CORE / PM placement — scenarios and answer key

**Do not show this file to the learner.** Ask the scenarios one at a time, hold
all verdicts until the end, and reveal a rationale only for scenarios they
missed. The `find-your-level` SKILL.md answer-isolation contract governs
delivery.

Each scenario maps to one phase. One point each, no partial credit.

---

## 1 · Problem Framing (PF)

**Scenario.** Activation at Noted fell 11% over six weeks. Your head of product
asks you to "get to the bottom of it" by Friday. What is your first move?

- **A.** Run a survey asking new users what stopped them from activating.
- **B.** Ship an improved onboarding tour — the first session is the obvious
  lever and you can measure the change.
- **C.** Segment the drop by cohort, channel, and platform to find where it
  concentrates.
- **D.** Write down the decision the number could actually change, along with at
  least two competing explanations, before choosing any method.

**Strongest: D.**

**Rationale.** Research begins with the decision the evidence could change. A,
B, and C are all methods selected before the decision is named. C is the most
tempting because segmentation is genuinely good practice — but a segment
analysis run before the decision is framed will produce a finding nobody can
act on.

**A wrong pick reveals:** method-first or solution-first reflexes. Phase 01 is
where that gets rebuilt.

---

## 2 · Product Judgment (PJ)

**Scenario.** Three enterprise customers have asked for automated meeting
summaries. You have no other evidence. Leadership wants your recommendation on
Monday. What do you bring?

- **A.** A recommendation to build it. Three enterprise customers asking for the
  same thing is a clear signal.
- **B.** A recommendation with your confidence stated, the alternative it
  displaces, and the observation that would reverse you.
- **C.** A neutral summary of both options, so leadership can decide with full
  information.
- **D.** A request for two more weeks to gather evidence before committing to a
  position.

**Strongest: B.**

**Rationale.** Judgment means taking a position without manufacturing certainty.
C hides your reasoning behind neutrality and pushes the judgment upward, which
is the most common failure at this level. D treats more evidence as always
better, without asking whether the decision needs it. A takes a position but
buries the uncertainty.

**A wrong pick reveals:** either false confidence (A), abdication (C), or
evidence as a delaying tactic (D).

---

## 3 · Evidence (EV)

**Scenario.** You ran a controlled test of a new onboarding flow. Activation rose
6% for the treatment group, statistically significant. What does this establish?

- **A.** The new onboarding causes higher activation for Noted users.
- **B.** Activation is now fixed, and the team can move to the next problem.
- **C.** The new flow raised activation for users inside that test's assignment,
  exposure, and measurement conditions, over that time window.
- **D.** Nothing useful. A 6% lift is too small to act on.

**Strongest: C.**

**Rationale.** An experiment estimates a causal effect only inside its own
boundaries. A generalizes past the population and window the test actually
covered, which is how a real result becomes an overclaim. D confuses effect size
with validity.

**A wrong pick reveals:** treating a result as a general truth rather than a
bounded one. Phase 03 is where that boundary gets drawn.

---

## 4 · Product Strategy (ST)

**Scenario.** Leadership asks for the Noted product strategy. Which draft is
actually usable by another team to make a trade-off without asking you?

- **A.** The binding constraint on growth, the mechanism by which one chosen bet
  relieves it, what will explicitly not be funded this year, and the evidence
  that would trigger revision.
- **B.** "Become the default AI workspace for modern teams," supported by five
  strategic initiatives.
- **C.** Three goals with named owners: grow activation 20%, ship summaries,
  improve large-workspace performance.
- **D.** A prioritized four-quarter roadmap with effort estimates and
  dependencies.

**Strongest: A.**

**Rationale.** Strategy is useful when another team can resolve a trade-off from
it. B is an aspiration. C is a goal list. D is a plan. None of them tells a
team what to give up when two good options collide.

**A wrong pick reveals:** confusing ambition, goals, or plans with a choice
about how the product wins.

---

## 5 · Technical Judgment (TJ)

**Scenario.** A platform dependency loses support in 10 weeks. Two engineers
want to migrate everything now; two want to spread the work across the quarter.
They ask you to break the tie. What do you do?

- **A.** Defer to the engineering lead. Migration sequencing is a technical
  decision and not yours to make.
- **B.** Require the full migration now. Unsupported dependencies are an
  unacceptable risk.
- **C.** Ask for a detailed architecture document from both sides before you
  decide anything.
- **D.** Own the product consequences — what breaks, for whom, and what delay
  costs — and leave implementation authority with engineering.

**Strongest: D.**

**Rationale.** The PM owns product consequences and decision quality, not
implementation authority. A gives away a decision that has real product
consequences. B claims authority the PM does not have. C converts a decision
into documentation.

**A wrong pick reveals:** an unclear boundary between product authority and
specialist authority. Phase 05 draws it.

---

## 6 · Product Delivery Systems (DS)

**Scenario.** Automated summaries are code-complete and passing tests. What is
the launch decision?

- **A.** Ship to all users. It is tested, and holding it back wastes the work.
- **B.** Treat deployment, user exposure, operational readiness, and impact
  learning as four separate decisions, each with its own control and its own
  reversal condition.
- **C.** Ship to enterprise customers only, since they are the ones who asked.
- **D.** Hold the release until marketing has a campaign ready.

**Strongest: B.**

**Rationale.** Deploying code, exposing users, being ready to operate the
feature, and learning whether it worked are four different decisions that get
collapsed into one event called "launch." C is a reasonable instinct but is
still a single undifferentiated ship decision.

**A wrong pick reveals:** launch treated as a date rather than as a sequence of
controlled exposures.

---

## 7 · Product Leadership (LD)

**Scenario.** A PM on your team brings you a recommendation on the activation
drop. The reasoning is weak — they picked a method before naming the decision.
You can see the better answer. What do you do?

- **A.** Give them your answer. The decision is time-sensitive and they will
  learn by seeing it done well.
- **B.** Approve it anyway. Autonomy matters more than getting this one decision
  right, and the cost is recoverable.
- **C.** Ask for their reasoning first, name the specific move that is missing,
  and have them redo the decision.
- **D.** Escalate to their skip-level manager so the coaching comes from the
  right place.

**Strongest: C.**

**Rationale.** Leaders develop judgment by exposing reasoning and reviewing
decisions without taking them back. A creates dependence, which is the most
common way strong leaders quietly weaken their teams. B mistakes abdication for
autonomy. D outsources a coaching moment that belongs to you.

**A wrong pick reveals:** the dependence-versus-abdication trap. Phase 07
addresses it directly.

---

## Scoring summary

| # | Phase | Strongest |
|---|-------|-----------|
| 1 | PF · Problem Framing | D |
| 2 | PJ · Product Judgment | B |
| 3 | EV · Evidence | C |
| 4 | ST · Product Strategy | A |
| 5 | TJ · Technical Judgment | D |
| 6 | DS · Product Delivery Systems | B |
| 7 | LD · Product Leadership | C |

Per-phase status and entry-point routing are defined in `SKILL.md`. Remember
that PF is never `Skip`.
