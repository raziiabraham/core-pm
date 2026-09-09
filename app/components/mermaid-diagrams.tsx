"use client";

import { useEffect } from "react";

// Renders every <pre class="mermaid"> emitted by lib/lesson-content.ts.
//
// Mermaid is large, so it is imported dynamically and only when a page actually
// contains a diagram. Pages with no diagrams pay nothing.
export default function MermaidDiagrams() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("pre.mermaid");
    if (nodes.length === 0) return;

    let cancelled = false;

    void (async () => {
      const { default: mermaid } = await import("mermaid");
      if (cancelled) return;

      // The font variables are declared on :root in globals.css.
      const styles = getComputedStyle(document.documentElement);
      const read = (name: string, fallback: string) =>
        styles.getPropertyValue(name).trim() || fallback;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        fontFamily: read("--font-sans", "system-ui") + ", system-ui, sans-serif",
        theme: "base",
        themeVariables: {
          background: "#fffdf8",
          primaryColor: "#f0ede4",
          primaryTextColor: "#26241f",
          primaryBorderColor: "#8f8a7d",
          lineColor: "#8f8a7d",
          secondaryColor: "#e8e4d9",
          tertiaryColor: "#fffdf8",
          // Diagrams are usually wider than the column and get scaled down, so
          // the base size is set high enough that the scaled result stays
          // readable rather than shrinking to roughly 9px.
          fontSize: "18px",
        },
      });

      // One diagram at a time: mermaid.run() aborts the whole batch on the
      // first parse error, which would blank every other diagram on the page.
      for (const node of nodes) {
        try {
          await mermaid.run({ nodes: [node] });
        } catch (error) {
          // mermaid.run() can reject after a diagram has already rendered, so
          // only treat it as a failure when no SVG was actually produced.
          if (!node.querySelector("svg")) {
            node.classList.add("mermaid-failed");
            console.warn("Mermaid diagram failed to render:", error);
          }
        }
      }
    })().catch((error) => {
      console.warn("Mermaid failed to initialise:", error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
