import Image from "next/image";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
}

interface CardinalProps {
  cardinal: number;
  type?: string;
}

export default function Card({
  children,
  onClick,
  hoverable = false,
}: CardProps) {
  const hoverClass = hoverable ? " hover:scale-105" : "";

  return (
    <div
      className={`transition-transform duration-300  ease-in-out relative rounded-[16px] flex flex-col overflow-hidden shadow-[0px_1px_10px_rgba(179,179,188,0.25)] ${hoverClass}`}
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
    className="object-cover overflow-hidden aspect-[300/190]"
    width={300}
    height={190}
    style={{ width: "100%", height: "100%" }}
    unoptimized
  />
);

const Logo = ({ src }: { src: string }) => (
  <div className="absolute mt-[230px] desktop:w-[95px] desktop:h-[95px] w-[78px] h-[78px] rounded-full desktop:top-0 top-[-60px] desktop:right-[24px] right-[16px] bg-white flex justify-center items-center overflow-hidden">
    <Image src={src} alt="logo" width={95} height={95} unoptimized />
  </div>
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col px-4 gap-1 py-5">{children}</div>
);

const Cardinal = ({ cardinal, type }: CardinalProps) => (
  <div className="flex items-center">
    <span className="text-dark-blue-500 text-body-5">{cardinal}기</span>
    {type && (
      <>
        <span className="mx-1 text-gray-500 text-body-8">&middot;</span>
        <span className="text-gray-500 text-body-8">{type}</span>
      </>
    )}
  </div>
);

const ProjectName = ({ children }: { children: ReactNode }) => (
  <div className="text-body-3 text-[20px] text-gray-700 font-bold">
    {children}
  </div>
);

const ContentIntro = ({ children }: { children: ReactNode }) => (
  <div className="text-[16px] text-[13px] h-[47px] text-gray-500 line-clamp-2 font-semibold">
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
