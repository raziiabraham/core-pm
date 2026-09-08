import { NextRequest, NextResponse } from "next/server";
import { isDeckPath, STUDENT_ACCESS_TOKEN, STUDENT_COOKIE } from "./lib/student-auth";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (isDeckPath(pathname)) {
    const hasStudentAccess = request.cookies.get(STUDENT_COOKIE)?.value === STUDENT_ACCESS_TOKEN;
    if (hasStudentAccess) return NextResponse.next();

    const login = new URL("/student-access", request.url);
    login.searchParams.set("return_to", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}
