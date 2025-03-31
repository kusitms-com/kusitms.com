import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinkCircleProps {
  img: string;
  link: string;
}

export const LinkCircle = ({ img, link }: LinkCircleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-[40px] h-[40px] rounded-full bg-[#45464F] flex justify-center items-center"
    >
      <Image
        src={img}
        alt="SNS icon"
        width={20}
        height={20}
        style={{ width: "20px", height: "20px" }}
      />
    </Link>
  );
};
