export interface Review {
  name: string;
  team: string;
  cardinal: number;
  review: string;
  review_id: number;
}

export interface ReviewResponse {
  code: number;
  message: string;
  data: {
    review_count: number;
    review_list: Review[];
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getReviews = async (team: string, cardinal?: number): Promise<ReviewResponse> => {
  try {
    const query = new URLSearchParams({ team });
    if (cardinal !== undefined) query.append("cardinal", String(cardinal));

    const res = await fetch(`${baseUrl}/api/reviews?${query.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    return res.json();
  } catch (err) {
    console.error("Failed to fetch meetup projects:", err);
    throw err;
  }
};
