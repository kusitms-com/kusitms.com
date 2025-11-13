import type { BlogCategory, BlogPosition } from "@/constants/blogTypes";

export type Story = {
  title: string;
  category: string;
  address: string;
  imageAddress: string;
  content: string;
  blog_post_id: number;
};

export type StoriesParams = {
  generation?: number;
  position?: BlogPosition;
  category?: BlogCategory;
};

export interface StoriesResponse {
  code: number;
  message: string;
  data: Story[];
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStories = async (params?: StoriesParams): Promise<StoriesResponse> => {
  try {
    // 쿼리 파라미터 생성
    const queryParams = new URLSearchParams();
    if (params?.generation) {
      queryParams.append("generation", params.generation.toString());
    }
    if (params?.position) {
      queryParams.append("position", params.position);
    }
    if (params?.category) {
      queryParams.append("category", params.category);
    }

    const queryString = queryParams.toString();
    const url = `${baseUrl}/api/blogs${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 604800, tags: ["stories"] },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    throw error;
  }
};
