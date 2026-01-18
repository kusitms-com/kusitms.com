import Image from "next/image";
import type { ReactNode } from "react";
import { toUpperCaseOnlyLetters } from "@/utils";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
}

interface CardinalProps {
  cardinal: number;
  type?: string;
}

export default function Card({ children, onClick, hoverable = false }: CardProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[16px] shadow-[0px_1px_10px_rgba(179,179,188,0.25)] transition-transform duration-300 ease-in-out ${
        hoverable ? "hover:scale-105 cursor-pointer" : ""
      }`}
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
    className="aspect-[300/190] w-full h-full object-cover"
    width={300}
    height={190}
    unoptimized
  />
);

const Logo = ({ src }: { src: string }) => (
  <div className="absolute top-[-60px] right-[16px] desktop:top-0 desktop:right-[24px] w-[78px] h-[78px] desktop:w-[95px] desktop:h-[95px] flex items-center justify-center overflow-hidden rounded-full bg-white">
    <Image src={src} alt="logo" width={95} height={95} unoptimized />
  </div>
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-1 px-4 py-5">{children}</div>
);

const Cardinal = ({ cardinal, type }: CardinalProps) => (
  <div className="flex items-center gap-1">
    <span className="tablet:text-body-5 text-body-9 text-dark-blue-500">{cardinal}기</span>
    {type && (
      <>
        <span className="text-body-8 text-gray-500">&middot;</span>
        <span className="tablet:text-body-8 text-body-9 text-gray-500">{toUpperCaseOnlyLetters(type)}</span>
      </>
    )}
  </div>
);

const ProjectName = ({ children }: { children: ReactNode }) => (
  <h2 className="tablet:text-body-3 text-body-5 font-bold text-gray-700">{children}</h2>
);

const ContentIntro = ({ children }: { children: ReactNode }) => (
  <p className="h-[47px] tablet:text-body-6 text-body-8 font-semibold text-gray-500 line-clamp-2">{children}</p>
);

const CategoryContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-row gap-3 mt-3 desktop:mt-5">{children}</div>
);

const Category = ({ children }: { children: ReactNode }) => (
  <span className="px-[8px] desktop:px-[12px] py-[4px] desktop:py-[6px] text-[12px] desktop:text-[14px] rounded-[8px] bg-[#505157] text-[#E3E3E3]">
    {children}
  </span>
);

Card.Poster = Poster;
Card.Logo = Logo;
Card.Info = Info;
Card.Cardinal = Cardinal;
Card.ProjectName = ProjectName;
Card.ContentIntro = ContentIntro;
Card.CategoryContainer = CategoryContainer;
Card.Category = Category;
