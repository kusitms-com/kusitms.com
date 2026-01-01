"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LinkButtonProps {
  title?: string;
  link?: string;
  className?: string;
}

const LinkButton = ({ title, link, className }: LinkButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        link && router.push(link);
      }}
      className={`text-gray-0 rounded-full cursor-pointer w-fit text-body-8 desktop:text-body-4 flex gap-[12px] justify-center items-center pl-[32px] pr-[24px] py-[10px] bg-dark-blue-500 ${className}`}
    >
      <p>{title}</p>
      <Image
        src="/recruit/icons/WhiteArrow.svg"
        alt="Arrow"
        width={24}
        height={24}
        className="w-[20px] h-[20px] desktop:w-[24px] desktop:h-[24px]"
      />
    </button>
  );
};

export default LinkButton;
