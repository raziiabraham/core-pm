import Link from "next/link";
import "./noted.css";
import "./audience.css";
import "./verbose.css";

const journey = [
  {
    number: "01",
    title: "Arrive with an intent",
    copy: "The user comes with something to think through or produce: a meeting note, project brief, launch plan, research synthesis, study guide, or unfinished idea.",
    question: "Can they see how Noted helps before they have invested in setup?",
  },
  {
    number: "02",
    title: "Create and shape a document",
    copy: "A block-based editor, nested pages, icons, covers, and files turn a blank page into a structured working document that can evolve over time.",
    question: "How quickly does a new document become genuinely useful?",
  },
  {
    number: "03",
    title: "Use AI inside the work",
    copy: "The user can invoke AI in the editor or work with an AI Squad coworker that can use role instructions, selected models, and workspace context.",
    question: "Does AI reduce effort while leaving the user in control of the artifact?",
  },
  {
    number: "04",
    title: "Organize and return",
    copy: "Nested documents, search, and the file gallery help the workspace remain useful after the first burst of creation.",
    question: "Does the first useful document become a repeatable habit?",
  },
  {
    number: "05",
    title: "Move work outward",
    copy: "Publish-to-web creates a read-only public page. Today, it is the only shipped sharing primitive; private draft review and team collaboration are not live.",
    question: "Can the user move from private thinking to the right social action?",
  },
];

const productSurfaces = [
  { status: "LIVE", title: "Core editor", copy: "Block-based writing, nested documents, icons, covers, archiving, recovery, and real-time persistence.", source: "feature-index.yaml · core-editor" },
  { status: "LIVE", title: "AI features", copy: "Bring-your-own-key AI settings, in-editor /Ask AI, coworker chat, and configurable Squad agents across OpenAI, Anthropic, and Google models.", source: "feature-index.yaml · ai-features" },
  { status: "LIVE", title: "Publish-to-web", copy: "A private document can become a read-only public preview. This is publishing—not private review, commenting, or workspace collaboration.", source: "feature-index.yaml · publish-to-web" },
  { status: "IN DESIGN", title: "AI-first onboarding", copy: "A realistic prototype asks what the user wants to create and returns a scaffold. It does not yet generate or persist a real document, and it emits no onboarding analytics.", source: "prototype-boundary.md" },
  { status: "PLANNED", title: "Team collaboration", copy: "Workspaces, invitations, roles, and multi-user workflows have a PRD but are not built. The current product remains strongest as a personal workspace.", source: "feature-index.yaml · team-collaboration" },
  { status: "PLANNED", title: "Subscription", copy: "A paywall and subscription system are planned and blocked by collaboration. Monetization is not yet a shipped product behavior.", source: "feature-index.yaml · paywall-subscription" },
];

const populations = [
  { title: "New solo users", role: "Activation lens", copy: "People trying to turn an initial intent into a first useful document. They expose whether the product’s promise is understandable and whether value arrives quickly enough." },
  { title: "Retained users and teams", role: "Counter-signal", copy: "People already creating and revisiting notes. Their deeper activity can improve even when new-user activation weakens, so they prevent a single aggregate story." },
  { title: "Enterprise requesters", role: "Problem-definition lens", copy: "People asking for automated meeting summaries. Their request establishes interest, but not yet the underlying objective, severity, frequency, or willingness to change." },
];

const caseSignals = [
  { label: "Activation", value: "−11%", detail: "Indexed new-user activation falls from 100 to 89 across six weeks.", known: "A directional change exists in the constructed dataset.", unknown: "Which users moved, what the metric means operationally, and why it changed." },
  { label: "Enterprise", value: "3 asks", detail: "Three enterprise conversations mention automated meeting summaries.", known: "The request is present and worth unpacking.", unknown: "Whether the request represents a shared problem, its consequence, or the best intervention." },
  { label: "Reliability", value: "P95 +34%", detail: "Large-workspace latency rises at the slow end of the experience.", known: "A performance risk may be concentrated in larger workspaces.", unknown: "User impact, root cause, exposure, and whether it can wait." },
  { label: "Platform", value: "10 weeks", detail: "A dependency approaches its end-of-support date.", known: "There is a time-bound technical constraint.", unknown: "Migration effort, failure mode, reversibility, and the PM decision actually required." },
];

const glossary = [
  { term: "Document", meaning: "The central Noted object: a block-based page that can contain text, media, and nested child documents." },
  { term: "Workspace", meaning: "A user’s body of documents, files, search history, settings, and AI context—not yet a fully collaborative team workspace." },
  { term: "AI Squad", meaning: "Configurable AI coworkers with role instructions that can converse and work with selected workspace context." },
  { term: "/Ask AI", meaning: "The AI action inside the document editor, distinct from the separate coworker chat experience." },
  { term: "Publish-to-web", meaning: "A state that makes a document available through a read-only public page. It is not private draft sharing." },
  { term: "Activation", meaning: "A behavioral indication that a new user has reached enough value to continue. The exact Noted definition is a decision input—not a universal fact." },
];

export default function NotedBriefing() {
  return (
    <main className="noted-briefing">
      <header className="noted-topbar">
        <Link href="/" className="noted-course-mark">CORE / PM</Link>
        <div className="noted-topbar-actions">
          <span>Pre-course briefing · 18–22 min</span>
          <a href="https://wellnoted.dev" target="_blank" rel="noreferrer">Open wellnoted.dev ↗</a>
        </div>
      </header>

      <section className="noted-hero">
        <div className="noted-hero-copy">
          <p className="noted-kicker">Before Session 1 · Shared product context</p>
          <h1>Meet <em>Noted.</em></h1>
          <p className="noted-deck">A working AI-assisted document workspace—and the common product case we will use to practice Core PM judgment.</p>
          <div className="noted-actions">
            <a className="noted-primary" href="https://wellnoted.dev" target="_blank" rel="noreferrer">Experience the product ↗</a>
            <a className="noted-secondary" href="#reading-map">Read the briefing ↓</a>
          </div>
        </div>
        <div className="noted-product-frame" aria-label="Noted product model">
          <div className="noted-window-bar"><i /><i /><i /><span>Noted workspace</span></div>
          <div className="noted-window-body">
            <aside><b>Noted</b><span className="selected">◆ Product brief</span><span>◫ Research notes</span><span>◫ Weekly plan</span><small>+ New document</small></aside>
            <article>
              <span className="noted-doc-label">WORKING DOCUMENT</span><h2>Turn rough thinking into useful work.</h2>
              <div className="noted-copy-line long" /><div className="noted-copy-line medium" />
              <div className="noted-ai-block"><b>AI Squad</b><span>Use the workspace as context →</span></div><div className="noted-copy-line short" />
            </article>
          </div>
        </div>
      </section>

      <nav className="noted-reading-map" id="reading-map" aria-label="Briefing contents">
        <span>Reading map</span>
        <a href="#plain-english">01 · Product</a><a href="#journey">02 · Journey</a><a href="#surfaces">03 · What exists</a><a href="#people">04 · People</a><a href="#case">05 · Case</a><a href="#provenance">06 · Evidence</a><a href="#walkthrough">07 · Walkthrough</a>
      </nav>

      <section className="noted-field-note" id="plain-english">
        <div>
          <p className="noted-kicker">The product in plain English</p>
          <h2>Noted helps people turn rough intent into a useful document without leaving their workspace.</h2>
        </div>
        <div className="noted-definition">
          <p>Noted began from a familiar document-workspace model: flexible pages, nested organization, files, search, and publishing. Its distinctive layer is AI embedded in the same place where the work lives.</p>
          <p>A user can ask for help inside a document or work with a configurable AI coworker. The goal is not a separate chat transcript that must later be copied somewhere else. The intended destination is still a document the user can inspect, edit, organize, return to, and eventually share.</p>
          <p>The product therefore sits across three jobs: <b>thinking</b>, <b>producing</b>, and <b>carrying work forward</b>. Session 1 will focus on the decisions around that system—not on evaluating an isolated AI feature.</p>
        </div>
      </section>

      <section className="noted-section noted-thesis">
        <div className="noted-section-heading"><span>The product thesis</span><h2>The document remains the durable artifact; AI is a collaborator around it.</h2></div>
        <div className="noted-thesis-grid">
          <article><small>INPUT</small><b>Intent and raw material</b><p>Ideas, notes, files, prompts, meeting context, research, and unfinished thinking.</p></article>
          <i>→</i><article className="highlight"><small>WORKSPACE</small><b>Human + AI shaping</b><p>The user writes, directs, judges, revises, and decides what becomes part of the document.</p></article>
          <i>→</i><article><small>OUTPUT</small><b>A useful document</b><p>A retrievable artifact that can support a decision, plan, handoff, publication, or later return.</p></article>
        </div>
        <div className="noted-implication"><b>Why this matters for a PM</b><span>If the team optimizes AI usage while the document never becomes useful—or never gets used again—the product has generated activity without completing the job.</span></div>
      </section>

      <section className="noted-section" id="journey">
        <div className="noted-section-heading"><span>Exhibit 1 · End-to-end experience</span><h2>Value is created across five moments, and it can weaken at every handoff.</h2><p>This journey is a product map, not a funnel with assumed conversion rates. It tells you where to look; it does not tell you what is broken.</p></div>
        <div className="noted-journey-list">
          {journey.map((step) => <article key={step.number}><div><span>{step.number}</span><h3>{step.title}</h3></div><p>{step.copy}</p><aside><small>PM question</small><b>{step.question}</b></aside></article>)}
        </div>
      </section>

      <section className="noted-section noted-status-section" id="surfaces">
        <div className="noted-section-heading"><span>Exhibit 2 · Product reality</span><h2>Three capabilities are live; three important extensions are not.</h2><p>A polished route or detailed PRD does not prove that a capability has shipped. For this course, “live,” “in design,” and “planned” are deliberately kept separate.</p></div>
        <div className="noted-status-grid">
          {productSurfaces.map((surface) => <article key={surface.title} className={surface.status === "LIVE" ? "is-live" : "is-future"}><span>{surface.status}</span><h3>{surface.title}</h3><p>{surface.copy}</p><small>Source · {surface.source}</small></article>)}
        </div>
        <div className="noted-boundary-grid">
          <article><span>What Noted is today</span><p>A personal document workspace with real AI assistance and a public publishing path.</p></article>
          <article><span>What Noted is not yet</span><p>A complete team collaboration environment, a private draft-review workflow, or a validated AI-first onboarding system.</p></article>
          <article><span>What remains open</span><p>Which user and job should anchor growth, where activation truly breaks, and which product investment deserves priority.</p></article>
        </div>
      </section>

      <section className="noted-section noted-architecture">
        <div className="noted-section-heading"><span>Under the hood · Optional context</span><h2>The product is real enough for repository evidence to settle some arguments.</h2></div>
        <div className="noted-stack">
          <article><b>Experience</b><span>Next.js interface and BlockNote editor</span><p>What a participant can open, use, and observe directly.</p></article>
          <i>→</i><article><b>Application</b><span>Convex real-time backend</span><p>Documents, files, AI settings, messages, and agents persist through real code paths.</p></article>
          <i>→</i><article><b>Services</b><span>Clerk, EdgeStore, model providers, Amplitude</span><p>Authentication, file storage, AI calls, analytics, flags, and experiments have distinct boundaries.</p></article>
        </div>
        <div className="noted-repository-cta">
          <div><small>PRIMARY PRODUCT SOURCE</small><b>noted-main on GitHub</b><p>Use the repository to inspect shipped behavior, implementation boundaries, documented gaps, and change history. It is optional context—not required technical work for this Core PM course.</p></div>
          <a href="https://github.com/avidx-app/noted-main" target="_blank" rel="noreferrer">Browse repository ↗</a>
        </div>
        <p className="noted-source-note">You do not need to understand the stack to participate. You do need to know that running behavior, code, and merge history can contradict a narrative document—and that those contradictions are evidence.</p>
      </section>

      <section className="noted-section" id="people">
        <div className="noted-section-heading"><span>Exhibit 3 · Case populations</span><h2>Three populations create different signals; none should silently stand in for “the user.”</h2><p>These are constructed teaching populations, not validated market segments. They exist to make population boundaries visible in the decisions you will practice.</p></div>
        <div className="noted-population-grid">
          {populations.map((population, index) => <article key={population.title}><span>0{index + 1}</span><small>{population.role}</small><h3>{population.title}</h3><p>{population.copy}</p></article>)}
        </div>
        <div className="noted-audience-lens"><span>BOUNDARY TO REMEMBER</span><p>“Activation is down,” “retained teams are active,” and “enterprise users asked for summaries” can all be true because they refer to different populations, stages, and jobs.</p></div>
      </section>

      <section className="noted-section noted-team-section">
        <div className="noted-section-heading"><span>The case world · Constructed</span><h2>You enter as Noted’s first dedicated PM, with a disciplined delivery system and a thinner evidence system.</h2></div>
        <div className="noted-team-grid">
          <article><span>SARAH</span><b>Product and research, previously half-time</b><p>Authored much of the research layer and made an earlier sequencing decision that may deserve re-examination.</p></article>
          <article><span>HANA</span><b>Engineering</b><p>Owns the repository workflow and technical standards. Some planning assumptions still need to be checked against the code.</p></article>
          <article><span>PRIYA</span><b>Customer-facing</b><p>Recorded several customer conversations and is closest to what people actually said before it became a summarized artifact.</p></article>
          <article className="pm-seat"><span>YOU</span><b>Product manager</b><p>Own the decision about what deserves attention and the evidence behind it. You do not own every activity or every specialist judgment.</p></article>
        </div>
        <div className="noted-implication"><b>The inherited tension</b><span>Delivery discipline can make the team efficient at building. It cannot ensure that the underlying product decision deserves to be built.</span></div>
      </section>

      <section className="noted-section noted-case-section" id="case">
        <div className="noted-section-heading"><span>Exhibit 4 · Session 1 case snapshot</span><h2>You join with four signals competing for PM attention.</h2><p>They are deliberately incomplete. The first task is not to solve them all; it is to identify the consequential decision behind each signal and choose which one warrants scarce PM judgment now.</p></div>
        <div className="noted-signal-grid verbose">
          {caseSignals.map((signal) => <article key={signal.label}><span>{signal.label}</span><b>{signal.value}</b><p>{signal.detail}</p><dl><dt>What is known</dt><dd>{signal.known}</dd><dt>What is not</dt><dd>{signal.unknown}</dd></dl></article>)}
        </div>
        <div className="noted-question-strip"><span>Question to carry into class</span><b>Which decision—not which project—deserves scarce PM judgment first?</b></div>
      </section>

      <section className="noted-section" id="provenance">
        <div className="noted-section-heading"><span>Exhibit 5 · Evidence provenance</span><h2>The product is real. Most case evidence is constructed. Do not confuse fidelity with proof.</h2><p>The simulation is intentionally realistic, but realism does not make every source independent or externally valid.</p></div>
        <div className="noted-provenance">
          <article className="real"><header><span>REAL</span><b>Can genuinely contradict the case</b></header><ul><li>The running product and what it actually does</li><li>The code, repository history, and shipped behavior</li><li>The workflow, quality gates, deployment, and documented gaps</li></ul></article>
          <article className="constructed"><header><span>CONSTRUCTED</span><b>Valid for practice, not market proof</b></header><ul><li>Customer names, interviews, personas, and conversations</li><li>Seeded analytics and all four Session 1 signals</li><li>People, company history, and most narrative context</li></ul></article>
        </div>
        <div className="noted-warning"><b>The trap</b><p>Constructed sources were authored to be coherent. Agreement among them is not independent corroboration. A transcript, persona, and seeded chart can look like three confirming sources while still being one authored evidence system counted three times.</p></div>
        <div className="noted-evidence-rules">
          <article><span>Use constructed evidence to</span><p>Practice triangulation, make a bounded decision, test the workflow, and expose what you would need to learn next.</p></article>
          <article><span>Do not use it to</span><p>Claim real market demand, represent a real customer, establish production performance, or support an external business claim.</p></article>
          <article><span>When sources disagree</span><p>Preserve the disagreement. Check the running behavior and code rather than smoothing the conflict into a convenient story.</p></article>
        </div>
      </section>

      <section className="noted-section noted-glossary-section">
        <div className="noted-section-heading"><span>Working vocabulary</span><h2>Six terms will recur across the course.</h2></div>
        <dl className="noted-glossary">{glossary.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}</dl>
      </section>

      <section className="noted-section noted-observation" id="walkthrough">
        <div className="noted-section-heading"><span>Before class · 15–18 minutes</span><h2>Experience the product once before the case tells you what to see.</h2><p>Use something real enough that the editor and AI have a meaningful job. A blank document titled “test” will teach you almost nothing.</p></div>
        <ol className="verbose-walkthrough">
          <li><b>Read the promise.</b><span>On the landing page, write down what you believe Noted is promising, for whom, and what first action it expects.</span><small>2 min</small></li>
          <li><b>Create one purposeful document.</b><span>Use a real meeting, decision, project, study topic, or side-project problem. Notice the first moment the page becomes useful.</span><small>4 min</small></li>
          <li><b>Try both AI surfaces.</b><span>Use /Ask AI inside the editor, then open the AI Squad experience. Notice the difference in context, control, and resulting artifact.</span><small>4 min</small></li>
          <li><b>Organize and retrieve.</b><span>Create or nest another document, add an icon or file, and use search. Ask whether the workspace becomes more valuable on return.</span><small>2–3 min</small></li>
          <li><b>Attempt the social handoff.</b><span>Try publish-to-web and imagine sending an unfinished draft to one trusted reviewer. Record what the available action communicates.</span><small>3 min</small></li>
          <li><b>Capture the fresh read.</b><span>Stop before opening other case material. Write the four lines below in your own language.</span><small>2 min</small></li>
        </ol>
        <aside className="noted-fresh-note"><b>Do not diagnose yet.</b><p>Your fresh observation is valuable because it has not been shaped by the later evidence packet. You will never encounter the product for the first time again.</p></aside>
      </section>

      <section className="noted-section noted-output-section">
        <div className="noted-section-heading"><span>Bring to Session 1</span><h2>Four lines—brief, specific, and entirely your own.</h2></div>
        <div className="noted-four-lines">
          <article><span>01</span><b>One friction</b><p>A broken, confusing, or unexpectedly costly moment you personally experienced.</p></article>
          <article><span>02</span><b>One bright spot</b><p>Something that worked unusually well or created value faster than you expected.</p></article>
          <article><span>03</span><b>One question</b><p>Something you want to understand about why the product or team works this way.</p></article>
          <article><span>04</span><b>One metric sentence</b><p>“Noted is working if ___ goes up, because ___.”</p></article>
        </div>
      </section>

      <section className="noted-ready">
        <p className="noted-kicker">Context complete</p>
        <h2>You now know enough about Noted to spend Session 1 making product decisions—not taking a product tour.</h2>
        <div><a className="noted-primary" href="https://wellnoted.dev" target="_blank" rel="noreferrer">Open the product ↗</a><Link className="noted-secondary" href="/session-1">Continue to Session 1 →</Link></div>
      </section>

      <footer className="noted-footer"><span>Sources: <a href="https://github.com/avidx-app/noted-main" target="_blank" rel="noreferrer">noted-main repository</a>, feature index, onboarding boundary, and course provenance guide. Case signals and people are constructed for instruction.</span><span>CORE / PM · Pre-course briefing</span></footer>
    </main>
  );
}
