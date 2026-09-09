---
artifact: Technical trade-off map
lesson: TJ-02
filename: artifacts/TJ-02-technical-trade-off-map.md
---

# Artifact template · Technical trade-off map

The tutor fills this in with the learner, using the learner's judgment. Never
invent a latency figure, a cost per user, a vendor price, or an engineering
opinion. If a currency has not been quantified, write `<unquantified>`; if it
has not been discussed at all, write `<unknown>` and carry it into Gaps. A map
that estimates costs nobody supplied will be trusted and then found wrong.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Technical trade-off map · <decision name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision:** <the choice, stated as a choice>
- **Owner of the consequence:** <person or role>
- **Specialist authority:** <who supplied the options and their properties>

## What the signal says

- **Observation:** <the measurement, with no cause attached>
- **What it does not tell you:** <the limit of the measurement — a percentile
  is a statement about a distribution, not about a person>
- **Silence in the data:** <any channel that has said nothing, and what that
  does and does not establish>

## Harm

<The user outcome you believe is at stake, in terms of the job the product
does. Not a restatement of the metric. If you cannot support it, write
`<unknown>` and say who could establish it.>

- **Who is affected:** <population, defined by behaviour>
- **What they fail to finish:** <outcome, or `<unknown>`>
- **Evidence held:** <source, or "none — this is an assumption">

## Options

<Describe each option by its consequences, not its technique. Include the
option of doing nothing, and the option of instrumenting before acting, where
those are real.>

### Option A · <name>

| Row | Entry |
|---|---|
| What improves | <currency, and by how much if known> |
| What degrades | <currency — if the only answer is "engineering time", keep looking> |
| Who pays | <role, not department> |
| When the bill arrives | <now / at scale / on the day it fails> |
| Reversibility | <reversible / costly to reverse / one-way> |

### Option B · <name>

<Same five rows.>

### Option C · <name>

<Same five rows.>

## Currency ledger

<One view across all options, so the transfers are visible side by side.>

| Currency | Option A | Option B | Option C |
|---|---|---|---|
| Latency | <better / worse / unchanged / `<unknown>`> | | |
| Money | | | |
| Reliability | | | |
| Freshness | | | |
| Security and privacy | | | |
| Ownership and on-call | | | |

## Correction or transfer

<For each option, state whether it is a genuine correction — a defect removed,
with no interesting cost — or a transfer. Do not frame a correction as a
trade-off.>

| Option | Correction or transfer | Why |
|---|---|---|

## Position

- **Recommended option:** <one>
- **Currency I refuse to spend:** <currency, and why this product cannot afford it>
- **What would change that refusal:** <the specific evidence>
- **Option displaced:** <what does not happen if this is accepted>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason this is wrong:** <the best argument against your own choice>

## Authority split

| Question | Yours | Specialist's |
|---|---|---|
| Which currencies the product can afford | yes | no |
| Which technique achieves the chosen properties | no | yes |
| <other open question> | | |

## Revision trigger

<The observable and the threshold that would make you revisit this choice, and
who is watching for it. Name the number.>

## Gaps

<Everything marked `<unknown>` or `<unquantified>` above, as open questions,
each with the person who could close it.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One option is recommended, and a currency is explicitly refused |
| Evidence | Each currency claim says who supplied it, or is marked unquantified |
| Uncertainty | Confidence matches what was actually measured, and the percentile is not read as a person |
| Alternatives | The displaced option is named and described by its real properties, not as a strawman |
| Owner | Each new cost has a named role who now holds it |
| Revision trigger | An observable, a threshold, and someone watching |

Tell the learner they can stress-test this with `review-artifact`.
