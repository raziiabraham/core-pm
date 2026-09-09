import Link from "next/link";
import "./course-home.css";
import CourseCatalog from "./components/course-catalog";
export default function CourseHome() {
  return <main className="course-home">
    <header className="course-home-nav">
      <Link href="/" className="course-home-mark"><span>CORE / PM</span></Link>
      <nav aria-label="Primary navigation"><a href="#curriculum">Curriculum</a><Link href="/noted">The Noted case</Link><a href="#method">How to study</a><a href="https://github.com/raziiabraham/core-pm" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://book.raziiabraham.com" target="_blank" rel="noreferrer">Book ↗</a></nav>
      <span>43 lessons · 7 phases</span>
    </header>

    <CourseCatalog />

    <section className="course-loop" id="method" aria-labelledby="method-title">
      <header><p>The learning loop</p><h2 id="method-title">Every lesson ends in evidence you can keep.</h2><span>Reading is only the first move. Use the same four-beat loop across the complete curriculum.</span></header>
      <div>
        <article><span>01</span><b>Read</b><p>Understand the product problem, the durable principle, and the boundary where it stops being true.</p></article>
        <i aria-hidden="true">→</i>
        <article><span>02</span><b>Decide</b><p>Make the call before seeing a model answer. State the strongest reason against your position.</p></article>
        <i aria-hidden="true">→</i>
        <article><span>03</span><b>Apply</b><p>Use Noted or a real product decision. Preserve the population, uncertainty, and consequence.</p></article>
        <i aria-hidden="true">→</i>
        <article className="highlight"><span>04</span><b>Keep</b><p>Add the result to one cumulative Product Decision Case. Do not collect disconnected templates.</p></article>
      </div>
    </section>

    <section className="course-case" aria-labelledby="case-title">
      <div>
        <p>One living case</p>
        <h2 id="case-title">Practice on Noted.<br />Transfer to your product.</h2>
        <span>Noted is a working AI-assisted document product with intentionally incomplete evidence. It gives every learner the same decisions to inspect without pretending the teaching case is real market proof.</span>
        <Link href="/noted">Meet the product case <i aria-hidden="true">›</i></Link>
      </div>
      <ol>
        <li><span>Field 01</span><b>Frame the decision</b><p>Bound what deserves attention, for whom, and why now.</p></li>
        <li><span>Field 02</span><b>Update the belief</b><p>Choose evidence that can change the decision.</p></li>
        <li><span>Field 03</span><b>Make the choice</b><p>Turn belief into strategy, portfolio, and technical judgment.</p></li>
        <li><span>Field 04</span><b>Carry it through</b><p>Create commitment, adapt delivery, and learn honestly.</p></li>
      </ol>
    </section>

    <section className="course-repository" aria-labelledby="repository-title">
      <header><p>Built like a living repository</p><h2 id="repository-title">The website is the reader. The curriculum is the source.</h2><span>Every lesson is an atomic module with a stable ID, declared prerequisites, and the same authoring contract. Four routes cut through the same 43 lessons; the twelve-lesson Decision Field Path is the fastest applied way in.</span></header>
      <div>
        <article><span>Doc</span><b>Learn the model</b><p>Problem, concept, boundary, and source lineage.</p></article>
        <article><span>Build</span><b>Make the decision</b><p>One Noted exercise and one real-product transfer.</p></article>
        <article><span>Output</span><b>Ship an artifact</b><p>A reusable decision object—not disposable homework.</p></article>
        <article><span>Check</span><b>Test the reasoning</b><p>Inspectable questions before progress is recorded.</p></article>
      </div>
      <a className="course-repository-link" href="https://github.com/raziiabraham/core-pm" target="_blank" rel="noreferrer">Browse the curriculum on GitHub <i aria-hidden="true">↗</i></a>
    </section>

    <section className="course-foundation" aria-labelledby="foundation-title">
      <header><p>Course design</p><h2 id="foundation-title">One learning spine. Nine domains of product work.</h2><span>The curriculum is organized around a single cumulative act of product judgment rather than around activities. Every lesson moves from a concrete failure to a decision artifact another person can inspect, challenge, and reuse.</span></header>
      <div><b>43</b><span>atomic lessons</span><b>7</b><span>phases</span><b>43</b><span>decision artifacts</span><b>4</b><span>learning paths</span></div>
      <p>Covered domains include product craft, product-market fit, user insight, data, experimentation, strategy, technical strategy, delivery, and leadership. Every lesson names the boundary where its model stops being true.</p>
    </section>

    <section className="course-book">
      <div><p>Optional continuation</p><h2>The course rebuilds the core. The book extends the role.</h2><span><em>PM Is Now Another Member of Technical Staff</em> explores deeper contribution across technical and specialist domains. The course stands alone; no lesson or assessment depends on the book.</span></div>
      <a href="https://book.raziiabraham.com" target="_blank" rel="noreferrer">Explore the book <i aria-hidden="true">↗</i></a>
    </section>

    <footer className="course-home-footer"><span>CORE / PM · An open, self-paced curriculum</span><span>Built for practicing PMs. Progress stays on your device.</span></footer>
  </main>;
}
