import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      className="relative w-[370px] h-[494px] rounded-[40px] flex flex-col bg-white pb-6 
    hover:scale-102 hover:cursor-pointer transition-transform duration-200"
    >
      {children}
    </div>
  );
};

const Poster = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt="poster"
    className="object-cover overflow-hidden rounded-t-[40px]"
    width={370}
    height={285}
    style={{ width: 370, height: 285 }}
  />
);

const Logo = ({ src }: { src: string }) => (
  <div className="absolute mt-[230px] w-[95px] h-[95px] rounded-full top-0 right-[24px] bg-white flex justify-center items-center overflow-hidden">
    <Image src={src} alt="logo" width={95} height={95} />
  </div>
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col text-[#2F3038] px-6">{children}</div>
);

const Cardinal = ({ children }: { children: ReactNode }) => (
  <div className="mt-[22px] text-[16px]">{children}</div>
);

const ProjectName = ({ children }: { children: ReactNode }) => (
  <div className="text-[24px] font-bold">{children}</div>
);

const ContentIntro = ({ children }: { children: ReactNode }) => (
  <div className="text-[16px] font-normal mt-[10px] min-h-[50px] line-clamp-2">
    {children}
  </div>
);

const CategoryContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row gap-2 mt-2">{children}</div>
);

const Category = ({ children }: { children: ReactNode }) => (
  <div className="border border-[#2f3038] rounded-[15px] px-[12px] py-[4px] text-[#2f3038]">
    {children}
  </div>
);

const LinkCategory = ({ href }: { href: string }) => (
  <Link
    href={href}
    target="_blank"
    className="w-[44px] h-[44px] bg-[#45464f] flex justify-center items-center p-3 rounded-full"
  >
    <Image
      src="/projects/icons/LinkIcon.svg"
      alt="서비스 링크"
      width={30}
      height={30}
      style={{ width: 30, height: 30 }}
    />
  </Link>
);

const GithubCategory = ({ href }: { href: string }) => (
  <Link
    href={href}
    target="_blank"
    className="w-[44px] h-[44px] bg-[#45464f] flex justify-center items-center p-2 rounded-full"
  >
    <Image
      src="/projects/icons/GithubIcon.svg"
      alt="서비스 링크"
      width={30}
      height={30}
      style={{ width: 30, height: 30 }}
    />
  </Link>
);

const InstagramCategory = ({ href }: { href: string }) => (
  <Link
    href={href}
    target="_blank"
    className="w-[44px] h-[44px] bg-[#45464f] flex justify-center items-center p-2 rounded-full"
  >
    <Image
      src="/projects/icons/InstagramIcon.svg"
      alt="서비스 링크"
      width={30}
      height={30}
      style={{ width: 30, height: 30 }}
    />
  </Link>
);

// 컴파운디드 패턴 연결
Card.Poster = Poster;
Card.Logo = Logo;
Card.Info = Info;
Card.Cardinal = Cardinal;
Card.ProjectName = ProjectName;
Card.ContentIntro = ContentIntro;
Card.CategoryContainer = CategoryContainer;
Card.Category = Category;
Card.Link = LinkCategory;
Card.Github = GithubCategory;
Card.Instagram = InstagramCategory;
