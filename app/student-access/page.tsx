import Link from "next/link";
import "./student-access.css";
import { safeStudentReturnTo } from "../../lib/student-auth";

export default async function StudentAccess({ searchParams }: { searchParams: Promise<{ return_to?: string; error?: string }> }) {
  const params = await searchParams;
  const returnTo = safeStudentReturnTo(params.return_to);
  const sessionMatch = returnTo.match(/\/session-(\d)\/deck/);
  const sessionPath = sessionMatch ? `/session-${sessionMatch[1]}` : "/";

  return <main className="student-access">
    <div className="student-access-backdrop" aria-hidden="true"><span>CORE / PM</span><b>Live session deck</b></div>
    <section role="dialog" aria-modal="true" aria-labelledby="student-access-title">
      <p>STUDENT ACCESS</p>
      <h1 id="student-access-title">Open the live deck.</h1>
      <span>Enter the course password shared with your cohort.</span>
      <form method="post" action="/api/student-access">
        <input type="hidden" name="return_to" value={returnTo} />
        <label htmlFor="student-password">Course password</label>
        <input id="student-password" name="password" type="password" autoComplete="current-password" required />
        {params.error === "1" && <p role="alert">That password is incorrect. Try again.</p>}
        <button type="submit">Open deck <i aria-hidden="true">›</i></button>
      </form>
      <Link href={sessionPath}>Cancel</Link>
    </section>
  </main>;
}
