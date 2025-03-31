export interface Review {
  name: string;
  team: string;
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

export const getReviews = async (): Promise<ReviewResponse> => {
  try {
    const res = await fetch(`${baseUrl}/api/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 604800, tags: ["reviews"] },
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
