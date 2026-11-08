import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getRecruitStatus,
  QA_DATE_COOKIE,
  RECRUIT_STATUS_COOKIE,
  resolveKstDate,
  toStatusKey,
} from "@/lib/recruitStatus";

const SIGNUP_COMPLETE_COOKIE = "signup_completed";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/signup/complete") {
    const hasCompletedSignup = request.cookies.get(SIGNUP_COMPLETE_COOKIE)?.value === "1";
    if (!hasCompletedSignup) return NextResponse.redirect(new URL("/signup", request.url));
  }

  // 모든 페이지의 GNB가 같은 모집 상태를 쓰도록 요청마다 서버(한국 시간)에서 판정해 쿠키로 넘긴다.
  // 스테이징의 ?qa_date는 쿠키에 남겨 다른 페이지로 이동해도 유지한다(빈 값이면 해제, 실서비스는 무시)
  const qaParam = request.nextUrl.searchParams.get("qa_date");
  const qaDate = qaParam ?? request.cookies.get(QA_DATE_COOKIE)?.value;
  const statusKey = toStatusKey(getRecruitStatus(resolveKstDate(qaDate)));

  const response = NextResponse.next();
  response.cookies.set(RECRUIT_STATUS_COOKIE, statusKey, { path: "/", sameSite: "lax" });
  if (qaParam !== null && process.env.VERCEL_ENV !== "production") {
    if (qaParam) response.cookies.set(QA_DATE_COOKIE, qaParam, { path: "/", sameSite: "lax" });
    else response.cookies.delete(QA_DATE_COOKIE);
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
