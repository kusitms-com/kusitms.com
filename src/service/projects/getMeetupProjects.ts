interface Team {
  name: string;
  planner: string[];
  designer: string[];
  frontend: string[];
  backend: string[];
  ios: string[];
  aos: string[];
}

interface MeetupItem {
  cardinal: number;
  name: string;
  intro: string;
  type: string;
  team: Team;
  meetup_id: number;
  one_line_intro: string;
  logo_url: string;
  poster_url: string;
  instagram_url: string;
  github_url: string;
  app_url: string;
  start_date: string;
  end_date: string;
}

export interface MeetupResponse {
  data: {
    meetup_count: number;
    meetup_list: MeetupItem[];
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getMeetupProjects = async (
  order: "asc" | "desc"
): Promise<MeetupResponse> => {
  try {
    const res = await fetch(`${baseUrl}/api/projects/meetup?order=${order}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 604800, tags: ["meetupProjects"] },
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
