import { NextRequest } from "next/server";
import html from "../../../../private/facilitator/session-3-facilitator-run-sheet.html?raw";
import { serveFacilitatorContent } from "../../../../lib/facilitator-content";

export function GET(request: NextRequest) {
  return serveFacilitatorContent(request, html, 3);
}
