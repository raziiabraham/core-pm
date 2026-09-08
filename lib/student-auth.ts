export const STUDENT_COOKIE = "core_pm_student";
export const STUDENT_ACCESS_TOKEN = "c0d5cea7082d17e1a995c2d5736f8f8e19748768b6440e3279d4c16e1021c74d";

const STUDENT_PASSWORD_HASH = "bd7e65dd40e27f479b35e760d2b3fad34a9e8c70c2c374b35ad353fc1facff40";

export function isDeckPath(pathname: string) {
  return pathname === "/deck" || /^\/session-[1-4]\/deck\/?$/.test(pathname);
}

export function safeStudentReturnTo(value: string | null | undefined) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/session-1/deck";
  return isDeckPath(value) ? value : "/session-1/deck";
}

export async function studentPasswordMatches(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return hash === STUDENT_PASSWORD_HASH;
}
