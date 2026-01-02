"use client";

import Image from "next/image";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function Dropdown({ options, selected, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className={
          "cursor-pointer truncate flex desktop:gap-[8px] gap-[2px] items-center justify-between desktop:py-[8px] py-[6px] desktop:pr-[16px] pr-[8px] desktop:pl-[20px] pl-[12px] rounded-[8px] border border-gray-100 bg-white desktop:text-body-3 text-body-8 text-gray-600 focus:outline-none focus:ring-1 focus:ring-dark-blue-600 focus:border-dark-blue-600"
        }
        tabIndex={0}
      >
        {selected || "모든 기수"}
        <Image
          src={open ? "/projects/icons/ArrowUp.svg" : "/projects/icons/ArrowDown.svg"}
          alt={open ? "Arrow up" : "Arrow down"}
          width={24}
          height={24}
          className="w-[18px] h-[18px] desktop:w-[24px] desktop:h-[24px]"
        />
      </button>

      {open && (
        <div
          className="absolute mt-2 rounded-[8px] bg-white shadow-lg z-10 overflow-hidden desktop:w-full"
          style={{
            minWidth: "100%",
            width: "max-content",
            maxWidth: "100vw",
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`cursor-pointer block w-full text-left desktop:px-4 px-2 py-2 desktop:py-3 desktop:text-body-3 text-body-8 hover:bg-gray-50 ${
                selected === option ? "text-dark-blue-600" : "text-gray-600"
              } whitespace-nowrap`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
