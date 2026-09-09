---
phase: DS
title: Product Delivery Systems — phase assessment
lessons:
  - DS-01
  - DS-02
  - DS-03
  - DS-04
  - DS-05
  - DS-06
---

> Tutor-facing file. The verdict table in Part 1 and every `→` line in Part 2 are for the tutor only. Do not show them to the learner before they have answered.

## Part 1 — Scenario

A private draft-review workflow is planned in the case; the public publishing path is live. Small teams are where most paid conversion happens today. The support lead is closest to what customers actually said. The team has a disciplined delivery system and a much thinner evidence system. Actor identity is missing for about 18% of events.

**Hypothetical development — labelled, not in the case.** Assume the draft-review workflow was built over the last cycle and is now code-complete, deployed to production behind a closed flag; nobody outside engineering has used it. Assume no commitment brief was ever written for it — work started because capacity opened. Assume the founder wants it announced to every paid workspace next Monday, with a post on the public publishing path, and the support lead has not yet seen the feature.

**Central move.** Design the exposure sequence for this completed feature: separate the four decisions inside "launch" with their controls, owners, and reversals; build an exposure ladder with observation-based gates; set operational readiness before the first exposure; write the impact-learning plan; and state what the missing commitment brief does to the plan and to any claim you will later make.

### Interrogate

Press on the weakest link. Ask "why" at least three times. Use this wording:

1. "Your first stage is all paid workspaces, silent. Why is that the first rung? What can a person who has received a review request un-see, and who pays if the feature is wrong — the author or the reviewer?"
2. "You set the exit gate at two weeks. Why a duration? What observation would tell you stage one is safe to leave, and can you see it with actor identity missing for about 18% of events?"
3. "You said the announcement is the founder's call. Why? If the announcement makes exposure irreversible, which of the four decisions is it, who owns that decision in your plan, and what does the missing commitment brief mean for the impact claim you will make afterwards?"

### Held / partly held / did not hold

| Verdict | What it looks like in the learner's answer |
|---|---|
| **Held** | The four decisions are separated — deployment, operational readiness, exposure, impact learning — each with its own control, owner, and reversal, and no single owner holds all four. The learner confirms the flag can move without a release, or records the gap plainly. The ladder has at least three stages, each setting who, how much, what depth, and how visible, with exit gates that are observations, not durations. Readiness precedes stage one: the support lead sees the feature and knows what they may stop; the kill switch has an owner; in-flight review requests have a stated fate when it is pulled. The learning plan names the measure, an exposed and unexposed comparison, a stable window after the dial stops moving, a readout date, and the limit the 18% identity gap places on it. The announcement is treated as the visibility axis of exposure, close to irreversible, and placed last. The missing DS-01 brief is named as a defect: value conviction and displacement are unknown, so there is no claim for impact learning to test — the learner either writes the brief now or labels the launch as exploration. If the founder's Monday date needs a decision above the learner, the escalation has alternatives, a date, a default, and a recommendation; if it is inside the learner's authority, they decide it in writing. |
| **Partly held** | A real ladder exists but exit gates are durations; one owner holds all four decisions; the missing commitment is ignored; or the measurement window overlaps the stages that move the dial. When pressed, the learner repairs it. |
| **Did not hold** | One launch date. Deployment and exposure are the same act. The announcement goes first. "Watch the dashboard for two weeks" is the learning plan. Or the learner refuses to design anything because no brief exists, without saying what to do instead. |

## Part 2 — Boundary questions

One open question per lesson. Do not accept a restatement of the model as an answer.

**DS-01.** Commitment needs value and effort conviction. When is value conviction the wrong frame, and when is the whole model too heavy?
→ For forced work — a dependency losing support, a legal or security obligation — there is no user outcome to argue; the frame is consequence exposure over time. And a small, reversible, two-day change does not need a displacement analysis. Also: strong effort conviction is not an accurate estimate; it means knowing which parts are unknown.

**DS-02.** Slicing orders work by which uncertainty is expensive to learn late. What can it not do, and where is its floor?
→ It does not tell you whether a slice is small enough to review. Some moments are indivisible — a cutover, a schema change with no compatible middle, a security patch — and pretending otherwise creates dual-running risk. Slicing creates evidence only if someone looks at each slice with a question before the next starts. And it cannot fix an unsound commitment.

**DS-03.** A delivery system carries four flows with owners and interfaces. When is naming all four wrong, and what can the system not repair?
→ A three-person team does not need four named owners; the test is whether an open decision has an owner and a date. The system cannot repair an unsound commitment — it builds the wrong thing efficiently. And a named learning owner cannot create measurement capability that does not exist; that is a capability gap, not an ownership gap.

**DS-04.** Escalation names the exact decision. When is escalating the wrong move, and what looks like escalation but is not?
→ When the decision sits inside the owner's authority — escalating teaches the team to stop deciding. Notification — a known, accepted risk restated on a schedule — is not escalation and must be labelled, or real escalations lose force. And if no one anywhere holds the decision, escalation cannot create an owner; that is a DS-03 gap.

**DS-05.** Launch is four decisions with separate controls. When does the separation not earn its cost, and what cannot be staged?
→ Flags, runbooks, and sampling are machinery with build and maintenance cost; long-lived flags cause their own outages. The separation earns its cost when exposure is hard to reverse, the failure is silent, or the consequence lands on someone who did not choose the risk. Some exposure is all-or-nothing — pricing, a legal notice, a public API — and a fake ladder is worse than an admitted single step.

**DS-06.** A retrospective produces a system change. When should it produce nothing, and what kind of failure can a rule not fix?
→ When the change would not have prevented the problem, or the condition will not recur — record the incident, change nothing. And a capability failure: a rule asking for more care where nobody has the skill will be followed sincerely and fail. Ask whether anyone can comply before writing it.

## Part 3 — Recall

Draw 5 to 8 multiple-choice questions from these files. One at a time, lettered options, correct option kept private.

- `lessons/06-product-delivery-systems/ds-01-from-evidence-to-commitment/checks.json`
- `lessons/06-product-delivery-systems/ds-02-sequence-slice-and-dependencies/checks.json`
- `lessons/06-product-delivery-systems/ds-03-delivery-system-design/checks.json`
- `lessons/06-product-delivery-systems/ds-04-review-adaptation-and-escalation/checks.json`
- `lessons/06-product-delivery-systems/ds-05-launch-exposure-and-learning/checks.json`
- `lessons/06-product-delivery-systems/ds-06-system-improvement/checks.json`

Spread across all six lessons, and take extra questions from the lessons whose moves Part 1 exposed as weak (for example, more from DS-05 if exit gates were durations, or more from DS-01 if the missing commitment was ignored).
