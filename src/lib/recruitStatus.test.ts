import assert from "node:assert/strict";
import { test } from "node:test";
import { bannerStatusToKey, fetchBannerStatus, resolveRecruitStatusKey } from "./recruitStatus.ts";

// RECRUIT_SCHEDULE(35기): 공고 2027-01-02, 운영진 1/7~1/11, 학회원 1/16~1/23
const CLOSED_DAY = new Date("2026-11-15T12:00:00+09:00");
const STAFF_DAY = new Date("2027-01-08T12:00:00+09:00");

const jsonResponse = (body: unknown, status = 200) =>
  (async () => new Response(JSON.stringify(body), { status })) as unknown as typeof fetch;

test("배너 상태 문구를 모집 상태로 바꾼다", () => {
  assert.equal(bannerStatusToKey("모집 마감"), "closed");
  assert.equal(bannerStatusToKey("모집 예정"), "upcoming");
  assert.equal(bannerStatusToKey("운영진 모집"), "open-staff");
  assert.equal(bannerStatusToKey("학회원 모집"), "open-member");
  assert.equal(bannerStatusToKey(" 학회원 모집 "), "open-member");
});

test("값이 없거나 모르는 값이면 null", () => {
  assert.equal(bannerStatusToKey(null), null);
  assert.equal(bannerStatusToKey(undefined), null);
  assert.equal(bannerStatusToKey(""), null);
  assert.equal(bannerStatusToKey("MEMBER_RECRUIT"), null);
  assert.equal(bannerStatusToKey("toString"), null);
});

test("배너 상태가 날짜 일정보다 우선한다", () => {
  assert.equal(resolveRecruitStatusKey("학회원 모집", undefined, CLOSED_DAY), "open-member");
  assert.equal(resolveRecruitStatusKey("모집 마감", undefined, STAFF_DAY), "closed");
});

test("배너 값이 없거나 모르는 값이면 날짜 일정으로 정한다", () => {
  assert.equal(resolveRecruitStatusKey(null, undefined, CLOSED_DAY), "closed");
  assert.equal(resolveRecruitStatusKey(null, undefined, STAFF_DAY), "open-staff");
  assert.equal(resolveRecruitStatusKey("알 수 없음", undefined, STAFF_DAY), "open-staff");
});

test("스테이징 qa_date가 있으면 배너 대신 날짜로 정한다", () => {
  assert.equal(resolveRecruitStatusKey("모집 마감", "2027-01-17", CLOSED_DAY), "open-member");
  assert.equal(resolveRecruitStatusKey("모집 마감", "2027-01-17T09:00", CLOSED_DAY), "open-member");
  // 형식이 틀린 qa_date는 무시하고 배너를 쓴다
  assert.equal(resolveRecruitStatusKey("모집 마감", "tomorrow", STAFF_DAY), "closed");
});

test("API 응답의 banner_status를 읽는다", async () => {
  const fetcher = jsonResponse({ data: { banner_status: "운영진 모집" } });
  assert.equal(await fetchBannerStatus(fetcher), "운영진 모집");
});

test("API가 실패하면 null을 돌려주고 날짜 일정으로 대체된다", async () => {
  const failures: (typeof fetch)[] = [
    (async () => {
      throw new Error("network");
    }) as unknown as typeof fetch,
    jsonResponse({ message: "error" }, 500),
    jsonResponse({ data: { banner_status: null } }),
    jsonResponse({ data: {} }),
    (async () => new Response("not json")) as unknown as typeof fetch,
  ];
  for (const fetcher of failures) {
    const bannerStatus = await fetchBannerStatus(fetcher);
    assert.equal(bannerStatus, null);
    assert.equal(resolveRecruitStatusKey(bannerStatus, undefined, STAFF_DAY), "open-staff");
  }
});
