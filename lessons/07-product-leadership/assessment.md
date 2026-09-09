---
phase: LD
title: Product Leadership — phase assessment
lessons:
  - LD-01
  - LD-02
  - LD-03
  - LD-04
  - LD-05
  - LD-06
  - LD-07
---

> Tutor-facing file. The verdict table in Part 1 and every `→` line in Part 2 are for the tutor only. Do not show them to the learner before they have answered.

## Part 1 — Scenario

Activation fell 11% over six weeks. It is defined as creating a document and returning within seven days; nobody defends the definition. The decline is unsegmented. Two changes shipped in the window: a revised signup flow and a new AI-suggestion prompt on the empty document state. Actor identity is missing for about 18% of events. The support lead holds recordings of customer conversations. The engineering lead owns repository workflow and technical standards.

**Standing condition from this phase's lessons — not in the case.** Noted has funded two PM hires; the first started about three weeks after the phase began, the second about ten weeks after.

**Hypothetical development — labelled, not in the case.** Assume the second hire has been in seat for two weeks. Under your rights map they hold the activation decision at level 3: decide after named consultation with the engineering lead. They bring you this: "Activation fell 11% since the new signup flow shipped. I consulted the engineering lead; reverting the signup flow is about a week of work. I am reverting it unless you object by Thursday." They have not segmented the decline, have not mentioned the AI-suggestion prompt that shipped in the same window, and have not questioned the inherited definition.

**Central move.** Coach this PM so the gap becomes visible to them, without taking the decision — and decide whether the direction, the rights map, or the operating system caused this before you treat it as the person's failure.

### Interrogate

Press on the weakest link. Ask "why" at least three times. Use this wording:

1. "Your first question was 'Have you considered the AI prompt that shipped in the same window?' Why is that a question and not your verdict with a question mark? What question would let them find the second change themselves?"
2. "You said the call stays with them. Then you wrote 'bring the segmentation back to me and we will decide.' Why does the decision not move to you in that sentence? Which level are you actually operating at?"
3. "You treated this as their weak reasoning. Why is it theirs? Your rights map put activation at level 3 with consultation only from engineering and no evidence standard. Would a capable person, given that map, have hit the same wall — and if so, what do you fix?"

### Held / partly held / did not hold

| Verdict | What it looks like in the learner's answer |
|---|---|
| **Held** | The learner names one weakest exposure — evidence (attribution from an unsegmented aggregate when two changes shipped) or alternatives (revert is the only option on the table) — not "the whole thing is thin." They write three questions, verbatim, that the PM can answer from what they hold: for example, "Walk me through everything that shipped in that six-week window, and who each change reached"; "If the signup flow were the cause, what would the decline look like split by cohort and channel — and what if it were not?"; "What is the part of this you are least sure about?" None is a verdict in question form. They state the authority level they are operating at and keep the call at level 3; if they give their own view, they label it as a read, not an instruction; if they take the decision back, they say so in plain words with the reason. They run the structural test and find the map itself is weak: level 3 named only engineering as consultation, so the support lead's recordings had no route, and no evidence standard was written for this class — they fix the rights map and the routing rather than the person. One instance is treated as data, not a pattern; any intervention is rung 1 or 2. They check whether the direction says anything about reverting shipped changes versus investigating first. They do not write an executive memo, because the decision is inside the team. They decide whether Thursday leaves time to coach, and if it does not, they ask the question, give the answer, and label both. |
| **Partly held** | The questions are mostly open but one carries a verdict; the call stays with the PM in words but the plan routes it back; the structural gap is found but the learner still intervenes at rung 4; or the learner coaches toward a Thursday deadline without deciding whether time allows it. When pressed, the learner repairs it. |
| **Did not hold** | The learner gives the answer — "do not revert, segment first" — and calls it coaching. Or approves the revert. Or treats one instance as a pattern and intervenes at rung 4 or 5. Or escalates it to the founder in a memo. |

## Part 2 — Boundary questions

One open question per lesson. Do not accept a restatement of the model as an answer.

**LD-01.** Direction resolves trade-offs without the leader. Which decisions should still come to you, and how does over-specified direction fail?
→ Direction resolves the recurring class, not the singular case: a novel case, a one-way consequence, or a conflict between two boundaries the direction set are the residue. Over-specified direction resolves cases that should escalate — "always prefer paid-seat retention" will authorise skipping a security migration. Write the class not covered in the same breath.

**LD-02.** A decision right is four statements. When can a right not be granted, and what makes a rights map wrong over time?
→ When the person cannot see or carry the consequence — granting authority there builds an uncorrected habit; change what they can see, or place them at level 3 with whoever carries it. A map expires when a class becomes one-way — a migration starts, a commitment reaches a customer — so write the voiding condition. And you cannot delegate specialist authority you do not hold.

**LD-03.** Coaching exposes the reasoning and leaves the decision. When is coaching the wrong instrument?
→ When time has run out — ask the question, give the answer, label both. When the gap is information you hold — give it, then ask. When the problem is will, not capability — that is LD-06. And coaching is slower per decision; it pays only when the class recurs.

**LD-04.** An operating system justifies each element by a decision it disposes of. What can it not fix, and where are its floor and ceiling?
→ It cannot fix a direction or decision-rights problem — a new forum only gives the escalation a room and six people's time. A four-person team does not need three forums; a single weekly conversation fails at twelve people. Write the size band each element was designed for. Some ritual is legitimate without a decision — keep it, but do not count it as decision infrastructure.

**LD-05.** Capabilities are derived from decisions and mapped by depth. What is the map relative to, and what can development not do?
→ It is relative to a strategy and expires with it — re-derive, do not re-score. Development needs a real decision with a real consequence to practise on; reading and shadowing produce recognition and stall. And a map is a hypothesis on thin evidence that hardens into a label — date it, record the basis, write `<unknown>` where you have not seen the work.

**LD-06.** Intervention is a temporary, explicit change in rights. When is it the wrong instrument, and what are emergencies exempt from?
→ When the cause is structural — a capable person with this direction, these rights, this operating system, and this evidence would have hit the same wall. Check LD-01, LD-02, LD-04, LD-05 first. Emergencies are exempt from proportion, not honesty: act, then separate the emergency action from any judgment of the person. Three interventions on three people in one class means the class is the problem.

**LD-07.** An executive memo leads with the position and names the ask. When is the memo the wrong instrument?
→ When the decision is yours — would you have written it if you were confident? If not, you want cover. When trust is low or the topic is political — talk first, then write what was decided. When decision rights are unclear — that is LD-02, and writing quality cannot substitute. And attention does not refill: a memo every week trains the reader to skim.

## Part 3 — Recall

Draw 5 to 8 multiple-choice questions from these files. One at a time, lettered options, correct option kept private.

- `lessons/07-product-leadership/ld-01-direction-that-enables-decisions/checks.json`
- `lessons/07-product-leadership/ld-02-decision-rights-and-progressive-autonomy/checks.json`
- `lessons/07-product-leadership/ld-03-developing-judgment-in-others/checks.json`
- `lessons/07-product-leadership/ld-04-operating-systems-for-good-product-work/checks.json`
- `lessons/07-product-leadership/ld-05-team-capability-architecture/checks.json`
- `lessons/07-product-leadership/ld-06-intervention-and-accountability/checks.json`
- `lessons/07-product-leadership/ld-07-executive-and-cross-functional-leadership/checks.json`

Spread across all seven lessons, and take extra questions from the lessons whose moves Part 1 exposed as weak (for example, more from LD-03 if a question carried a verdict, or more from LD-02 and LD-06 if the structural test was skipped).
