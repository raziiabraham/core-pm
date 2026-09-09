---
phase: PJ
title: Product Judgment — phase assessment
lessons:
  - PJ-01
  - PJ-02
  - PJ-03
  - PJ-04
  - PJ-05
  - PJ-06
---

> Tutor-facing file. The verdict table in Part 1 and every `→` line in Part 2 are for the tutor only. Do not show them to the learner before they have answered.

## Part 1 — Scenario

Activation fell 11% over six weeks. Activation is defined as creating a document and returning within seven days; nobody defends the definition. The decline has not been segmented by cohort, channel, or platform. Two changes shipped in the window: a revised signup flow and a new AI-suggestion prompt on the empty document state. AI-first onboarding is planned, not built. The founder authored much of the research layer and made an earlier sequencing decision that may deserve re-examination.

**Hypothetical development — labelled, not in the case.** Assume the founder proposes pulling AI-first onboarding forward into this cycle, arguing that the decline shows the first session is broken and the planned onboarding is the fix. Assume the founder wants your position by Friday. Assume engineering says the onboarding work would need the same two engineers who would otherwise do the dependency migration.

**Central move.** Take a position on the founder's proposal with thin evidence: state the choice as one of the live alternatives, separate the four inputs and mark which one carries the position, state a confidence you can defend and the observation that would move it, define what "good" would be as a threshold with floors, name what the proposal displaces and who pays, set who decides what, and review your own decision before the outcome exists.

### Interrogate

Press on the weakest link. Ask "why" at least three times. Use this wording:

1. "Your position rests on the first session being where the decline lives. Why do you believe that? The decline is unsegmented and two changes shipped. Which of your four inputs is actually carrying that belief — evidence, or the founder's read?"
2. "You said moderate confidence. Why moderate and not low? What observation available this week — the support lead's recordings, a two-day segmentation — would move it, and in which direction?"
3. "You framed this as 'onboarding now or onboarding later.' Why is that the choice? What does pulling it forward displace this cycle, who loses it, and why did that person not appear in your position?"

### Held / partly held / did not hold

| Verdict | What it looks like in the learner's answer |
|---|---|
| **Held** | The choice is one of the live alternatives: pull onboarding forward, make no product change, run a bounded investigation first, or look outside the first session. The four inputs are separated and the one carrying the position is marked; the founder's proposal is treated as strategic context and accountability, not as evidence. The founder's earlier sequencing decision is named as something to re-examine, not as authority. "Good" is a threshold — amount, population, horizon — with at least one floor protecting another population, and the learner says the inherited definition would have to be defended first. The displaced option is named with an owner: the migration engineers, against a ten-week clock. The decision architecture separates product timing (PM) from feasibility and estimate (engineering lead), and notes the migration's expiry. The pre-outcome review splits what is uncollected (segmentation, recordings) from what is unknown, and confidence matches the evidence held. The learner commits and names the update condition. |
| **Partly held** | A position is taken, but one link fails: confidence is merged into the position ("we need more data"); "planned" is treated as ready to build; "good" stays a direction; the displaced option or its owner is missing; or "wait" is chosen without pricing the wait against the ten-week clock. When pressed, the learner repairs it. |
| **Did not hold** | No position ("it depends"). Or high confidence on an unsegmented aggregate. Or the founder's authority is treated as correctness. Or the learner cannot name any observation that would change their mind. |

## Part 2 — Boundary questions

One open question per lesson. Do not accept a restatement of the model as an answer.

**PJ-01.** Calibration keeps position and confidence separate. Where does calibration stop helping, and what can low confidence never license?
→ Low confidence does not license inaction: when the option set is shrinking, waiting is a position with a cost and must be priced. Confidence labels mean nothing until they are checked against outcomes over a run of decisions. And a well-labelled confidence does not substitute for expertise you do not hold.

**PJ-02.** A definition of good needs a threshold. When is a numeric bar the wrong thing to write, and what do you write instead?
→ For a capability nobody has used before, an invented number gets defended. Name the bar-setting moment instead: what you will observe, when, and what converts the observation into a threshold. Also: a bar set too tight too early kills learning, and a threshold with floors is not an experiment success criterion — that needs baseline, sample size, and validity work.

**PJ-03.** When does a trade-off record cost more than it is worth, and when does it stop being analysis?
→ For cheap, reversible, low-consequence choices the record costs more than the decision. And a trade-off record written after the decision is a defence, not analysis — label it as a rationale and keep it out of the evidence base.

**PJ-04.** Decision architecture sets rigor, roles, and review. What can it not do?
→ It is not a permission system: escalating a decision does not transfer the consequence. Process cannot rescue a badly framed decision — a topic with more rigor is a more expensive topic. And over-architecture is a real, usually unmeasured cost.

**PJ-05.** Grade the process, not the result. When is the outcome the better signal?
→ For a single decision the outcome is weak evidence; judge the reasoning. For a run of decisions, outcomes are the calibration signal and beat well-written reasoning. Also: a pre-outcome review hedged so that every result confirms it is insurance, not analysis.

**PJ-06.** Delegation readiness demands portability. When should you deliberately not make the work portable before handing it over?
→ When the point is for the other person to form the frame — delegate the framing when consequence is small or reversible, and say the ambiguity is the assignment. And a portable contract does not make delegation safe if the person lacks the skill; it only makes it possible.

## Part 3 — Recall

Draw 5 to 8 multiple-choice questions from these files. One at a time, lettered options, correct option kept private.

- `lessons/02-product-judgment/pj-01-calibrated-product-judgment/checks.json`
- `lessons/02-product-judgment/pj-02-define-good/checks.json`
- `lessons/02-product-judgment/pj-03-trade-offs-and-opportunity-cost/checks.json`
- `lessons/02-product-judgment/pj-04-decision-architecture/checks.json`
- `lessons/02-product-judgment/pj-05-decision-quality-under-uncertainty/checks.json`
- `lessons/02-product-judgment/pj-06-delegation-readiness/checks.json`

Spread across all six lessons, and take extra questions from the lessons whose moves Part 1 exposed as weak (for example, more from PJ-03 if the displaced option went unnamed, or more from PJ-01 if confidence was merged into the position).
