import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const studentCookie = "core_pm_student=c0d5cea7082d17e1a995c2d5736f8f8e19748768b6440e3279d4c16e1021c74d";

async function render(path = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const headers = new Headers(init.headers);
  if (!headers.has("accept")) headers.set("accept", "text/html");

  return worker.fetch(
    new Request(`http://localhost${path}`, { ...init, headers }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the self-paced course landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Re-own the[\s\S]{0,80}PM core/);
  assert.match(html, /SELF-PACED · FREE · NO SIGN-UP/);
  assert.match(html, /Twelve practical lessons/);
  assert.match(html, /One decision\. Four phases\. Twelve lessons\./);
  assert.match(html, /Every lesson ends in evidence you can keep/);
  assert.match(html, /Read/);
  assert.match(html, /Decide/);
  assert.match(html, /Apply/);
  assert.match(html, /Keep/);
  assert.match(html, /Practice on Noted/);
  assert.match(html, /563/);
  assert.match(html, /Progress stays on your device/);
  assert.match(html, /The course rebuilds the core\. The book extends the role/);
  assert.match(html, /The course stands alone/);
  assert.match(html, /PM Is Now Another Member of Technical Staff/);
  assert.match(html, /https:\/\/book\.raziiabraham\.com/);
  assert.match(html, /Explore the book/);
  assert.doesNotMatch(html, /guided live cohort|Demo Day|price range|linkedin\.com/i);
  assert.match(html, /href="\/session-1"/);
  assert.match(html, /href="\/session-2"/);
  assert.match(html, /href="\/session-3"/);
  assert.match(html, /href="\/session-4"/);
});

test("server-renders the Session 1 reading orientation", async () => {
  const response = await render("/session-1/reading");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Re-own the product decision/);
  assert.match(html, /PHASE 1 · KEEP THIS ARTIFACT/);
  assert.match(html, /Decision &amp; Problem Hypothesis/);
  assert.match(html, /Phase 1 moves from competing signals to one inspectable decision record/);
  assert.equal((html.match(/class="lesson-progress"/g) ?? []).length, 3);
  assert.equal((html.match(/class="session-concept-copy"/g) ?? []).length, 3);
  assert.match(html, /Choosing an investigation is not the same as adding a solution to the roadmap/);
  assert.match(html, /A product view is not a neutral summary/);
  assert.match(html, /A feature request is evidence of interest and vocabulary/);
  assert.match(html, /carries forward the question of whether enterprise team leads lose decisions, action owners, or context/);
  assert.match(html, /class="session-hero"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders descriptive readings for Sessions 2–4", async () => {
  const readings = [
    {
      path: "/session-2/reading",
      title: /Make evidence earn the decision/,
      checkpoint: /Evidence &amp; Belief Update/,
      argument: /A method is not strong in the abstract/,
      handoff: /Turn the belief into direction/,
      visual: /class="reading-hero-visual evidence-visual"/,
    },
    {
      path: "/session-3/reading",
      title: /Turn evidence into an opinionated choice/,
      checkpoint: /Strategy &amp; Constraint Choice/,
      argument: /Begin with diagnosis/,
      handoff: /Make the choice survivable/,
      visual: /class="reading-hero-visual choice-visual"/,
    },
    {
      path: "/session-4/reading",
      title: /Make the choice survivable/,
      checkpoint: /Completed Product Decision Case/,
      argument: /Begin with context that travels/,
      handoff: /Explain the evolution of judgment/,
      visual: /class="reading-hero-visual loop-visual"/,
    },
  ];

  for (const reading of readings) {
    const response = await render(reading.path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, reading.title);
    assert.match(html, reading.checkpoint);
    assert.match(html, reading.argument);
    assert.match(html, reading.handoff);
    assert.match(html, reading.visual);
    assert.equal((html.match(/class="session-concept-copy"/g) ?? []).length, 3);
    assert.equal((html.match(/class="advanced-exhibit /g) ?? []).length, 6);
    assert.equal((html.match(/class="advanced-decision"/g) ?? []).length, 3);
    assert.equal((html.match(/class="lesson-progress"/g) ?? []).length, 3);
    assert.doesNotMatch(html, /pre-reading coming|not released/i);
  }
});

test("server-renders the 19-page consulting-style facilitator deck", async () => {
  const response = await render("/deck", { headers: { cookie: studentCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Re-own the product decision/);
  assert.match(html, /Four signals are competing for PM attention/);
  assert.match(html, /Illustrative six-week activation index: 100, 98, 99, 95, 94, and 89/);
  assert.match(html, /the evidence is constructed for practice/i);
  assert.match(html, /cannot create evidence that is missing/i);
  assert.match(html, /Turn each signal into a specific product decision/);
  assert.match(html, /keep decisions, action owners, and required context available for follow-up - not to automate summaries/);
  assert.match(html, /Should Noted spend design and engineering capacity to help enterprise team leads record decisions/);
  assert.match(html, /Choose what to investigate, not what to build yet/);
  assert.match(html, /Noted can invest, keep the current roadmap, or redefine the problem/);
  assert.match(html, /Confidence becomes useful when its boundary and revision trigger are explicit/);
  assert.match(html, /The product option should remain one alternative among several/);
  assert.match(html, /id="slide-19"/);
});

test("server-renders the pre-course Noted product briefing", async () => {
  const response = await render("/noted");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Meet <em>Noted/);
  assert.match(html, /The product is real\. Most case evidence is constructed/);
  assert.match(html, /Three capabilities are live; three important extensions are not/);
  assert.match(html, /You enter as Noted’s first dedicated PM/);
  assert.match(html, /Six terms will recur across the course/);
  assert.match(html, /Which decision—not which project—deserves scarce PM judgment first/);
  assert.match(html, /noted-main on GitHub/);
  assert.match(html, /https:\/\/github\.com\/avidx-app\/noted-main/);
  assert.match(html, /https:\/\/wellnoted\.dev/);
  assert.match(html, /href="\/session-1\/reading#attention"[^>]*>Continue to lesson 01/);
  assert.doesNotMatch(html, /WellNoted/);
});

test("provides a continuous learner path through phase overviews and readings", async () => {
  for (const session of [1, 2, 3]) {
    const next = session + 1;
    const [hubResponse, readingResponse] = await Promise.all([
      render(`/session-${session}`),
      render(`/session-${session}/reading`),
    ]);
    assert.equal(hubResponse.status, 200);
    assert.equal(readingResponse.status, 200);
    const hubHtml = await hubResponse.text();
    const readingHtml = await readingResponse.text();
    assert.match(hubHtml, new RegExp(`href="/session-${next}"`));
    assert.match(hubHtml, /NEXT IN THE COURSE/);
    assert.match(hubHtml, /Continue to phase/);
    assert.match(readingHtml, new RegExp(`href="/session-${next}"`));
    assert.match(readingHtml, /Open phase/);
  }
});

test("connects signals, product questions, and the attention choice across Session 1", async () => {
  const deck = await (await render("/session-1/deck", { headers: { cookie: studentCookie } })).text();
  const reading = await (await render("/session-1/reading")).text();
  const slide4 = deck.match(/<section[^>]*id="slide-4"[\s\S]*?<\/section>/)?.[0] ?? "";
  const slide5 = deck.match(/<section[^>]*id="slide-5"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(slide4, /Name the alternatives now; choose among them only after gathering evidence/);
  assert.match(slide4, /A metric change or feature request does not establish a cause, priority, or solution/);
  assert.equal((slide4.match(/role="row"/g) ?? []).length, 5);
  for (const question of [
    "Should Noted change the first-session experience, investigate a cause outside the first session, or make no product change yet?",
    "Should Noted spend design and engineering capacity to help enterprise team leads record decisions, assign action owners, and share context after recurring meetings, or keep the roadmap unchanged?",
    "Should Noted move engineering time this cycle from planned features to improve large-workspace response times, or keep the current plan?",
    "Should Noted complete the dependency migration this cycle or divide the work across the remaining 10 weeks?",
  ]) {
    assert.ok(slide4.includes(question));
    assert.ok(reading.includes(question));
  }
  assert.match(slide5, /PM INVESTIGATION<br\/>THIS WEEK/);
  assert.match(slide5, /EVIDENCE<br\/>TO COLLECT/);
  assert.match(slide5, /PRODUCT DECISION<br\/>AFTER REVIEW/);
  assert.match(slide5, /No design or engineering time has been assigned to summaries or another solution/);
  for (const surface of [deck, reading]) {
    assert.match(surface, /Should Noted spend design and engineering capacity to help enterprise team leads record decisions, assign action owners, and share context after recurring meetings, or keep the roadmap unchanged\?/);
    assert.match(surface, /Enterprise is an example here—not a proven top priority/);
    assert.match(surface, /Do not select the product answer yet/i);
    assert.doesNotMatch(surface, /Which response should receive primary PM attention before the next roadmap commitment/);
    assert.doesNotMatch(surface, /Option A investigates activation/);
    assert.doesNotMatch(surface, /What do we need to choose\?/);
    assert.doesNotMatch(surface, /post-meeting problem|meeting meaning|enterprise handoff|another cause/i);
  }
  assert.match(reading, /Exploratory discovery still belongs here/);
  assert.match(reading, /Choosing an investigation allocates PM time/);
});

test("server-renders the 19-page Session 2 evidence deck", async () => {
  const response = await render("/session-2/deck", { headers: { cookie: studentCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Make evidence earn the decision/);
  assert.match(html, /Evidence is useful only when it has a defined decision job/);
  assert.match(html, /Instrumentation can make an answer impossible/);
  assert.match(html, /observed result is one estimate/i);
  assert.match(html, /Inconclusive does not mean/);
  assert.match(html, /id="slide-19"/);
});

test("server-renders the 19-page Session 3 strategy deck", async () => {
  const response = await render("/session-3/deck", { headers: { cookie: studentCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turn evidence into an opinionated choice/);
  assert.match(html, /Strategy starts by explaining the situation/);
  assert.match(html, /A score can expose assumptions/);
  assert.match(html, /Coding agents lower the cost of producing plausible software/);
  assert.match(html, /build, buy, adapt, defer, or not build/i);
  assert.match(html, /id="slide-19"/);
});

test("server-renders the 19-page Session 4 commitment deck", async () => {
  const response = await render("/session-4/deck", { headers: { cookie: studentCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Make the choice survivable/);
  assert.match(html, /Awareness, input, alignment, and decision authority/);
  assert.match(html, /Authority is decision-specific/);
  assert.match(html, /PRODUCT-DIRECTION OWNER/);
  assert.match(html, /without making the PM the substitute owner/i);
  assert.match(html, /Deployment, exposure, observed outcome, and durable product impact/);
  assert.match(html, /decision quality and luck/i);
  assert.match(html, /id="slide-19"/);
});

test("keeps the Noted case explicit across every course surface", async () => {
  const bannedShorthand = /post-meeting problem|meeting meaning|enterprise(?:-| )handoff|ownership(?:-| )handoff|decision(?:-| )handoff|material follow-through failure|another cause|product call/i;
  const requiredBySession = {
    1: "record decisions, assign action owners, and share context after recurring meetings",
    2: "Enterprise team leads repeatedly lose decisions, action owners, or context",
    3: "record decisions and assign action owners",
    4: "retrieve decisions and identify action owners",
  };

  for (const session of [1, 2, 3, 4]) {
    const [deckResponse, readingResponse] = await Promise.all([
      render(`/session-${session}/deck`, { headers: { cookie: studentCookie } }),
      render(`/session-${session}/reading`),
    ]);
    assert.equal(deckResponse.status, 200);
    assert.equal(readingResponse.status, 200);
    const deck = await deckResponse.text();
    const reading = await readingResponse.text();
    const combined = `${deck}\n${reading}`;

    for (const surface of [deck, reading]) {
      assert.doesNotMatch(surface, bannedShorthand);
    }
    assert.ok(combined.includes(requiredBySession[session]));
  }
});

test("server-renders all four phase hubs", async () => {
  for (const session of [1, 2, 3, 4]) {
    const response = await render(`/session-${session}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`PHASE[\\s\\S]{0,40}${session}`));
    assert.match(html, /Three lessons\. One artifact to keep\./);
    assert.match(html, /class="material-cta reading-cta"/);
    assert.match(html, new RegExp(`href="/session-${session}/reading"`));
    assert.match(html, /Begin phase/);
    assert.doesNotMatch(html, /pre-reading coming|not released/i);
    assert.doesNotMatch(html, /facilitator|COURSE OWNER · INTERNAL/i);
  }
});

test("student gate protects deck pages and accepts the cohort password", async () => {
  const blocked = await render("/session-2/deck");
  assert.ok([307, 308].includes(blocked.status));
  assert.match(blocked.headers.get("location") ?? "", /\/student-access\?return_to=%2Fsession-2%2Fdeck/);

  const modal = await render("/student-access?return_to=/session-2/deck");
  assert.equal(modal.status, 200);
  assert.match(await modal.text(), /STUDENT ACCESS/);

  const form = new URLSearchParams({ password: "avidxstudents26", return_to: "/session-2/deck" });
  const unlocked = await render("/api/student-access", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form,
  });
  assert.equal(unlocked.status, 303);
  assert.match(unlocked.headers.get("set-cookie") ?? "", /core_pm_student=/);
  assert.match(unlocked.headers.get("location") ?? "", /\/session-2\/deck$/);
});

test("keeps all three units and the bounded review state explicit", async () => {
  const [page, deck, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/deck/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Choose what deserves PM attention/);
  assert.match(page, /Form a product view worth trusting/);
  assert.match(page, /Earn the problem definition/);
  assert.match(page, /Noted/);
  assert.match(page, /href="\/noted"/);
  assert.match(page, /noted\/noted\.css/);
  const deckPages = [...deck.matchAll(/<(?:Slide|PromptSlide) n=\{(\d+)\}/g)].map((match) => Number(match[1]));
  assert.deepEqual(deckPages, Array.from({ length: 19 }, (_, index) => index + 1));
  assert.doesNotMatch(deck, /-&gt;/);
  assert.match(deck, /className="closing-connector"/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(page + deck + layout + packageJson, /codex-preview|react-loading-skeleton|_sites-preview/i);
});

test("keeps prompt outputs specific and facilitator artifacts private", async () => {
  const deckSources = await Promise.all([
    readFile(new URL("../app/deck/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/session-2/deck/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/session-3/deck/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/session-4/deck/page.tsx", import.meta.url), "utf8"),
  ]);

  for (const source of deckSources) {
    const prompts = [...source.matchAll(/<PromptSlide\s+n=\{(?:8|13|17)\}[\s\S]*?output="([^"]+)"/g)];
    assert.equal(prompts.length, 3);
    assert.equal(new Set(prompts.map((match) => match[1])).size, 3);
  }

  await assert.rejects(readFile(new URL("../public/session-1-facilitator-run-sheet.html", import.meta.url), "utf8"));
});

test("keeps ledger exhibits in one stable column with an early responsive fallback", async () => {
  const css = await readFile(new URL("../app/components/advanced-reading.css", import.meta.url), "utf8");
  assert.match(css, /advanced-exhibit-items\.ledger\{grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css, /@media\(max-width:1100px\)\{\.advanced-exhibit-items\.ledger article\{grid-template-columns:125px minmax\(0,1fr\)/);
  assert.match(css, /advanced-unit\{scroll-margin-top:132px\}/);
  assert.match(css, /grid-template-areas:"commit adapt" "core core" "learn learn"/);
  assert.doesNotMatch(css, /\.loop-node\{position:absolute/);
});
