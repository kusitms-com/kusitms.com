import Image from "next/image";
import Link from "next/link";
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
    link: "https://www.youtube.com/@KUSITMS", // 유튜브 링크
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
];

export const Footer = () => {
  return (
    <footer className="w-full py-[60px]">
      <div className="max-w-[1180px] w-full mx-auto flex desktop:flex-row flex-col justify-between px-10">
        <div className="flex flex-col mt-1">
          <div className="flex items-center justify-between">
            <Image
              src="/footerLogo.svg"
              alt="큐시즘 로고"
              width={132}
              height={35}
              priority
              className="w-[91px] h-[24px] desktop:w-[132px] desktop:h-[35px]"
            />
          </div>
          <Link
            href="https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/policy/kusitms_31st_policy.pdf"
            target="_blank"
            className="desktop:text-body-6 text-body-8 text-gray-800 underline desktop:mt-10 mt-4"
          >
            학회정관
          </Link>
          <p className="desktop:text-body-6 text-body-8 text-gray-800 mt-3">
            KUSITMS (큐시즘, 한국대학생IT경영학회)
            <br />ⓒ 2023. KUSITMS. All rights reserved.
          </p>
        </div>
        <div className="flex-col desktop:pt-0 pt-7 desktop:self-end">
          <h4 className="text-body-5 text-gray-800 desktop:mb-5 mb-2">Contact</h4>
          <div className="flex desktop:gap-5 gap-[14px]">
            {SNSGROUPS.map((social, index) => (
              <IconLink key={index} img={social.img} link={social.link} />
            ))}
          </div>
        </div>
      </div>
      <TopScrollButton />
    </footer>
  );
};
