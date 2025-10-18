import Image from "next/image";
import type { ReactNode } from "react";

interface ImageCardProps {
  children: ReactNode;
}

export default function ImageCard({ children }: ImageCardProps) {
  return (
    <div className="desktop:w-[600px] desktop:h-[500px] w-[280px] h-[225px] mt-[40px] relative">
      {children}
    </div>
  );
}

const Sticker = ({ children }: { children: ReactNode }) => {
  return (
    <div className="desktop:w-[70px] desktop:h-[110px] w-[40px] h-[60px] absolute desktop:left-[220px] left-[120px] desktop:top-[-40px] top-[-45px] z-[1]">
      {children}
    </div>
  );
};

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="desktop:w-[480px] desktop:h-[410px] w-[260px] h-[225px] bg-white flex justify-center items-center rotate-[5deg]">
      <Image
        src={src}
        alt="content"
        width={446}
        height={360}
        className="object-cover desktop:w-[446px] desktop:h-[360px] w-[223px] h-[190px]"
        priority
      />
    </div>
  );
};

ImageCard.Sticker = Sticker;
ImageCard.Image = CardImage;
