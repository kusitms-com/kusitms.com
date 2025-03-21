interface CorporateResponse {
  data: {
    corporateCount: number;
    corporateList: [
      {
        cardinal: number;
        name: string;
        content: string;
        category: string[];
        corporate_id: number;
        logo_url: string;
        banner_url: string;
      }
    ];
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCorporateProjects = async (): Promise<CorporateResponse> => {
  try {
    const res = await fetch(`${baseUrl}/api/projects/corporate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 604800, tags: ["corporateProjects"] },
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
