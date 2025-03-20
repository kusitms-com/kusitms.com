import Image from "next/image";
import { ReactNode } from "react";

interface ImageCardProps {
  children: ReactNode;
}

const ImageCard = ({ children }: ImageCardProps) => {
  return (
    <div className="w-[600px] h-[500px] mt-[40px] relative">{children}</div>
  );
};

const Sticker = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[70px] h-[110px] absolute left-[220px] top-[-40px] z-[1]">
      {children}
    </div>
  );
};

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="w-[480px] h-[380px] bg-white flex justify-center items-center rotate-[5deg]">
      <Image
        src={src}
        alt="content"
        width={446}
        height={360}
        className="object-cover"
      />
    </div>
  );
};

ImageCard.Sticker = Sticker;
ImageCard.Image = CardImage;

export default ImageCard;
