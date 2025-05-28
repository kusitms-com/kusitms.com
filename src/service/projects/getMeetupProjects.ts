interface Team {
  name: string;
  planner: string[];
  designer: string[];
  frontend: string[];
  backend: string[];
  ios: string[];
  aos: string[];
}

export interface MeetupItem {
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
  tags: string[];
}

export interface MeetupResponse {
  data: {
    meetup_count: number;
    meetup_list: MeetupItem[];
  };
}

export interface MeetupProjectDetailResponse {
  data: {
    cardinal: number;
    name: string;
    intro: string;
    type: string;
    team: {
      name: string;
      planner: string[];
      designer: string[];
      frontend: string[];
      backend: string[];
      ios: string[];
      aos: string[];
    };
    meetup_id: 0;
    one_line_intro: string;
    logo_url: string;
    poster_url: string;
    web_thumbnail_url: string;
    instagram_url: string;
    github_url: string;
    app_url: string;
    start_date: string;
    end_date: string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getMeetupProjects = async (
  cardinal: string,
  batch?: string
): Promise<MeetupResponse> => {
  try {
    const url = `${baseUrl}/api/projects/meetup?batch=${batch}&cardinal=${cardinal}&order=desc`;

    const res = await fetch(url, {
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

export const getMeetupProjectDetail = async (
  projectId: string
): Promise<MeetupProjectDetailResponse> => {
  try {
    const res = await fetch(`${baseUrl}/api/projects/meetup/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 604800, tags: ["meetupProject", "projectId"] },
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
