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

export const IconLink = ({ img, link, className, size = 24 }: LinkCircleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={twMerge(
        "w-[36px] h-[36px] rounded-full bg-dark-blue-50 flex justify-center items-center",
        className,
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
