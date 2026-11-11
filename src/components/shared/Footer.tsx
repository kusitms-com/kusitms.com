import {
  BlogIcon,
  CafeIcon,
  FooterMobileLogo,
  GithubIcon,
  HeaderDesktopLogo,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  YoutubeIcon,
} from "@kusitms.com/icons";
import { Footer as FooterUI } from "@kusitms.com/ui";
import { IconLink } from "./LinkCircle";
import TopScrollButton from "./TopScrollButton";

// 시안(861:76060)의 아이콘 순서와 툴팁 문구. 아이콘은 디자인 시스템(@kusitms.com/icons)을 쓴다
const SNSGROUPS = [
  {
    Icon: MailIcon,
    label: "이메일",
    tooltip: "kusitms@gmail.com",
    link: "mailto:kusitms@gmail.com",
  },
  {
    Icon: InstagramIcon,
    label: "인스타그램",
    tooltip: "@kusitms_official",
    link: "https://www.instagram.com/kusitms_official/",
  },
  {
    Icon: YoutubeIcon,
    label: "유튜브",
    tooltip: "@KUSITMS_Official",
    link: "https://www.youtube.com/@KUSITMS_Official",
  },
  {
    Icon: GithubIcon,
    label: "깃허브",
    tooltip: "kusitms-com",
    link: "https://github.com/kusitms-com",
  },
  {
    Icon: BlogIcon,
    label: "네이버 블로그",
    tooltip: "KUSITMS 블로그",
    link: "https://blog.naver.com/kusitms28",
  },
  {
    Icon: CafeIcon,
    label: "네이버 카페",
    tooltip: "KUSITMS 카페",
    link: "https://cafe.naver.com/kusitms",
  },
  {
    Icon: LinkedinIcon,
    label: "링크드인",
    tooltip: "KUSITMS 링크드인",
    link: "https://www.linkedin.com/company/kusitms-official/",
  },
];

export const Footer = () => {
  // 시안(861:76060): 데스크톱은 헤더와 같은 심볼+워드마크 로고(132x24), 모바일은 워드마크만
  const logo = <HeaderDesktopLogo className="h-6 w-[132px]" aria-label="큐시즘 로고" />;
  const mobileLogo = <FooterMobileLogo aria-label="큐시즘 로고" />;

  const contactIcons = SNSGROUPS.map(({ Icon, ...social }, index) => (
    <IconLink
      key={social.link}
      icon={<Icon className={Icon === LinkedinIcon ? "size-5" : "size-6"} />}
      link={social.link}
      label={social.label}
      tooltip={social.tooltip}
      tooltipAlign={index === SNSGROUPS.length - 1 ? "end" : "center"}
    />
  ));

  return (
    <FooterUI
      logo={logo}
      mobileLogo={mobileLogo}
      contactIcons={contactIcons}
      bylawsHref="https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/policy/kusitms_31st_policy.pdf"
      scrollTopButton={<TopScrollButton />}
    />
  );
};
