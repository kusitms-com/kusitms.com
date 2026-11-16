import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  fetchBannerStatus,
  isQaDateActive,
  QA_DATE_COOKIE,
  RECRUIT_STATUS_COOKIE,
  resolveRecruitStatusKey,
} from "@/lib/recruitStatus";

const SIGNUP_COMPLETE_COOKIE = "signup_completed";

// 페이지 요청마다 API를 부르지 않도록 배너 상태를 잠시 기억한다.
// ponytail: 서버 인스턴스별 메모리 캐시라 어드민 변경이 최대 60초 늦게 반영된다. 즉시 반영이 필요하면 TTL을 줄인다
const BANNER_CACHE_MS = 60_000;
let bannerCache: { value: string | null; expiresAt: number } | null = null;

async function getBannerStatus(): Promise<string | null> {
  if (bannerCache && bannerCache.expiresAt > Date.now()) return bannerCache.value;
  const value = await fetchBannerStatus();
  bannerCache = { value, expiresAt: Date.now() + BANNER_CACHE_MS };
  return value;
}

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/signup/complete") {
    const hasCompletedSignup = request.cookies.get(SIGNUP_COMPLETE_COOKIE)?.value === "1";
    if (!hasCompletedSignup) return NextResponse.redirect(new URL("/signup", request.url));
  }

  // 모든 페이지의 GNB가 같은 모집 상태를 쓰도록 요청마다 서버에서 판정해 쿠키로 넘긴다.
  // 어드민 배너 상태를 먼저 쓰고, API 실패·모르는 값이면 날짜 일정(한국 시간)으로 정한다.
  // 스테이징의 ?qa_date는 쿠키에 남겨 다른 페이지로 이동해도 유지한다(빈 값이면 해제, 실서비스는 무시)
  const qaParam = request.nextUrl.searchParams.get("qa_date");
  const qaDate = qaParam ?? request.cookies.get(QA_DATE_COOKIE)?.value;
  // qa_date로 QA 중이면 날짜 판정만 쓰므로 API를 부르지 않는다
  const bannerStatus = isQaDateActive(qaDate) ? null : await getBannerStatus();
  const statusKey = resolveRecruitStatusKey(bannerStatus, qaDate);

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
