export const FACILITATOR_COOKIE = "core_pm_facilitator";
export const FACILITATOR_ACCESS_TOKEN = "16ebbfd18684dc8975f499abab78bb0e574ae573576f5b5b95f5fa6a3c379765";

const FACILITATOR_PASSWORD_HASH = "9e27b0fdddf5a28f3686ec6109ddd112e138ae649dee5df371135deea3733eab";

export function isFacilitatorPath(pathname: string) {
  return pathname === "/facilitator" ||
    /^\/session-[1-4]\/facilitator\/?$/.test(pathname);
}

export function safeFacilitatorReturnTo(value: string | null | undefined) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/session-1/facilitator";
  return isFacilitatorPath(value) ? value : "/session-1/facilitator";
}

export async function passwordMatches(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return hash === FACILITATOR_PASSWORD_HASH;
}
