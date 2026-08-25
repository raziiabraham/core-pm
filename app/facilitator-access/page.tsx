import Link from "next/link";
import "./facilitator-access.css";
import { safeFacilitatorReturnTo } from "../../lib/facilitator-auth";

export default async function FacilitatorAccess({ searchParams }: { searchParams: Promise<{ return_to?: string; error?: string }> }) {
  const params = await searchParams;
  const returnTo = safeFacilitatorReturnTo(params.return_to);

  return <main className="facilitator-access">
    <section>
      <Link href="/" className="access-mark">CORE / PM</Link>
      <div className="access-copy"><p>FACILITATOR MATERIALS</p><h1>Private rehearsal access.</h1><span>The run sheets contain the full teaching script, model debriefs, recovery language, and source notes. Enter the facilitator password to continue.</span></div>
      <form method="post" action="/api/facilitator-access">
        <input type="hidden" name="return_to" value={returnTo} />
        <label htmlFor="facilitator-password">Password</label>
        <div><input id="facilitator-password" name="password" type="password" autoComplete="current-password" required /><button type="submit">Unlock <i aria-hidden="true">›</i></button></div>
        {params.error === "1" && <p role="alert">That password is incorrect. Try again.</p>}
      </form>
      <footer><Link href="/">← Return to course home</Link><span>Access remains unlocked for 12 hours on this browser.</span></footer>
    </section>
    <aside><span>FACILITATOR-ONLY</span><b>Slides</b><i /><b>Full rehearsal script</b><i /><b>Model debriefs</b><i /><b>Source citations</b></aside>
  </main>;
}
