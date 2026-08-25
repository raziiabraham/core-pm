import { NextRequest, NextResponse } from "next/server";
import { FACILITATOR_ACCESS_TOKEN, FACILITATOR_COOKIE } from "./facilitator-auth";

export function serveFacilitatorContent(request: NextRequest, html: string, session: number) {
  if (request.cookies.get(FACILITATOR_COOKIE)?.value !== FACILITATOR_ACCESS_TOKEN) {
    const login = new URL("/facilitator-access", request.url);
    login.searchParams.set("return_to", `/session-${session}/facilitator`);
    return NextResponse.redirect(login);
  }

  return new Response(html, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Security-Policy": "frame-ancestors 'self'",
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
    },
  });
}
