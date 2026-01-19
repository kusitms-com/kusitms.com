"use client";

import Image from "next/image";

interface LinkButtonProps {
  title?: string;
  link?: string;
  className?: string;
}

const LinkButton = ({ title, link, className }: LinkButtonProps) => {
  return (
    <button
      onClick={() => {
        if (!link) return;
        window.open(link, "_blank");
      }}
      className={`text-gray-0 rounded-full cursor-pointer w-fit text-body-8 desktop:text-body-4 flex gap-[12px] justify-center items-center pl-[32px] pr-[24px] py-[10px] bg-dark-blue-500 hover:bg-dark-blue-400 active:bg-dark-blue-600 ${className}`}
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
