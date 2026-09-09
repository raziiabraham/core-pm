"use client";

import { useState } from "react";

type State = "idle" | "copied" | "failed";

// A "copy this" button for a block of markdown. Used on the Ship section so a
// web reader gets the artifact template as a file they can paste, not a path
// into a repository they may never have cloned — and on the Use section so the
// transfer questions become a worksheet rather than a paragraph to re-type.
//
// The clipboard API refuses in several ordinary situations (an unfocused
// document, a browser that gates it behind a permission, a page served over
// plain http). Failing silently would leave the reader unsure whether the copy
// worked, so there is a fallback and, past that, an honest failure label.
export default function CopyMarkdown({
  text,
  label = "Copy as .md",
}: {
  text: string;
  label?: string;
}) {
  const [state, setState] = useState<State>("idle");

  function settle(next: State) {
    setState(next);
    window.setTimeout(() => setState("idle"), next === "failed" ? 4000 : 2000);
  }

  // Pre-clipboard-API fallback: a throwaway textarea and the legacy copy
  // command, which is still honoured where writeText is refused.
  function legacyCopy() {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      settle("copied");
      return;
    } catch {
      settle(legacyCopy() ? "copied" : "failed");
    }
  }

  return <button
    type="button"
    className={`copy-markdown${state === "failed" ? " is-failed" : ""}`}
    onClick={copy}
    aria-live="polite"
  >
    {state === "copied" ? "Copied" : state === "failed" ? "Select the text and copy" : label}
  </button>;
}
