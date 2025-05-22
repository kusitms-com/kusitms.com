"use client";

import React from "react";
import { MeetupItem } from "@/service/projects/getMeetupProjects";
import { Card } from "../projects";

const display_list: MeetupItem[] = [
  {
    cardinal: 31,
    name: "큐시즘 프로젝트",
    intro: "IT 연합 동아리 큐시즘의 프로젝트 플랫폼",
    one_line_intro: "IT 연합 동아리 큐시즘의 혁신적인 프로젝트 플랫폼",
    type: "웹 서비스",
    team: {
      name: "큐시즘 팀",
      planner: ["김기획", "이기획"],
      designer: ["박디자인", "최디자인"],
      frontend: ["정프론트", "강프론트"],
      backend: ["윤백엔드", "임백엔드"],
      ios: [],
      aos: [],
    },
    meetup_id: 1,
    logo_url: "/images/kusitms-logo.png",
    poster_url: "/images/project-banner1.png",
    instagram_url: "https://instagram.com/kusitms",
    github_url: "https://github.com/kusitms",
    app_url: "https://kusitms.com",
    start_date: "2024-01-01",
    end_date: "2024-06-30",
    tags: ["웹", "플랫폼"],
  },
  {
    cardinal: 31,
    name: "스타트업 협업 프로젝트",
    intro: "혁신적인 스타트업과 함께하는 서비스 개발",
    one_line_intro: "스타트업과 함께 만드는 혁신적인 서비스",
    type: "모바일 앱",
    team: {
      name: "스타트업 팀",
      planner: ["송기획", "한기획"],
      designer: ["조디자인", "문디자인"],
      frontend: [],
      backend: ["김백엔드", "이백엔드"],
      ios: ["박iOS"],
      aos: ["최Android"],
    },
    meetup_id: 2,
    logo_url: "/images/startup-logo.png",
    poster_url: "/images/project-banner2.png",
    instagram_url: "https://instagram.com/startup",
    github_url: "https://github.com/startup",
    app_url: "https://startup-project.com",
    start_date: "2024-02-01",
    end_date: "2024-07-31",
    tags: ["모바일", "서비스"],
  },
  {
    cardinal: 31,
    name: "소셜 임팩트 프로젝트",
    intro: "사회문제 해결을 위한 IT 서비스 개발",
    one_line_intro: "더 나은 사회를 만드는 IT 서비스",
    type: "웹 서비스",
    team: {
      name: "소셜임팩트 팀",
      planner: ["정기획", "강기획"],
      designer: ["윤디자인", "임디자인"],
      frontend: ["송프론트", "한프론트"],
      backend: ["조백엔드", "문백엔드"],
      ios: [],
      aos: [],
    },
    meetup_id: 3,
    logo_url: "/images/social-logo.png",
    poster_url: "/images/project-banner3.png",
    instagram_url: "https://instagram.com/social",
    github_url: "https://github.com/social",
    app_url: "https://social-impact.com",
    start_date: "2024-03-01",
    end_date: "2024-08-31",
    tags: ["웹", "소셜"],
  },
  {
    cardinal: 31,
    name: "핀테크 솔루션",
    intro: "혁신적인 금융 서비스 플랫폼 개발",
    one_line_intro: "새로운 금융의 미래를 여는 핀테크 서비스",
    type: "웹 서비스",
    team: {
      name: "핀테크 팀",
      planner: ["박기획", "최기획"],
      designer: ["정디자인", "강디자인"],
      frontend: ["윤프론트", "임프론트"],
      backend: ["송백엔드", "한백엔드"],
      ios: [],
      aos: [],
    },
    meetup_id: 4,
    logo_url: "/images/fintech-logo.png",
    poster_url: "/images/project-banner4.png",
    instagram_url: "https://instagram.com/fintech",
    github_url: "https://github.com/fintech",
    app_url: "https://fintech-solution.com",
    start_date: "2024-04-01",
    end_date: "2024-09-30",
    tags: ["핀테크", "플랫폼"],
  },
  {
    cardinal: 31,
    name: "헬스케어 서비스",
    intro: "디지털 헬스케어 솔루션 개발",
    one_line_intro: "건강한 삶을 위한 디지털 헬스케어",
    type: "모바일 앱",
    team: {
      name: "헬스케어 팀",
      planner: ["조기획", "문기획"],
      designer: ["송디자인", "한디자인"],
      frontend: [],
      backend: ["정백엔드", "강백엔드"],
      ios: ["윤iOS"],
      aos: ["임Android"],
    },
    meetup_id: 5,
    logo_url: "/images/healthcare-logo.png",
    poster_url: "/images/project-banner5.png",
    instagram_url: "https://instagram.com/healthcare",
    github_url: "https://github.com/healthcare",
    app_url: "https://healthcare-service.com",
    start_date: "2024-05-01",
    end_date: "2024-10-31",
    tags: ["헬스케어", "모바일"],
  },
];

export const DisplayListContainer = () => {
  // const [projects, setProjects] = useState([]);
  // const [cardinal, setCardinal] = useState("");

  return (
    <div className="w-full mt-[100px] mb-[180px]">
      <div className="grid grid-cols-3 gap-5">
        {display_list.map((project) => (
          <Card key={project.meetup_id}>
            <Card.Poster src={project.poster_url} />
            <Card.Logo src={project.logo_url} />
            <Card.Info>
              <Card.Cardinal>{project.cardinal}기</Card.Cardinal>
              <Card.ProjectName>{project.name}</Card.ProjectName>
              <Card.ContentIntro>{project.one_line_intro}</Card.ContentIntro>
              <Card.CategoryContainer>
                {project.tags.map((tag, index) => (
                  <Card.Category key={index}>{tag}</Card.Category>
                ))}
              </Card.CategoryContainer>
            </Card.Info>
          </Card>
        ))}
      </div>
    </div>
  );
};
