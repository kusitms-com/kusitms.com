export interface PostEmailResponse {
  code: number;
  message: string;
  data: {
    id: string;
    email: string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/**
 * 모집 알림 이메일 등록 (POST /api/emails, 본문 { email }).
 * 실패 시 서버가 준 message(누락·형식 오류·중복 모두 400)를 담은 Error를 던진다
 */
export const postEmail = async (email: string): Promise<PostEmailResponse> => {
  const res = await fetch(`${baseUrl}/api/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(typeof body?.message === "string" ? body.message : `HTTP ${res.status}`);
  }

  return res.json();
};
