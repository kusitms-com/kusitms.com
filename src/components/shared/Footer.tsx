import Image from "next/image";
import React from "react";
import Link from "next/link";
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
    img: "/projects/icons/CafeIcon.svg", // 카페 아이콘 경로
    link: "https://cafe.naver.com/kusitms", // 카페 링크
  },
  {
    img: "/projects/icons/BlogIcon.svg", // 블로그 아이콘 경로
    link: "https://blog.naver.com/kusitms28", // 블로그 링크
  },
  {
    img: "/projects/icons/GithubIcon.svg", // 깃허브 아이콘 경로
    link: "https://github.com/kusitms-com", // 깃허브 링크
  },
];

export const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-14">
      <div className="max-w-[1180px] w-full mx-auto flex desktop:flex-row flex-col justify-between px-5">
        <div className="flex flex-col gap-4">
          <Image
            src="/footerLogo.svg"
            alt="큐시즘 로고"
            width={130}
            height={29}
            priority
            className="py-6"
          />
          <Link
            href="https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/policy/kusitms_31st_policy.pdf"
            target="_blank"
            className="text-base font-medium underline"
          >
            학회정관
          </Link>
          <p className="text-base font-normal">
            KUSITMS (큐시즘, 한국대학생IT경영학회)
            <br />ⓒ 2023. KUSITMS. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-extrabold mb-6 desktop:mt-[78px] mt-[40px]">
            Contact
          </h4>
          <div className="flex gap-6">
            {SNSGROUPS.map((social, index) => (
              <IconLink key={index} img={social.img} link={social.link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
