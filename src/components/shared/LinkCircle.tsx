import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LinkCircleProps {
  img: string;
  link: string;
  className?: string;
  size?: number;
}

export const IconLink = ({
  img,
  link,
  className,
  size = 20,
}: LinkCircleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={twMerge(
        "w-[40px] h-[40px] rounded-full bg-[#45464F] flex justify-center items-center",
        className
      )}
    >
      <Image
        src={img}
        alt="SNS icon"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </Link>
  );
};
