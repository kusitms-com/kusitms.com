import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SIGNUP_COMPLETE_COOKIE = "signup_completed";

export function proxy(request: NextRequest) {
  const hasCompletedSignup = request.cookies.get(SIGNUP_COMPLETE_COOKIE)?.value === "1";

  if (!hasCompletedSignup) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/signup/complete",
};
