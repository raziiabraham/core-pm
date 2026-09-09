import Link from "next/link";
import MermaidDiagrams from "@/app/components/mermaid-diagrams";
import { notedCase } from "@/lib/lesson-content";
import "../learn/[lesson]/lesson.css";
import "./noted.css";

// The case is rendered from lessons/noted/case.md — the same file the learning
// skills read — so the web reader and the agent tutor can never disagree about
// what Noted is. Repository content, not user input.
function Prose({ html }: { html: string }) {
  return <div className="lesson-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function NotedPage() {
  const { intro, sections } = notedCase();

  return <main className="lesson-page noted-case">
    <header className="lesson-topbar">
      <Link href="/" className="lesson-brand">CORE / PM</Link>
      <nav><Link href="/#curriculum">All lessons</Link><Link href="/learn/pf-01-decision-before-method">Start PF-01</Link></nav>
      <span>Shared case</span>
    </header>

    <div className="lesson-shell">
      <aside className="lesson-rail">
        <span>Before PF-01</span>
        <b>The Noted case</b>
        <ol>{sections.map((section) => <li key={section.heading}><a href={`#${slug(section.heading)}`}>{section.heading}</a></li>)}</ol>
        <small>Read once. Every lesson practises here first.</small>
      </aside>

      <article className="lesson-article">
        <header className="lesson-hero">
          <p>Shared product context</p>
          <h1>Meet Noted</h1>
          <blockquote>An AI-assisted document product with four competing signals and deliberately incomplete evidence. Stable enough to compare answers, incomplete enough that nobody can look one up.</blockquote>
          <div><span>18 min</span><span>4 signals</span><span>3 populations</span><span>1 shared case</span></div>
        </header>

        <section className="noted-intro"><Prose html={intro} /></section>

        {sections.map((section) => <section key={section.heading} id={slug(section.heading)}>
          <h2>{section.heading}</h2>
          <Prose html={section.html} />
        </section>)}

        <footer className="lesson-nav">
          <span />
          <Link className="next" href="/learn/pf-01-decision-before-method"><span>Begin · PF-01</span><b>Decision before method</b></Link>
        </footer>
      </article>
    </div>
    <MermaidDiagrams />
  </main>;
}
