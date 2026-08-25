import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const facilitatorCookie = "core_pm_facilitator=16ebbfd18684dc8975f499abab78bb0e574ae573576f5b5b95f5fa6a3c379765";
const studentCookie = "core_pm_student=c0d5cea7082d17e1a995c2d5736f8f8e19748768b6440e3279d4c16e1021c74d";

function assertCrispEmbeddedSlide(artifact) {
  const match = artifact.match(/class="slide-image" src="data:image\/png;base64,([^"]+)"[^>]*width="3072" height="1728"/);
  assert.ok(match, "run sheet should embed a high-density PNG slide");
  const image = Buffer.from(match[1], "base64");
  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(image.readUInt32BE(16), 3072);
  assert.equal(image.readUInt32BE(20), 1728);
}

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

test("server-renders the four-session course landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Re-own the[\s\S]{0,80}PM core/);
  assert.match(html, /One decision develops across four cumulative sessions/);
  assert.match(html, /The reading explains\. The live deck challenges\./);
  assert.match(html, /Re-own core PM practice in the course\. Explore deeper specialist involvement in the book/);
  assert.match(html, /The course and[\s\S]{0,250}are independent/);
  assert.match(html, /no book or technical prerequisite/);
  assert.match(html, /live course does not depend on it/);
  assert.match(html, /self-paced reading materials are open to everyone/);
  assert.match(html, /Ten places are available/);
  assert.match(html, /PM Is Now Another Member of Technical Staff/);
  assert.match(html, /https:\/\/book\.raziiabraham\.com/);
  assert.match(html, /Explore the book/);
  assert.match(html, /ready to commit for five weeks, through Demo Day/);
  assert.match(html, /What price range would feel reasonable for you for the guided cohort/);
  assert.match(html, /https:\/\/linkedin\.com\/in\/raziiabraham/);
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
  assert.match(html, /Week 1 checkpoint/);
  assert.match(html, /Decision &amp; Problem Hypothesis/);
  assert.match(html, /Session 1 moves from competing signals to one inspectable decision record/);
  assert.equal((html.match(/class="session-concept-copy"/g) ?? []).length, 3);
  assert.match(html, /A decision-first sequence has two distinct decision moments/);
  assert.match(html, /A product view is not a neutral summary/);
  assert.match(html, /A feature request is evidence of interest and vocabulary/);
  assert.match(html, /The live case carries the enterprise handoff branch forward/);
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
      handoff: /Present the evolution of judgment/,
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
    assert.doesNotMatch(html, /pre-reading coming|not released/i);
  }
});

test("server-renders the 19-page consulting-style facilitator deck", async () => {
  const response = await render("/deck", { headers: { cookie: studentCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Re-own the product decision/);
  assert.match(html, /Noted faces four signals/);
  assert.match(html, /Illustrative six-week activation index: 100, 98, 99, 95, 94, and 89/);
  assert.match(html, /the evidence is constructed for practice/i);
  assert.match(html, /cannot create evidence that is missing/i);
  assert.match(html, /Decision-first gives the activity a defined decision job/);
  assert.match(html, /The objective is to preserve meeting meaning - not to automate summaries/);
  assert.match(html, /Frame the choice now; make it after the necessary evidence and judgment work/);
  assert.match(html, /DECISION-LAST/);
  assert.match(html, /DECISION-FIRST/);
  assert.match(html, /Define the decision to be made, use evidence work to inform it, then return to make the decision/);
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
  assert.match(html, /href="\/session-1"[^>]*>Continue to Session 1/);
  assert.doesNotMatch(html, /WellNoted/);
});

test("provides a continuous learner path through session overviews and readings", async () => {
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
    assert.match(hubHtml, /Continue to Session/);
    assert.match(readingHtml, new RegExp(`href="/session-${next}"`));
    assert.match(readingHtml, /Open Session/);
  }
});

test("server-renders the integrated facilitator run-sheet route", async () => {
  const response = await render("/facilitator", { headers: { cookie: facilitatorCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/api\/facilitator-content\/session-1/);

  const artifact = await readFile(new URL("../private/facilitator/session-1-facilitator-run-sheet.html", import.meta.url), "utf8");
  assert.match(artifact, /Session 1 Facilitator Rehearsal Run Sheet/);
  assert.match(artifact, /Model debrief/);
  assert.match(artifact, /Resolved source citations/);
  assert.equal((artifact.match(/class="slide-image"/g) ?? []).length, 19);
  assert.match(artifact, /data:image\/png;base64,/);
  assertCrispEmbeddedSlide(artifact);
});

test("server-renders the consistent Session 1 facilitator alias", async () => {
  const response = await render("/session-1/facilitator", { headers: { cookie: facilitatorCookie } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/api\/facilitator-content\/session-1/);
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

test("server-renders the integrated Session 2 facilitator run sheet", async () => {
  const response = await render("/session-2/facilitator", { headers: { cookie: facilitatorCookie } });
  assert.equal(response.status, 200);
  const artifact = await readFile(new URL("../private/facilitator/session-2-facilitator-run-sheet.html", import.meta.url), "utf8");
  assert.match(artifact, /Session 2 Facilitator Rehearsal Run Sheet/);
  assert.match(artifact, /Decision-linked evidence chain/);
  assert.match(artifact, /Model debrief/);
  assert.match(artifact, /Resolved source citations/);
  assert.equal((artifact.match(/class="slide-image"/g) ?? []).length, 19);
  assertCrispEmbeddedSlide(artifact);
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

test("server-renders the integrated Session 3 facilitator run sheet", async () => {
  const response = await render("/session-3/facilitator", { headers: { cookie: facilitatorCookie } });
  assert.equal(response.status, 200);
  const artifact = await readFile(new URL("../private/facilitator/session-3-facilitator-run-sheet.html", import.meta.url), "utf8");
  assert.match(artifact, /Session 3 Facilitator Rehearsal Run Sheet/);
  assert.match(artifact, /Model debrief/);
  assert.match(artifact, /Resolved source citations/);
  assert.match(artifact, /METR/);
  assert.equal((artifact.match(/class="slide-image"/g) ?? []).length, 19);
  assertCrispEmbeddedSlide(artifact);
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

test("server-renders the integrated Session 4 facilitator run sheet", async () => {
  const response = await render("/session-4/facilitator", { headers: { cookie: facilitatorCookie } });
  assert.equal(response.status, 200);
  const artifact = await readFile(new URL("../private/facilitator/session-4-facilitator-run-sheet.html", import.meta.url), "utf8");
  assert.match(artifact, /Session 4 Facilitator Rehearsal Run Sheet/);
  assert.match(artifact, /Model debrief/);
  assert.match(artifact, /Resolved source citations/);
  assert.match(artifact, /Demo Day six-minute narrative/);
  assert.equal((artifact.match(/class="slide-image"/g) ?? []).length, 19);
  assertCrispEmbeddedSlide(artifact);
});

test("server-renders all four session hubs", async () => {
  for (const session of [1, 2, 3, 4]) {
    const response = await render(`/session-${session}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`SESSION[\\s\\S]{0,40}${session}`));
    assert.match(html, /Three decisions\. One cumulative checkpoint\./);
    assert.match(html, /class="material-cta deck-cta"/);
    assert.match(html, /class="material-cta reading-cta"/);
    assert.match(html, new RegExp(`href="/session-${session}/reading"`));
    assert.match(html, /Open deck/);
    assert.match(html, /Open reading/);
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

test("password gate protects facilitator pages and accepts the configured password", async () => {
  const blocked = await render("/session-3/facilitator");
  assert.ok([307, 308].includes(blocked.status));
  assert.match(blocked.headers.get("location") ?? "", /\/facilitator-access\?return_to=%2Fsession-3%2Ffacilitator/);

  const form = new URLSearchParams({ password: "15@Esnova", return_to: "/session-3/facilitator" });
  const unlocked = await render("/api/facilitator-access", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form,
  });
  assert.equal(unlocked.status, 303);
  assert.match(unlocked.headers.get("set-cookie") ?? "", /core_pm_facilitator=/);
  assert.match(unlocked.headers.get("location") ?? "", /\/session-3\/facilitator$/);

  const blockedContent = await render("/api/facilitator-content/session-3");
  assert.ok([307, 308].includes(blockedContent.status));
  assert.match(blockedContent.headers.get("location") ?? "", /return_to=%2Fsession-3%2Ffacilitator/);

  const protectedContent = await render("/api/facilitator-content/session-3", { headers: { cookie: facilitatorCookie } });
  assert.equal(protectedContent.status, 200);
  assert.match(await protectedContent.text(), /Session 3 Facilitator Rehearsal Run Sheet/);
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
