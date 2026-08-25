import { NextRequest, NextResponse } from "next/server";
import { FACILITATOR_ACCESS_TOKEN, FACILITATOR_COOKIE, isFacilitatorPath } from "./lib/facilitator-auth";
import { isDeckPath, STUDENT_ACCESS_TOKEN, STUDENT_COOKIE } from "./lib/student-auth";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasFacilitatorAccess = request.cookies.get(FACILITATOR_COOKIE)?.value === FACILITATOR_ACCESS_TOKEN;

  if (isFacilitatorPath(pathname)) {
    if (hasFacilitatorAccess) return NextResponse.next();

    const login = new URL("/facilitator-access", request.url);
    login.searchParams.set("return_to", pathname);
    return NextResponse.redirect(login);
  }

  if (isDeckPath(pathname)) {
    const hasStudentAccess = request.cookies.get(STUDENT_COOKIE)?.value === STUDENT_ACCESS_TOKEN;
    if (hasStudentAccess || hasFacilitatorAccess) return NextResponse.next();

    const login = new URL("/student-access", request.url);
    login.searchParams.set("return_to", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}
