---
phase: TJ
title: Technical Judgment — phase assessment
lessons:
  - TJ-01
  - TJ-02
  - TJ-03
  - TJ-04
  - TJ-05
---

> Tutor-facing file. The verdict table in Part 1 and every `→` line in Part 2 are for the tutor only. Do not show them to the learner before they have answered.

## Part 1 — Scenario

P95 response time rose 34% for large workspaces, meaning more than 500 documents — about 4% of workspaces, holding a disproportionate share of paid seats. No support ticket has mentioned speed; the signal came from monitoring. Noted's AI is embedded in the document surface, and a new AI-suggestion prompt on the empty document state shipped in the last six weeks. Small teams run shared workspaces. The engineering lead owns repository workflow and technical standards, and some planning assumptions have not been checked against the code. The case does not state a mechanism for the slowdown.

**Hypothetical development — labelled, not in the case.** Assume the engineering lead reports that the slowdown traces to the AI-suggestion call, which reads workspace context before it suggests, and that the cost grows with document count. Assume engineering proposes a fix: cap the context the AI may read at the 200 most recent documents, for every workspace, and ship it this week as "an implementation detail."

**Central move.** Separate product authority from specialist authority in this proposal and state the decision you own: draw the boundary, name the currencies that move and who pays, decide whether the cap changes a promise to the user, write the threshold that would govern it, and write the questions for engineering that carry decisions — without choosing the technique.

### Interrogate

Press on the weakest link. Ask "why" at least three times. Use this wording:

1. "You accepted the cap as an implementation detail. Why? If two implementations let you make different promises about what the suggestion knows, whose decision is that? What promise changes for a user with 800 documents?"
2. "Your trade-off says the cost is engineering time. Why is that the cost? Which currency degrades for which user when context is capped — and who notices, given that no support ticket has mentioned speed?"
3. "You said the cap should apply to every workspace. Why not only above 500 documents? What would you need to know about how the setting works to answer that, and is that question yours or engineering's?"

### Held / partly held / did not hold

| Verdict | What it looks like in the learner's answer |
|---|---|
| **Held** | The learner names the boundary — user to AI-suggestion call — and treats the mechanism as engineering's hypothesis, not established, because the case gives no mechanism. They state that the cap changes what the suggestion can know, so it is a product promise and the choice is theirs to be part of. The transfer is recorded: latency improves for the 4%; freshness or usefulness of the suggestion degrades for large workspaces, where paid seats concentrate; the bill lands silently on users who have never filed a ticket. They ask whose permissions apply when the AI reads workspace context in a shared workspace, and refuse to spend that currency without an answer. A threshold has all four parts — an observable such as P95 or a suggestion-quality signal, a level, a date, an action. Questions to engineering carry decisions: can the cap be set per workspace without a release; does event data separate capped from uncapped sessions; what does a user see if the suggestion is slow or never arrives. The learner does not re-estimate, does not pick caching or indexing, and commits: accept a bounded version, decline, or instrument first, with the evidence that would flip it. |
| **Partly held** | The learner sees the product decision but then argues technique; or names currencies without who pays and when; or writes a threshold with no action; or treats the attribution as fact. When pressed, the learner repairs it. |
| **Did not hold** | The proposal is waved through as engineering's call. Or the learner takes over the design and specifies how to build it. Or revenue concentration is treated as evidence of harm. Or no degrading currency can be named. |

## Part 2 — Boundary questions

One open question per lesson. Do not accept a restatement of the model as an answer.

**TJ-01.** You own consequence, not mechanism. When does the mechanism become your decision, and where must your sketch stop?
→ When two implementations would let you make different promises to the user — then the choice between them is yours to be part of. If they allow the same promise, it is not. And the sketch stops at the boundary: naming the cache, database, or queue is doing someone else's job with less information.

**TJ-02.** Every technical choice is a transfer between currencies. When is a change not a trade-off at all?
→ When it is a correction — a defect removed, a query scanning too much, a step doing nothing. If the only cost you can name is engineering time, you are probably looking at a correction. Calling it a trade-off hides waste behind the language of balance.

**TJ-03.** Silent work is funded by thresholds. Where do thresholds fail, and what replaces them?
→ On cliffs: security, legal, or data-integrity losses that are unbounded or unrecoverable, where the first observable is the breach. Commit those by date, not eligible for reprioritisation. But an end-of-support date after which patches stop and nothing breaks immediately is a curve — calling every risk a cliff means being talked out of all of them.

**TJ-04.** The repository shows the cost of change. What does it not tell you, and what must you not convert a read into?
→ It does not tell you whether the change is right, and it does not produce an estimate — "this looks like two weeks" is specialist output. Do not use structure to grade engineers. And no single surface is reliable alone: a tidy repo with a slow review queue is expensive to change.

**TJ-05.** An AI feature has five boundaries and a quality bar. What does passing the bar not prove, and what limits the confidence any evaluation can carry?
→ Evaluation is not value: usage can rise while lost decisions after meetings do not change. Offline evaluation covers only the distribution you sampled, and meeting type is not captured, so the sample cannot be stratified by it. The bar is set from consequence and reversibility, not from how the output feels.

## Part 3 — Recall

Draw 5 to 8 multiple-choice questions from these files. One at a time, lettered options, correct option kept private.

- `lessons/05-technical-judgment/tj-01-technical-abstraction-without-ignorance/checks.json`
- `lessons/05-technical-judgment/tj-02-system-boundaries-and-trade-offs/checks.json`
- `lessons/05-technical-judgment/tj-03-technical-portfolio-and-thresholds/checks.json`
- `lessons/05-technical-judgment/tj-04-repository-and-delivery-system-literacy/checks.json`
- `lessons/05-technical-judgment/tj-05-ai-system-judgment/checks.json`

Spread across all five lessons, and take extra questions from the lessons whose moves Part 1 exposed as weak (for example, more from TJ-01 if the cap was accepted as a detail, or more from TJ-05 if the permission question never came up).
