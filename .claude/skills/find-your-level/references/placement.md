# CORE / PM placement — scenarios and answer key

**Do not show this file to the learner.** Ask one scenario at a time. Hold every
verdict until the end. The answer-isolation contract in `find-your-level/SKILL.md`
governs delivery.

14 scenarios, two per phase. One point each. No writing required.

## Two tiers, one point

The five reasons under each scenario serve two purposes. They are the list a
learner picks from if they would rather not write, and they are your rubric for
judging a learner who does write. In the second case, ignore the wording and
ask only whether their sentence carries what the credited reason carries.

Each scenario has two questions:

1. **What do you do?** Four options, A to D.
2. **Why?** Five reasons, i to v.

**A point needs both** — a credited letter *and* the reason that actually
justifies that letter. Nothing else scores.

This is what makes the placement hard to guess. The letter alone is guessable:
four options, and most scenarios credit two of them. The pair is not. A learner
guessing both tiers scores about 1 or 2 out of 14. A learner who knows the move
scores what they know.

Two rules make it work, and both matter:

- **The reason must match the letter they picked.** Reason i justifies one
  credited letter and reason ii the other. A learner who guesses the right
  letter and takes the wrong reason earns nothing. That is the most common way
  a guess dies here.
- **Every reason list holds one empty reason** — reason v, usually — which
  sounds like good practice and justifies nothing: "a thorough investigation
  starts broad", "larger samples are always better". A learner working from
  tone picks it.

`SKILL.md` requires you to ask for their own reason before offering the list,
and to shuffle both lists whenever you show them. Never present them in the
order written here.

---

## 1 · Problem Framing (PF)

**Scenario.** Activation at Noted fell 11% in six weeks. Your head of product
asks you to find out why, and wants something by Friday. What is your first
move?

- **A.** Write down which decision the 11% could change, and two explanations
  that would each imply a different action. Pick the method that separates those
  two, and tell Friday it is a status.
- **B.** Ship the improved onboarding tour this week. First-session drop-off is
  the largest known cause of non-activation, and if activation has not moved by
  month end you will know the cause lies elsewhere.
- **C.** Split the drop by signup channel, cohort, and platform first. Report on
  Friday with where it concentrates, and choose the investigation once you can
  see whether one channel moved or all of them did.
- **D.** Interview twelve users who signed up and did not activate in the last
  six weeks. Their accounts of what stopped them will reach the mechanism faster
  than another cut of the data, and cost you two days.

**Why?**

- **i.** Because a method follows from a named decision, and nothing useful
  precedes that.
- **ii.** Because you should always establish where a change sits before proposing
  why it happened.
- **iii.** Because the people who dropped out can describe the cause faster than
  any dataset.
- **iv.** Because the strongest known cause is worth acting on directly, and
  measuring soon afterwards.
- **v.** Because good investigations always move from a broad survey towards a
  narrow conclusion.

**Credit: A + i, or C + ii.**

**Why the others fail.** B commits to one explanation before knowing where the
drop sits. D cannot locate a channel-level drop: twelve users spread across
channels will not show which channel moved. Reason v is the empty one.

---

## 2 · Problem Framing (PF)

**Scenario.** A large customer writes: "Noted is slow, please fix it." Their
workspace holds 40,000 documents. Separately, server-side P95 response time for
large workspaces rose from 1.9s to 2.5s over six weeks. What is your first move?

- **A.** Treat the complaint as the P95 regression. You already have the
  measurement and the trend, so open the performance work against that number
  and tell the customer it is in progress.
- **B.** Ask the customer which action feels slow — search, opening a document,
  or saving — and on which device. Check whether the P95 rise covers that action
  at all before committing any work.
- **C.** Treat it as a scaling limit. 40,000 documents is far past the size most
  workspaces reach, so the work is pagination and indexing for workspaces that
  size, and it will help others later.
- **D.** Trace the requests from that workspace this week and check whether the
  time is being spent server-side at all. Decide once you know that, rather than
  on whichever metric happened to move.

**Why?**

- **i.** Because a reported experience and a measured aggregate can always be
  separate problems.
- **ii.** Because the time may not sit where the available metric happens to be
  looking.
- **iii.** Because an existing measurement and a clear trend are usually enough to
  begin work.
- **iv.** Because size beyond the normal range points at scale, and makes the fix
  reusable.
- **v.** Because the largest customers should always receive a direct reply
  before internal work.

**Credit: B + i, or D + ii.**

**Why the others fail.** A assumes the number the team happens to measure is the
problem the customer has. C moves from one fact to a cause and a solution in a
single step. Reason v is the empty one.

---

## 3 · Product Judgment (PJ)

**Scenario.** Three enterprise customers have asked for automatic meeting
summaries. The same engineers would otherwise spend the quarter on
large-workspace performance. Leadership wants your recommendation on Monday.

- **A.** Recommend summaries at 60% confidence. Name performance as what it
  displaces, and say you would reverse if fewer than two of the three would
  expand their contract on the strength of it.
- **B.** Recommend performance. Slow large workspaces touch every enterprise
  account rather than three, and you can return to summaries once P95 for large
  workspaces holds under 2.2s.
- **C.** Recommend summaries. Three enterprise accounts asking unprompted is the
  strongest demand signal available, those three carry 22% of this year's
  renewal revenue, and you would stop if any of them churned.
- **D.** Present both options with the evidence for each and no recommendation,
  so leadership can weigh renewal risk against churn risk with everything in
  front of them and decide it themselves.

**Why?**

- **i.** Because a position needs a stated cost, and a stated observation that
  would reverse it.
- **ii.** Because breadth of impact always outranks the number of customers who
  happened to ask.
- **iii.** Because unprompted demand from paying accounts is the clearest signal
  you will get.
- **iv.** Because the people who own the budget should weigh the risks, and then
  choose.
- **v.** Because the larger revenue figure should generally decide between two
  reasonable options.

**Credit: A + i, or B + ii.**

**Why the others fail.** C takes a position and hides the uncertainty and the
cost behind a revenue number. D looks balanced and moves the judgment to
someone with less context than you. Reason v is the empty one.

---

## 4 · Product Judgment (PJ)

**Scenario.** Six weeks ago you funded summaries. Two of the three enterprise
customers who asked have now bought a competitor's summary feature. Four weeks
of the work remain. What do you decide?

- **A.** Carry it to completion. Four weeks remain against ten already spent, so
  finish and ship, and hold the option to stop only if the remaining account
  also leaves before launch.
- **B.** Keep going, and reopen the decision at the end of the quarter, when you
  can see whether the competitor's feature actually holds those two accounts or
  they come back to you.
- **C.** Stop now and move the four weeks to performance. Two of the three
  buyers are gone, so the demand that justified the work no longer holds, and
  one account does not carry a quarter on its own.
- **D.** Cut it to a two-week version for the remaining account, and move two
  weeks to performance. Confirm first that this account still wants summaries at
  the reduced scope before you commit.

**Why?**

- **i.** Because work always loses its justification the moment the evidence
  behind it disappears.
- **ii.** Because a smaller commitment can still serve whoever remains, once they
  confirm they want it.
- **iii.** Because effort already invested is worth carrying through to something
  shippable.
- **iv.** Because a competitor's win may not hold, and waiting costs less than
  reversing.
- **v.** Because mid-quarter changes of direction usually cost a team more than
  they save.

**Credit: C + i, or D + ii.**

**Why the others fail.** A prices the decision by work already done, which
cannot be recovered. B delays a decision the new evidence already forces, and
spends the four weeks while waiting. Reason v is the empty one.

---

## 5 · Evidence (EV)

**Scenario.** You ran a randomised test of a new onboarding flow on signups from
paid channels only, over three weeks. Activation rose 6% for the treatment
group, and the result is statistically significant. What has it established?

- **A.** It establishes a 6% lift for paid-channel signups inside that window.
  Before extending the claim, name what differs about organic signups and test
  that difference rather than assuming it away.
- **B.** New onboarding raises activation about 6% for Noted signups. The
  mechanism is general, so roll it out to every channel this week, and reverse
  it if the overall rate does not hold the lift.
- **C.** It establishes that first-session clarity causes activation. Apply the
  principle across the product, beginning with the empty-state screens and the
  invite flow, without needing a second test.
- **D.** Roll out to paid now, and run organic as its own test. The result holds
  for paid-channel signups at that exposure over that three-week window, and
  organic behaviour is untested.

**Why?**

- **i.** Because a measured effect always stops applying where the conditions
  producing it change.
- **ii.** Because you may act where the effect was measured while testing the
  untested group.
- **iii.** Because a significant randomised result establishes a mechanism that
  generally holds elsewhere.
- **iv.** Because a clear causal finding transfers as a principle, and transfers
  across surfaces.
- **v.** Because bigger samples carry more weight than a dozen conversations ever
  will.

**Credit: A + i, or D + ii.**

**Why the others fail.** B generalises past the population the test covered. C
promotes one measured effect into a general mechanism and spends it everywhere
without a second test. Reason v is the empty one.

---

## 6 · Evidence (EV)

**Scenario.** Two things are true. The activation drop is concentrated almost
entirely in paid-search signups. Separately, twelve interviews — with users
recruited across all channels — say onboarding is confusing. What do you
conclude?

- **A.** The interviews explain the channel drop. Paid-search users arrive with
  less context, so confusing onboarding hurts them hardest. Fix onboarding, and
  if the channel does not recover, look again.
- **B.** The interviews describe a general onboarding weakness that predates
  this drop. The channel data locates the drop. Explain the 11% from the channel
  data, and treat onboarding as a separate, older problem.
- **C.** Interview six paid-search signups who did not activate. The existing
  twelve cannot speak to this channel, and six targeted conversations would
  separate the two explanations inside a week.
- **D.** Set the interviews aside for good. Self-reported confusion is
  unreliable next to behavioural data, so work from the channel measurement
  unless the sample can be rebuilt at ten times the size.

**Why?**

- **i.** Because one source locates a change, and the other explains a longer-
  standing weakness.
- **ii.** Because no evidence you hold was ever drawn from the group that actually
  moved.
- **iii.** Because the group with least context suffers most, which fully explains
  the change.
- **iv.** Because measured behaviour outranks what people report about their own
  sessions.
- **v.** Because a disagreement between two sources should always be settled by a
  third.

**Credit: B + i, or C + ii.**

**Why the others fail.** A is a coherent story asserted as a conclusion, from a
sample that never covered the channel. D rejects qualitative evidence by its
type rather than by its fit. Reason v is the empty one.

---

## 7 · Product Strategy (ST)

**Scenario.** Four drafts of the Noted strategy. Which one lets another team
settle a trade-off without coming to you?

- **A.** Noted becomes the default AI workspace for modern teams, through five
  funded initiatives — summaries, search, performance, integrations, mobile —
  each carrying a named owner, a quarterly target, a monthly checkpoint against
  that target, and a written definition of done.
- **B.** Noted grows activation 20%, ships summaries to every enterprise
  account, and brings P95 under 2.2s for large workspaces. All three are
  reviewed weekly with leadership and owned by named leads.
- **C.** Noted delivers summaries in Q1, the migration in Q2, performance in Q3,
  integrations in Q4, with effort estimates on every item, dependencies mapped
  across quarters, a named owner per quarter, and slack held against migration
  risk.
- **D.** Noted wins on large-workspace reliability, because enterprise renewal
  depends on it. When reliability and a new surface compete, reliability wins,
  and no new surface — mobile or integrations — is funded until P95 for large
  workspaces holds under 2.2s.

**Why?**

- **i.** Because only a stated priority rule settles a collision without needing
  another conversation.
- **ii.** Because it is the most precise and measurable of the four drafts offered
  here.
- **iii.** Because named owners and dated targets make accountability visible to
  everyone involved.
- **iv.** Because a sequenced year tells another team what comes first, and what
  waits.
- **v.** Because a strategy should always state the ambition the company is
  organised around.

**Credit: D + i.**

**Why the others fail.** A is an ambition with an initiative list under it. B is
a goal list. C is a plan. All three are owned and tracked, and none resolves a
collision the team has not already been handed. Reason ii is the trap: it is
true of D and justifies nothing, so D + ii earns no point.

---

## 8 · Product Strategy (ST)

**Scenario.** The forced platform migration will consume most of next quarter. A
colleague says this proves Noted needs a platform strategy. How do you respond?

- **A.** The deadline is a constraint, not a direction. Say which of this year's
  bets the migration displaces — summaries or performance — and whether the
  order of the rest changes. The strategy itself stands.
- **B.** Accept the framing and write a platform strategy this quarter, setting
  policy on dependency risk and vendor concentration, and revisit it whenever a
  dependency gives less than a quarter's notice.
- **C.** Bring leadership the two options — slip summaries or slip performance —
  with the revenue exposure on each and your recommendation attached. A
  full-quarter displacement is an allocation call above one PM.
- **D.** Take it inside the quarter. Cut summary scope until the migration fits,
  and leave the strategy and the order of the bets as written unless the
  migration itself slips.

**Why?**

- **i.** Because a deadline always changes the order of work without changing
  what the work is.
- **ii.** Because reallocating a whole quarter across funded bets exceeds one
  person's authority.
- **iii.** Because an expensive surprise like this always means a governing policy
  was plainly missing.
- **iv.** Because scope cut to fit leaves the plan and its order standing
  unchanged.
- **v.** Because circumstances that change materially should generally trigger a
  fresh strategy.

**Credit: A + i, or C + ii.**

**Why the others fail.** B is the strongest distractor: dependency policy is a
real strategic question, but here it is invented from one operational deadline
and does not resolve what next quarter loses. D pays the cost without saying
what was paid. Reason v is the empty one.

---

## 9 · Technical Judgment (TJ)

**Scenario.** Engineering proposes moving summary generation from synchronous to
a background queue. Summaries would appear 30 to 90 seconds after a meeting ends
instead of immediately. Infrastructure cost drops about 70%. What do you decide?

- **A.** Approve the change as proposed. A 70% saving is decisive at this stage,
  and 30 to 90 seconds is imperceptible for a document people return to later,
  so revisit only if someone complains.
- **B.** Ask which user action depends on the summary being immediate. If people
  read it while still in the meeting, the delay breaks the use case. If they
  read it afterwards, it costs nothing. Decide on that.
- **C.** Decline the change and keep it synchronous. Immediacy is what makes the
  feature feel like AI rather than a batch job, and a 90-second wait invites
  people to write their own notes first.
- **D.** Approve it with a limit: queue it, but hold the 95th-percentile
  delivery time under 45 seconds, and revisit if enterprise workspaces run past
  that. The saving stops counting if the summary lands after attention moves.

**Why?**

- **i.** Because the cost of a delay always depends on a fact nobody has
  established.
- **ii.** Because a saving holds only inside a delivery limit, and the limit
  follows the use.
- **iii.** Because a saving of that size dwarfs a delay users will barely notice.
- **iv.** Because responsiveness is what separates this from a batch job, and
  always will.
- **v.** Because whoever proposes and implements a change should generally make
  the call.

**Credit: B + i, or D + ii.**

**Why the others fail.** A trades a user-facing property for a cost saving
without establishing which property was traded. C asserts a user need that no
evidence in front of you supports. Reason v is the empty one.

---

## 10 · Technical Judgment (TJ)

**Scenario.** P95 for large workspaces rose from 1.9s to 2.5s in six weeks.
Engineering offers a one-week fix that recovers about two thirds of the rise, or
a six-week rewrite of the document sync layer that recovers all of it. The sync
layer also sits on the path of the platform migration, which lands next quarter.

- **A.** Take the one-week fix, and hold 2.2s as the line for large workspaces.
  Revisit the rewrite only if the fix leaves you above that line, or if the
  regression returns within two months.
- **B.** Take the one-week fix, and commit the rewrite to next quarter whatever
  the fix achieves. Two pieces of work that size in one quarter is what puts the
  migration itself at risk.
- **C.** Approve the rewrite and let summaries slip a quarter. The sync layer is
  on the migration's path, so paying for it once now is cheaper than rewriting
  after the migration has been built on top of it.
- **D.** Approve the rewrite, and keep the one-week fix in reserve in case the
  migration slips and the rewrite has to move. Half a fix on a core system is
  debt you pay for later.

**Why?**

- **i.** Because a cheap step should always be measured before a long commitment
  is made.
- **ii.** Because deferring foundational work means paying twice once other work
  sits on it.
- **iii.** Because two large commitments in one period endanger the one that cannot
  move.
- **iv.** Because partial repairs on core systems accumulate, and the bill arrives
  much later.
- **v.** Because the cheaper option is usually the responsible default in a full
  quarter.

**Credit: A + i, or C + ii.**

**Why the others fail.** B commits to the rewrite before the cheap fix has told
it anything, which makes the one-week measurement pointless. D holds a one-week
fix in reserve for a problem that is either urgent now or not a problem. Reason
v is the empty one.

---

## 11 · Product Delivery Systems (DS)

**Scenario.** Automatic summaries are code-complete and passing tests. What is
the launch decision?

- **A.** Ship to everyone on Thursday. It is tested, and a staged rollout on a
  feature this contained buys a week of delay for information you largely have,
  so roll back only if something breaks.
- **B.** Separate the deploy from the exposure. Put the code in production this
  week with the feature off, then decide exposure on its own evidence, with a
  named stopping condition and someone who owns turning it off.
- **C.** Ship to everyone on Thursday, with a kill switch and an accuracy
  dashboard, so the feature can be turned off within minutes if complaints start
  arriving from enterprise accounts.
- **D.** Deploy behind a flag now. Expose 10% of enterprise workspaces next
  week. Require the on-call runbook and a summary-accuracy check before widening
  past that, each with its own condition to stop.

**Why?**

- **i.** Because putting code in place and letting people use it are always
  different commitments.
- **ii.** Because each widening step needs its own precondition, and its own way
  to halt.
- **iii.** Because a tested feature gains little from staging that costs a week.
- **iv.** Because an instant switch off makes any exposure recoverable within a
  few minutes.
- **v.** Because a release should generally arrive with the message that explains
  it.

**Credit: B + i, or D + ii.**

**Why the others fail.** C is the strongest distractor and the most common real
answer: it has a reversal mechanism, but it exposes every user before anyone has
checked accuracy, so the kill switch becomes the only control. A collapses the
decisions into a date. Reason v is the empty one.

---

## 12 · Product Delivery Systems (DS)

**Scenario.** Summaries have been live for 10% of enterprise workspaces for two
weeks. 64% of meetings are being summarised. The accuracy check you required
before widening passed at 94%. Support tickets from that group rose from 15 to
18 a week, almost all asking for attendee names to show display names instead of
"Last, First". Before launch you wrote: widen to 50% when usage passes
50%, accuracy holds above 90%, and tickets stay under 25 a week.

- **A.** Widen to 50%. All three conditions you set in advance are met, and the
  ticket theme is a formatting preference rather than an accuracy failure or a
  reliability failure.
- **B.** Widen to 50%, and tighten the ticket limit to 15 a week going forward.
  The absolute numbers turned out smaller than expected, so the original
  threshold was too loose to protect anything.
- **C.** Hold at 10% until the name formatting is changed. Tickets are rising,
  and a feature that renders people's names in an unfamiliar format inside their
  own meeting notes reads as unfinished.
- **D.** Widen to 25% rather than 50%. The conditions are met, but the ticket
  trend is upward, so a smaller step preserves the option to stop without having
  to renegotiate the threshold.

**Why?**

- **i.** Because a limit agreed before the evidence arrived is always the only
  kind that binds.
- **ii.** Because a written condition can miss a risk, and overriding one must be
  said aloud.
- **iii.** Because a limit that proved far too loose should be tightened while you
  can.
- **iv.** Because a rising trend justifies a smaller step that preserves the
  option to stop.
- **v.** Because usage is the signal that carries an early rollout past its first
  weeks.

**Credit: A + i, or C + ii.**

**Why the others fail.** B changes a threshold after seeing the data, which
removes the reason for setting one. D neither honours the condition nor argues
against it, so the next rollout decision is as unclear as this one. Reason v is
the empty one.

---

## 13 · Product Leadership (LD)

**Scenario.** A PM on your team brings a recommendation on the activation drop.
The reasoning is weak — they picked a method before naming the decision. The
review is in two days, and you can see the better answer.

- **A.** Give them your answer now, explaining the reasoning as you go. Two days
  is not enough for them to rebuild it, and they learn the move by watching
  someone do it once under real time pressure.
- **B.** Ask what decision the analysis was meant to change. Name what is
  missing once they answer, and have them redo the framing today and bring it
  back to you tomorrow.
- **C.** Rebuild the framing with them in an hour, then have them present it.
  Debrief afterwards on what you changed and why, so the move is named while it
  is still fresh.
- **D.** Send it to the review as it stands, with your note saying the framing is
  weak, so the room judges answer and reasoning together — and step in only if
  the discussion goes badly for them.

**Why?**

- **i.** Because the person who owns the reasoning always has to be the one
  repairing it.
- **ii.** Because working alongside someone teaches nothing unless the move is
  named afterwards.
- **iii.** Because under real time pressure the fastest transfer is watching it
  done well.
- **iv.** Because a review room judges reasoning in the open, and openly is where
  it lands.
- **v.** Because delegated work should generally not be taken back once it is
  handed over.

**Credit: B + i, or C + ii.**

**Why the others fail.** A produces a correct decision and no transferable move.
D corrects your own report in public, buying the lesson at their expense. Reason
v is the empty one.

---

## 14 · Product Leadership (LD)

**Scenario.** Two PMs argue the same trade-off — fund summaries or fund
performance — in every weekly meeting, and reach a different answer each week.
Both are capable. Both cite real evidence. What is the actual problem?

- **A.** Nobody holds the decision. Assign it to one of them, and require a
  one-page record: what was decided, on what evidence, and what would reopen it.
  The meeting then reviews the record instead of the argument.
- **B.** Hold the decision yourself each week until they are ready for it. A
  trade-off this size sits above their scope, and a standing call from you costs
  less than two capable PMs stalling every Monday.
- **C.** They are missing the analysis that settles it — expansion revenue
  against churn risk from slow workspaces. Commission it, and treat the weekly
  argument as suspended until the numbers land.
- **D.** Rule that this trade-off is decided once a quarter in planning, and not
  reopened in weekly meetings unless new evidence crosses a threshold you name
  in advance. Then hold that line.

**Why?**

- **i.** Because a question that returns every week is always missing an owner,
  not information.
- **ii.** Because a decision needs a cadence, and a stated bar before anyone
  reopens it.
- **iii.** Because a quantified comparison would always settle which of the two
  matters more.
- **iv.** Because a call of this size belongs above the two of them for now.
- **v.** Because two capable people in persistent disagreement usually have a
  relationship problem.

**Credit: A + i, or D + ii.**

**Why the others fail.** B removes their judgment to buy quiet. C would be right
if the disagreement were purely factual, and two capable people who both cite
evidence and still land differently each week are short of a decision right, not
short of facts. Reason v is the empty one.

---

## Scoring summary

| # | Phase | Credited pairs |
|---|-------|----------------|
| 1 | PF · Problem Framing | A+i, C+ii |
| 2 | PF · Problem Framing | B+i, D+ii |
| 3 | PJ · Product Judgment | A+i, B+ii |
| 4 | PJ · Product Judgment | C+i, D+ii |
| 5 | EV · Evidence | A+i, D+ii |
| 6 | EV · Evidence | B+i, C+ii |
| 7 | ST · Product Strategy | D+i |
| 8 | ST · Product Strategy | A+i, C+ii |
| 9 | TJ · Technical Judgment | B+i, D+ii |
| 10 | TJ · Technical Judgment | A+i, C+ii |
| 11 | DS · Product Delivery Systems | B+i, D+ii |
| 12 | DS · Product Delivery Systems | A+i, C+ii |
| 13 | LD · Product Leadership | B+i, C+ii |
| 14 | LD · Product Leadership | A+i, D+ii |

Reason **i** always justifies the first credited letter and reason **ii** the
second. Reasons iii and iv justify the two failing options. Reason v justifies nothing
— except in scenario 7, where reason ii is the trap instead and v points at a
failing option.

A right letter with the wrong reason earns nothing, and it is worth noting in
the report — it means they found the move without yet knowing why it works.

Per-phase status and entry-point routing are defined in `SKILL.md`.
