import type { BlogCategory, BlogPosition } from "@/constants/blogTypes";

export type Story = {
  title: string;
  address: string;
  imageAddress: string;
  content: string;
  categoryName: string;
  cardinal: number;
  position: string;
  blog_post_id: number;
};

export type StoriesParams = {
  generation?: number;
  position?: BlogPosition;
  category?: BlogCategory;
  page?: number;
  size?: number;
};

export interface PageableData {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface StoriesData {
  content: Story[];
  pageable: PageableData;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
}

export interface StoriesResponse {
  code: number;
  message: string;
  data: StoriesData;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStories = async (params?: StoriesParams): Promise<StoriesResponse> => {
  try {
    // 쿼리 파라미터 생성
    const queryParams = new URLSearchParams();

    const page = params?.page !== undefined ? params.page : 0;
    const size = params?.size || 10;
    queryParams.append("page", page.toString());
    queryParams.append("size", size.toString());

    if (params?.generation) {
      queryParams.append("generation", params.generation.toString());
    }
    if (params?.position) {
      queryParams.append("position", params.position);
    }
    if (params?.category) {
      queryParams.append("category", params.category);
    }

    const url = `${baseUrl}/api/blogs?${queryParams.toString()}`;

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
