---
artifact: Product operating system
lesson: LD-04
filename: artifacts/LD-04-product-operating-system.md
---

# Artifact template · Product operating system

The tutor fills this in with the learner, using the learner's real calendar and
real signals. Never invent a decision a forum made. If the learner cannot say
what a forum decided last month, write `<unknown>` in that cell and carry it into
the Gaps section — an empty cell is the most useful finding this artifact
produces.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Product operating system · <team>

- **Date:** <YYYY-MM-DD>
- **Team size this is designed for:** <n people>
- **Outgrown when:** <the observation that says this system no longer fits>

## Forum inventory

| Forum | Decides (decision type) | Authority level (LD-02) | Cadence | Decided last month |
|---|---|---|---|---|
| <name> | <the one decision type it disposes of> | <1-5> | <weekly / trigger / …> | <a real decision, or `<unknown>`> |
| <name> | <…> | <…> | <…> | <…> |

<Check for overlap: if two rows can decide the same type, the decision will be
relitigated in whichever room gives the preferred answer. Merge them.>

## Removed or merged

| Forum removed | Decision type it was meant to dispose of | Where that now happens |
|---|---|---|
| <name> | <…> | <…> |

<If this table is empty, the system grows every time you learn something.>

## Decision types with no room

<Decision types that currently arrive at a person because no forum can dispose of
them. Name each, and say whether the fix is a forum, a direction sentence
(LD-01), or a rights row (LD-02).>

| Decision type | Currently lands on | Fix |
|---|---|---|
| <…> | <person> | <forum / direction / rights> |

## Cadence justification

| Loop | How fast the evidence refreshes | How fast the consequence closes | Cadence chosen | Trigger instead of calendar? |
|---|---|---|---|---|
| <loop> | <…> | <…> | <…> | <yes — the trigger is <observable + threshold> / no> |

## Artifacts

| Artifact | Written by | Read by, before | Must contain for a decision to be possible |
|---|---|---|---|
| <name> | <person> | <who, how long before> | <the exposures the room needs — not a format> |

## Information flow

| Signal type | Detection | Routing owner | Latency target | Standing mechanism |
|---|---|---|---|---|
| <e.g. monitoring signals> | <how it is noticed> | <named person who carries it to a room> | <detection to room, in days> | <how it competes for capacity with no complainant attached> |

<Standing is the stage teams skip. A problem with no customer name attached
loses every contest fed by customer names. Write the actual route, not an
intention to advocate.>

## Habits kept on purpose

<Recurring events that dispose of no decision and are kept anyway, for shared
context or another honest reason. Label them here so they are not counted as
decision infrastructure.>

- <event> — kept because <reason>

## Uncertainty

- **The element I am least confident about:** <which one, and why>
- **What I expect to break first:** <…>
- **Who disagrees with this design:** <name the dissent, or `<unknown>` if you
  have not asked>

## Review trigger

- **Observable:** <what tells you the system stopped serving decisions>
- **Threshold:** <the number or event>
- **Owner of the watch:** <person>

## Gaps

<Everything marked `<unknown>` above, especially empty "decided last month"
cells, listed with who could close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Every forum names one decision type it disposes of, at a stated authority level |
| Evidence | The "decided last month" column is filled from real decisions, with `<unknown>` where there were none |
| Uncertainty | The element least likely to work is named, along with what is expected to break first |
| Alternatives | Something was removed or merged to pay for what was added, and habits kept for other reasons are labelled as such |
| Owner | Each signal type has a named routing owner and a latency target |
| Revision trigger | The system states the team size it was designed for and the observation that says it has been outgrown |

One further test specific to this artifact: hand it to someone joining in three
weeks along with one real signal. If they cannot tell which room it goes to
without asking, the routing rows are not finished.

Tell the learner they can stress-test this with `review-artifact`.
