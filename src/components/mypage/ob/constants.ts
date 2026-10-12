import { Clock3, FileText, Heart, MessageSquare, User } from "lucide-react";
import type { ObMentoringFormState, SideNavItem } from "@/components/mypage/ob/types";

export const initialForm: ObMentoringFormState = {
  exposureEnabled: false,
  oneLineIntro:
    "큐시즘 29기 백엔드 파트로 활동했고, 29기 때 큐책을 개발하며 DB관리 최적화를 담당하였습니다.",
  careerSummary: "백엔드 서버 개발 3년차",
  jobType: "개발",
  profileFile: "IMG_3456.PNG",
  meetupProject: "큐책",
  meetupProjectPublic: true,
  companyName: "현대오토에버",
  companyPrivate: true,
  companyType: "대기업",
  companyDomain: "B2B 모빌리티 소프트웨어 기업",
  currentTeam: "정보 보안팀",
  mentoringTitle: "[커피챗] 취업, 이직, 모의 면접, 포트폴리오 멘토링",
  mentoringDescription:
    '취업을 준비하며 가장 막막했던 건 "내 포트폴리오와 지원서가 정말 통할까?" 하는 불안감이었어요. 저 역시 같은 고민을 했고, 수십 번의 첨삭과 모의 면접 끝에 네카라쿠배 중 한 곳에 합격할 수 있었습니다.\n\n이 멘토링에서는 아래 내용을 함께 다뤄요.\n\n합격한 포트폴리오/지원서 실제 사례 공유\n직무에 맞춘 포트폴리오 어떤 포인트 잡기\n자주 나오는 기술/인성 면접 질문 모의 연습\n커리어 방향에 대한 솔직한 1:1 상담\n\n부담 없이 편하게 신청해 주세요!',
  meetingType: "1:1",
  progressWays: ["화상회의", "대면"],
  duration: "60분",
};

export const sideNavItems: SideNavItem[] = [
  { label: "멘토링 관리", icon: User, href: "/mypage/ob" },
  { label: "일정 등록", icon: Clock3, href: "/mypage/ob/schedule" },
  { label: "멘토링 내역", icon: FileText },
  { label: "채팅방", icon: MessageSquare },
  { label: "받은 후기", icon: Heart },
];

export const jobTypes = ["PM/기획", "개발", "디자인", "마케팅", "운영", "기타"];
export const companyTypes = ["대기업", "중소기업", "스타트업", "기타"];
export const durations = ["30분", "40분", "50분", "60분", "70분", "80분", "90분"];
