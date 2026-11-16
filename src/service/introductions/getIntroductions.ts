export interface IntroductionTeam {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly image_link: string | null;
}

export interface IntroductionActivity {
  readonly id?: number;
  readonly name: string;
  readonly description: string;
  readonly image_url1: string | null;
  readonly image_url2: string | null;
}

export interface IntroductionLecture {
  readonly id: number;
  readonly name: string;
  readonly corporation: string;
  readonly description: string;
  readonly image_link: string | null;
}

export interface IntroductionData {
  readonly teams: readonly IntroductionTeam[];
  readonly activities: readonly IntroductionActivity[];
  readonly banner_status: string;
  readonly banner_content: string;
  readonly member_count: number;
  readonly project_count: number;
  readonly university_count: number;
  readonly intro_youtube_link: string | null;
  readonly planning_image_url: string | null;
  readonly design_image_url: string | null;
  readonly frontend_image_url: string | null;
  readonly backend_image_url: string | null;
  readonly partner_logo_urls: readonly string[];
  readonly meetup_image_urls: readonly string[];
  readonly expert_lecture: readonly IntroductionLecture[];
  readonly ob_lecture: readonly IntroductionLecture[];
  readonly sponsor_image_urls: readonly string[];
}

export interface IntroductionResponse {
  readonly code: number;
  readonly message: string;
  readonly data: IntroductionData;
}

export class IntroductionHttpError extends Error {
  constructor(readonly status: number) {
    super(`Failed to fetch introductions: HTTP ${status}`);
    this.name = "IntroductionHttpError";
  }
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getIntroductions = async (): Promise<IntroductionResponse> => {
  const res = await fetch(`${baseUrl}/api/introductions`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // 어드민에서 바꾼 소개 정보가 바로 보이도록 캐시하지 않는다
    cache: "no-store",
  });

  if (!res.ok) {
    throw new IntroductionHttpError(res.status);
  }

  return res.json();
};
