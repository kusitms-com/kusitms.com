import { Footer as FooterUI } from "@kusitms.com/ui";
import Image from "next/image";
import { IconLink } from "./LinkCircle";
import TopScrollButton from "./TopScrollButton";

const SNSGROUPS = [
  {
    img: "/projects/icons/EmailIcon.svg", // 이메일 아이콘 경로
    link: "mailto:kusitms@gmail.com", // 이메일 링크
  },
  {
    img: "/projects/icons/InstagramIcon.svg", // 인스타그램 아이콘 경로
    link: "https://www.instagram.com/kusitms_official/", // 인스타그램 링크
  },
  {
    img: "/projects/icons/YoutubeIcon.svg", // 유튜브 아이콘 경로
    link: "https://www.youtube.com/@KUSITMS_Official", // 유튜브 링크
  },
  {
    img: "/projects/icons/GithubIcon.svg", // 깃허브 아이콘 경로
    link: "https://github.com/kusitms-com", // 깃허브 링크
  },
  {
    img: "/projects/icons/BlogIcon.svg", // 블로그 아이콘 경로
    link: "https://blog.naver.com/kusitms28", // 블로그 링크
  },
  {
    img: "/projects/icons/CafeIcon.svg", // 카페 아이콘 경로
    link: "https://cafe.naver.com/kusitms", // 카페 링크
  },
  {
    img: "/projects/icons/LinkedinIcon.svg", // 링크드인 아이콘 경로
    link: "https://www.linkedin.com/company/kusitms-official/", // 링크드인 링크
    size: 20,
  },
];

export const Footer = () => {
  const logo = (
    <Image
      src="/footerLogo.svg"
      alt="큐시즘 로고"
      width={132}
      height={35}
      priority
      className="h-[24px] w-[91px] desktop:h-[35px] desktop:w-[132px]"
    />
  );

  const contactIcons = SNSGROUPS.map((social) => (
    <IconLink key={social.link} img={social.img} link={social.link} size={social.size} />
  ));

  return (
    <FooterUI
      logo={logo}
      contactIcons={contactIcons}
      bylawsHref="https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/policy/kusitms_31st_policy.pdf"
      scrollTopButton={<TopScrollButton />}
    />
  );
};
