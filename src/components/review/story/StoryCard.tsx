import Image from "next/image";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function StoryCard({ children, onClick }: CardProps) {
  return (
    <div
      className="relative flex desktop:gap-7 gap-3 items-center overflow-hidden"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

const Thumbnail = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt="thumbnail"
    className="w-[104px] h-[104px] desktop:aspect-[240/164] desktop:min-w-60 desktop:h-auto object-cover desktop:rounded-2xl rounded-[8px] bg-gray-100"
    width={240}
    height={164}
    unoptimized
  />
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col">{children}</div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <p className="desktop:text-body-1 text-body-5 text-gray-700">{children}</p>
);

const Content = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-500 desktop:text-body-6 text-body-8 line-clamp-2">{children}</p>
);

const TagContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex desktop:gap-2 gap-1 desktop:mt-4 mt-2 flex-wrap">{children}</div>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="px-3 py-1 bg-gray-50 text-body-8 text-gray-500 rounded-[6px] truncate">
    {children}
  </span>
);

StoryCard.Thumbnail = Thumbnail;
StoryCard.Info = Info;
StoryCard.Title = Title;
StoryCard.Content = Content;
StoryCard.TagContainer = TagContainer;
StoryCard.Tag = Tag;
