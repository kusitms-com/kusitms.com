import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconLink } from "./LinkCircle";

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
          <Image
            src="/footerLogo.svg"
            alt="큐시즘 로고"
            width={121}
            height={20}
            priority
            className="py-[7px] pr-[10.2px]"
          />
          <Link
            href="https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/policy/kusitms_31st_policy.pdf"
            target="_blank"
            className="text-body-6 text-gray-800 underline mt-10"
          >
            학회정관
          </Link>
          <p className="text-body-6 text-gray-800 mt-3">
            KUSITMS (큐시즘, 한국대학생IT경영학회)
            <br />ⓒ 2023. KUSITMS. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-body-5 text-gray-800 mb-5 desktop:mt-[79px] mt-[40px]">Contact</h4>
          <div className="flex gap-5">
            {SNSGROUPS.map((social, index) => (
              <IconLink key={index} img={social.img} link={social.link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
