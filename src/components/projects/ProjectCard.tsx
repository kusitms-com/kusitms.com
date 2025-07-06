import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Card({ children, onClick }: CardProps) {
  return (
    <div
      className="relative desktop:w-[370px] desktop:h-[494px] w-[320px] h-[400px] desktop:rounded-[40px] rounded-[20px] flex flex-col bg-[#2F3038] pb-6 
    hover:scale-102 hover:cursor-pointer transition-transform duration-200 overflow-hidden"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

const Poster = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt="poster"
    className="object-cover overflow-hidden"
    width={370}
    height={285}
    style={{ width: 370, height: 285 }}
    unoptimized
  />
);

const Logo = ({ src }: { src: string }) => (
  <div className="absolute mt-[230px] desktop:w-[95px] desktop:h-[95px] w-[78px] h-[78px] rounded-full desktop:top-0 top-[-60px] desktop:right-[24px] right-[16px] bg-white flex justify-center items-center overflow-hidden">
    <Image src={src} alt="logo" width={95} height={95} unoptimized />
  </div>
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col text-[#fff] px-6">{children}</div>
);

const Cardinal = ({ children }: { children: ReactNode }) => (
  <div className="mt-[22px] desktop:text-[16px] text-[13px] text-[#62EFE5]">
    {children}
  </div>
);

const ProjectName = ({ children }: { children: ReactNode }) => (
  <div className="desktop:text-[24px] text-[20px] font-bold">{children}</div>
);

const ContentIntro = ({ children }: { children: ReactNode }) => (
  <div className="desktop:text-[16px] text-[13px] font-normal mt-[10px] min-h-[50px] line-clamp-2">
    {children}
  </div>
);

const CategoryContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row gap-3 desktop:mt-5 mt-3">{children}</div>
);

const Category = ({ children }: { children: ReactNode }) => (
  <div className="bg-[#505157] rounded-[8px] desktop:px-[12px] desktop:py-[6px] px-[8px] py-[4px] text-[#E3E3E3] desktop:text-[14px] text-[12px]">
    {children}
  </div>
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
