# CORE / PM placement — scenarios and answer key

**Do not show this file to the learner.** Ask the scenarios one at a time. Hold
every verdict until the end. Reveal a rationale only for scenarios they got
wrong. The answer-isolation contract in `find-your-level/SKILL.md` governs how
you deliver this.

There are 14 scenarios: two for each of the seven phases. One point each. No
partial credit.

Ask them in phase order. Inside a phase, ask the first scenario before the
second.

---

## 1 · Problem Framing (PF) — first scenario

**Scenario.** Activation at Noted fell 11% in six weeks. Your head of product
asks you to find out why, by Friday. What do you do first?

- **A.** Send a survey to new users. Ask what stopped them from activating.
- **B.** Ship a better onboarding tour. The first session is the obvious place
  to look, and you can measure the change.
- **C.** Split the drop by cohort, channel, and platform. Find where the drop is
  concentrated.
- **D.** Write down the decision this number could change. Add at least two
  competing explanations. Choose a method only after that.

**Strongest: D.**

**Rationale.** Research starts with the decision the evidence could change. A,
B, and C all pick a method before naming the decision. C is the most tempting,
because splitting the data is genuinely good practice. But a segment analysis
run before the decision is framed produces a finding nobody can act on.

**A wrong pick reveals:** a method-first or solution-first reflex. Phase 01
rebuilds that.

---

## 2 · Problem Framing (PF) — second scenario

**Scenario.** A large customer emails you: "Noted is slow. Please fix it." You
also know P95 response time rose 34% for large workspaces. P95 means the slowest
5% of requests. What do you do first?

- **A.** Open a performance ticket with the 34% number attached, and let
  engineering size the work.
- **B.** Decide which users, which action, and which speed counts as "too slow
  to accept" — then check how many people are past that line.
- **C.** Reply to the customer and ask them to describe the slowness in more
  detail.
- **D.** Ask engineering to profile the ten slowest requests and report back.

**Strongest: B.**

**Rationale.** "Slow" is not yet a problem. It becomes a problem when you say
who is affected, doing what, and where the line sits between acceptable and
unacceptable. A and D start work with no line to judge it against. C collects
one more anecdote when you already have a measurement.

**A wrong pick reveals:** a complaint accepted as a problem statement, with no
boundary drawn. Phase 01 draws it.

---

## 3 · Product Judgment (PJ) — first scenario

**Scenario.** Three enterprise customers have asked for automatic meeting
summaries. You have no other evidence. Leadership wants your recommendation on
Monday. What do you bring?

- **A.** A recommendation to build it. Three enterprise customers asking for the
  same thing is a clear signal.
- **B.** A recommendation, plus how confident you are, plus what it displaces,
  plus the one observation that would change your mind.
- **C.** A neutral summary of both options, so leadership can decide with full
  information.
- **D.** A request for two more weeks of evidence before you commit.

**Strongest: B.**

**Rationale.** Judgment means taking a position without pretending to be
certain. C hides your reasoning behind neutrality and pushes the judgment up to
someone else. That is the most common failure at this level. D treats more
evidence as always better, without asking whether this decision needs it. A
takes a position but hides the uncertainty.

**A wrong pick reveals:** false confidence (A), handing the decision away (C),
or using evidence to delay (D).

---

## 4 · Product Judgment (PJ) — second scenario

**Scenario.** You can fund one of two things this quarter, not both: automatic
summaries, or performance work for large workspaces. Both look reasonable. What
turns this into a decision instead of a preference?

- **A.** Pick the one with the larger estimated revenue impact.
- **B.** Ask leadership which one they would prefer, then execute it well.
- **C.** State what each choice gives up, and name the number or event that
  would make you switch to the other one.
- **D.** Run both as small parallel efforts, and decide later with more data.

**Strongest: C.**

**Rationale.** A real decision names its cost and its reversal condition. C does
both. A hides a guess inside a single number and ignores what is lost. B is a
preference dressed as a decision. D avoids the choice and usually delivers two
half-built things.

**A wrong pick reveals:** no working idea of opportunity cost — the value of the
option you did not fund. Phase 02 builds it.

---

## 5 · Evidence (EV) — first scenario

**Scenario.** You ran a controlled test of a new onboarding flow. Activation rose
6% for the treatment group. The result is statistically significant. What has
this established?

- **A.** The new onboarding causes higher activation for Noted users.
- **B.** Activation is fixed. The team can move to the next problem.
- **C.** The new flow raised activation for the users inside that test's
  assignment, exposure, and measurement conditions, during that time window.
- **D.** Nothing useful. A 6% lift is too small to act on.

**Strongest: C.**

**Rationale.** An experiment estimates a causal effect only inside its own
boundaries. A claims more than the test covered, which is how a real result
becomes an overclaim. B treats one result as a finished problem. D confuses the
size of an effect with whether the result is valid.

**A wrong pick reveals:** a result treated as a general truth instead of a
bounded one. Phase 03 draws that boundary.

---

## 6 · Evidence (EV) — second scenario

**Scenario.** Two pieces of evidence disagree. Twelve user interviews say
onboarding is confusing. The activation drop, however, is concentrated almost
entirely in one signup channel. What do you conclude?

- **A.** They answer different questions. The channel data locates the drop; the
  interviews suggest why it might happen. Say which belief each one moves, and
  what would change your mind.
- **B.** Trust the channel data. Twelve interviews is too small a sample.
- **C.** Trust the interviews. Users describe their own experience better than
  data does.
- **D.** Run a survey to break the disagreement.

**Strongest: A.**

**Rationale.** Different evidence types answer different questions. Quantitative
data is good at locating a problem. Qualitative work is good at explaining a
mechanism. B and C pick a winner and throw away real information. D adds a third
source before understanding the first two.

**A wrong pick reveals:** evidence ranked by type instead of matched to the
question. Phase 03 covers this.

---

## 7 · Product Strategy (ST) — first scenario

**Scenario.** Leadership asks for the Noted product strategy. Which draft could
another team actually use to settle a trade-off without asking you?

- **A.** The one constraint that limits growth, the way one chosen bet relieves
  it, what will not be funded this year, and the evidence that would trigger a
  revision.
- **B.** "Become the default AI workspace for modern teams," supported by five
  strategic initiatives.
- **C.** Three goals with named owners: grow activation 20%, ship summaries,
  improve large-workspace performance.
- **D.** A prioritized four-quarter roadmap with effort estimates and
  dependencies.

**Strongest: A.**

**Rationale.** A strategy is useful when another team can resolve a trade-off
from it alone. B is an ambition. C is a goal list. D is a plan. None of them
tells a team what to give up when two good options collide.

**A wrong pick reveals:** ambition, goals, or plans mistaken for a choice about
how the product wins.

---

## 8 · Product Strategy (ST) — second scenario

**Scenario.** A platform dependency loses support in 10 weeks. The forced
migration will take most of the quarter. A colleague says, "This proves we need a
platform strategy." How do you respond?

- **A.** Agree, and start writing a platform strategy this quarter.
- **B.** Disagree, and keep the current strategy exactly as written. One
  migration does not change direction.
- **C.** Escalate the deadline to leadership and ask them to choose.
- **D.** Say that the deadline is a constraint, not a strategy. Then decide what
  this forced work displaces, and whether it changes the order of your bets or
  the bets themselves.

**Strongest: D.**

**Rationale.** A constraint forces sequencing. It does not supply direction. D
separates the two and does the real work: naming what gets displaced. A invents
a new strategy out of an operational deadline. B refuses to re-sequence when the
cost is real. C hands up a decision that is yours.

**A wrong pick reveals:** constraints and strategy treated as the same thing.
Phase 04 separates them.

---

## 9 · Technical Judgment (TJ) — first scenario

**Scenario.** A platform dependency loses support in 10 weeks. Two engineers
want to migrate everything now. Two want to spread the work across the quarter.
They ask you to decide. What do you do?

- **A.** Leave it to the engineering lead. Migration order is a technical
  decision, not yours.
- **B.** Require the full migration now. An unsupported dependency is an
  unacceptable risk.
- **C.** Ask both sides for a detailed architecture document before you decide
  anything.
- **D.** Own the product consequences — what breaks, for whom, and what a delay
  costs — and leave the implementation choice with engineering.

**Strongest: D.**

**Rationale.** The PM owns product consequences and decision quality. The PM
does not own implementation authority. A gives away a decision with real product
consequences. B claims authority the PM does not have. C turns a decision into
paperwork.

**A wrong pick reveals:** an unclear line between product authority and
specialist authority. Phase 05 draws it.

---

## 10 · Technical Judgment (TJ) — second scenario

**Scenario.** Engineering says the 34% rise in P95 response time needs a
six-week rewrite of the document sync layer. A one-week partial fix would
recover about half the slowdown. How do you evaluate this?

- **A.** Approve the rewrite. Half a fix on a core system is technical debt you
  will pay for later.
- **B.** Take the one-week fix. It is faster and cheaper, and speed matters now.
- **C.** Set the speed threshold that actually matters to users first. Then ask
  what each option buys against that threshold, and what the rewrite prevents
  you from doing this quarter.
- **D.** Ask engineering which option they prefer, and support their call.

**Strongest: C.**

**Rationale.** Neither option can be judged before you set the threshold you are
trying to reach. C sets it, then prices both options against it, including the
work the rewrite displaces. A and B choose a size of solution before knowing the
target. D hands over a decision that is about product consequences, not
implementation.

**A wrong pick reveals:** technical options judged by cost or thoroughness
rather than against a threshold. Phase 05 sets the threshold.

---

## 11 · Product Delivery Systems (DS) — first scenario

**Scenario.** Automatic summaries are code-complete and passing tests. What is
the launch decision?

- **A.** Ship to all users. It is tested, and holding it back wastes the work.
- **B.** Treat four things as four separate decisions: deploying the code,
  exposing users, being ready to operate it, and learning whether it worked.
  Give each one its own control and its own reversal condition.
- **C.** Ship to enterprise customers only, since they are the ones who asked.
- **D.** Hold the release until marketing has a campaign ready.

**Strongest: B.**

**Rationale.** Deploying code, exposing users, being ready to run the feature,
and learning whether it worked are four different decisions. They get collapsed
into one event called "launch." C is a reasonable instinct, but it is still a
single undifferentiated ship decision.

**A wrong pick reveals:** launch treated as a date rather than as a series of
controlled exposures.

---

## 12 · Product Delivery Systems (DS) — second scenario

**Scenario.** Summaries are live for 10% of enterprise users. Usage is strong.
Support tickets from that group rose 20%. The team asks whether to widen the
rollout. What do you say?

- **A.** Widen it. Strong usage is the signal that matters, and early tickets are
  normal.
- **B.** Check the conditions you wrote before launch: what evidence widens
  exposure, what evidence pauses it, and which ticket rate would reverse the
  release. If those conditions were never written, write them now, before this
  decision, and say plainly that you are deciding late.
- **C.** Pause the rollout until support tickets return to their previous level.
- **D.** Widen it to 25% and see what happens to the ticket rate.

**Strongest: B.**

**Rationale.** A rollout decision is only trustworthy if the thresholds were set
before the data arrived. Otherwise you are reading numbers you can argue either
way. A and C each pick one signal and ignore the other. D is movement without a
threshold, so the next decision is just as unclear.

**A wrong pick reveals:** rollout thresholds invented after the evidence, which
is how launches get argued instead of decided. Phase 06 fixes the sequence.

---

## 13 · Product Leadership (LD) — first scenario

**Scenario.** A PM on your team brings you a recommendation about the activation
drop. The reasoning is weak. They picked a method before naming the decision.
You can see the better answer. What do you do?

- **A.** Give them your answer. The decision is time-sensitive, and they will
  learn by seeing it done well.
- **B.** Approve it anyway. Autonomy matters more than getting this one decision
  right, and the cost is recoverable.
- **C.** Ask for their reasoning first. Name the specific move that is missing.
  Have them redo the decision.
- **D.** Escalate to their skip-level manager, so the coaching comes from the
  right person.

**Strongest: C.**

**Rationale.** Leaders build judgment by exposing reasoning and reviewing
decisions without taking them back. A creates dependence, which is the most
common way strong leaders quietly weaken their teams. B mistakes abdication for
autonomy. D hands away a coaching moment that belongs to you.

**A wrong pick reveals:** the trap between dependence and abdication. Phase 07
addresses it directly.

---

## 14 · Product Leadership (LD) — second scenario

**Scenario.** Two PMs on your team argue about the same roadmap trade-off in
every weekly meeting. Each week they reach a different answer. Both are capable.
What is the real problem?

- **A.** Nobody holds the decision right, and no written record says what was
  decided, on what evidence, and what would reopen it. Assign the decision, and
  require the record.
- **B.** They need better data. Commission an analysis that settles the
  trade-off.
- **C.** You should make this call yourself each week. It is clearly above their
  level.
- **D.** They have a working-relationship problem. Address it in their
  one-to-ones.

**Strongest: A.**

**Rationale.** A trade-off that is re-argued every week is almost always a
missing decision right plus a missing written record, not a missing fact. A
supplies both. B assumes more data ends a disagreement about values. C removes
their judgment instead of building it. D treats a system problem as a
personality problem.

**A wrong pick reveals:** repeated disagreement read as a people problem rather
than a decision-system problem. Phase 07 builds the system.

---

## Scoring summary

| # | Phase | Strongest |
|---|-------|-----------|
| 1 | PF · Problem Framing | D |
| 2 | PF · Problem Framing | B |
| 3 | PJ · Product Judgment | B |
| 4 | PJ · Product Judgment | C |
| 5 | EV · Evidence | C |
| 6 | EV · Evidence | A |
| 7 | ST · Product Strategy | A |
| 8 | ST · Product Strategy | D |
| 9 | TJ · Technical Judgment | D |
| 10 | TJ · Technical Judgment | C |
| 11 | DS · Product Delivery Systems | B |
| 12 | DS · Product Delivery Systems | B |
| 13 | LD · Product Leadership | C |
| 14 | LD · Product Leadership | A |

Per-phase status and entry-point routing are defined in `SKILL.md`. Remember
that PF is never `Skip`.
