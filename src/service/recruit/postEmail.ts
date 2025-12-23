export interface PostEmailResponse {
  code: number;
  message: string;
  data: {
    id: string;
    email: string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const postEmail = async (email: string): Promise<PostEmailResponse> => {
  try {
    const res = await fetch(`${baseUrl}/api/emails?email=${encodeURIComponent(email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      // 서버가 반환하는 에러 메시지를 그대로 throw
      const errorBody = await res.text();
      throw new Error(errorBody);
    }

    return res.json();
  } catch (err) {
    console.error("Failed to post email:", err);
    throw err;
  }
};
