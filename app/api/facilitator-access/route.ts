import { NextRequest, NextResponse } from "next/server";
import { FACILITATOR_ACCESS_TOKEN, FACILITATOR_COOKIE, passwordMatches, safeFacilitatorReturnTo } from "../../../lib/facilitator-auth";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const returnTo = safeFacilitatorReturnTo(String(form.get("return_to") ?? ""));

  if (!(await passwordMatches(password))) {
    const failed = new URL("/facilitator-access", request.url);
    failed.searchParams.set("error", "1");
    failed.searchParams.set("return_to", returnTo);
    return NextResponse.redirect(failed, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(returnTo, request.url), { status: 303 });
  response.cookies.set(FACILITATOR_COOKIE, FACILITATOR_ACCESS_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: new URL(request.url).protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
