import Image from "next/image";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function StoryCard({ children, onClick }: CardProps) {
  return (
    <div
      className="relative flex gap-7 items-center overflow-hidden rounded-[16px]"
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
    className="aspect-[240/164] min-w-60 object-cover rounded-2xl bg-gray-100"
    width={240}
    height={164}
    unoptimized
  />
);

const Info = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col">{children}</div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <p className="text-body-1 text-gray-700">{children}</p>
);

const Content = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-500 text-body-6 line-clamp-2">{children}</p>
);

const TagContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-2 mt-4">{children}</div>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="px-3 py-1 bg-gray-50 text-body-8 text-gray-500 rounded-[6px]">{children}</span>
);

StoryCard.Thumbnail = Thumbnail;
StoryCard.Info = Info;
StoryCard.Title = Title;
StoryCard.Content = Content;
StoryCard.TagContainer = TagContainer;
StoryCard.Tag = Tag;
