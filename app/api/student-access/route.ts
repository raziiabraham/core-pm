import { NextRequest, NextResponse } from "next/server";
import { safeStudentReturnTo, STUDENT_ACCESS_TOKEN, STUDENT_COOKIE, studentPasswordMatches } from "../../../lib/student-auth";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const returnTo = safeStudentReturnTo(String(form.get("return_to") ?? ""));

  if (!(await studentPasswordMatches(password))) {
    const failed = new URL("/student-access", request.url);
    failed.searchParams.set("error", "1");
    failed.searchParams.set("return_to", returnTo);
    return NextResponse.redirect(failed, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(returnTo, request.url), { status: 303 });
  response.cookies.set(STUDENT_COOKIE, STUDENT_ACCESS_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: new URL(request.url).protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
