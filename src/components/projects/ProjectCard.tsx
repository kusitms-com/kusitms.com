import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Card({ children, onClick }: CardProps) {
  return (
    <div
      className="relative w-[370px] h-[494px] rounded-[40px] flex flex-col bg-[#2F3038] pb-6 
    hover:scale-102 hover:cursor-pointer transition-transform duration-200"
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
    className="object-cover overflow-hidden rounded-t-[40px]"
    width={370}
    height={285}
    style={{ width: 370, height: 285 }}
    unoptimized
  />
);

const Logo = ({ src }: { src: string }) => (
  <div className="absolute mt-[230px] w-[95px] h-[95px] rounded-full top-0 right-[24px] bg-white flex justify-center items-center overflow-hidden">
    <Image src={src} alt="logo" width={95} height={95} unoptimized />
  </div>
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col text-[#fff] px-6">{children}</div>
);

const Cardinal = ({ children }: { children: ReactNode }) => (
  <div className="mt-[22px] text-[16px] text-[#62EFE5]">{children}</div>
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
  <div className="flex flex-row gap-3 mt-5">{children}</div>
);

const Category = ({ children }: { children: ReactNode }) => (
  <div className="bg-[#505157] rounded-[8px] px-[12px] py-[6px] text-[#E3E3E3] text-[14px]">
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
