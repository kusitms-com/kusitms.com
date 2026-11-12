export interface CorporateProjectItem {
  cardinal: number;
  name: string;
  content: string;
  category: string[];
  corporate_id: number;
  logo_url: string;
  banner_url: string;
}

export interface CorporateResponse {
  data: {
    corporateCount: number;
    corporateList: CorporateProjectItem[];
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCorporateProjects = async (cardinal: string): Promise<CorporateResponse> => {
  const url =
    cardinal !== ""
      ? `${baseUrl}/api/projects/corporate?cardinal=${cardinal}&order=desc`
      : `${baseUrl}/api/projects/corporate?order=desc`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // 어드민에서 추가·수정·삭제한 프로젝트가 바로 보이도록 캐시하지 않는다
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch meetup projects:", err);
    throw err;
  }
};
