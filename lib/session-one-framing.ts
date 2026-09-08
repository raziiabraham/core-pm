// Shared wording keeps the live deck and pre-reading on the same Noted story.
export const enterpriseWorkflowOutcome =
  "record decisions, assign action owners, and share context after recurring meetings";

export const enterpriseWeakClaim =
  "Enterprise team leads repeatedly lose decisions, action owners, or context after recurring meetings, causing rework or missed commitments.";

export const enterpriseProductQuestion =
  `Should Noted spend design and engineering capacity to help enterprise team leads ${enterpriseWorkflowOutcome}, or keep the roadmap unchanged?`;

export const notedDecisionQuestions = [
  { id: "activation", signal: "Activation fell 11% in six weeks", question: "Should Noted change the first-session experience, investigate a cause outside the first session, or make no product change yet?" },
  { id: "enterprise", signal: "Three customers requested automated summaries", question: enterpriseProductQuestion },
  { id: "reliability", signal: "P95 response time rose 34% for large workspaces", question: "Should Noted move engineering time this cycle from planned features to improve large-workspace response times, or keep the current plan?" },
  { id: "platform", signal: "A dependency loses support in 10 weeks", question: "Should Noted complete the dependency migration this cycle or divide the work across the remaining 10 weeks?" },
];
