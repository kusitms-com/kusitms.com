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
          "cursor-pointer flex px-5 items-center justify-between py-[10px] pr-[16px] pl-[20px] rounded-[8px] border border-gray-100 bg-white text-body-3 text-gray-600"
        }
      >
        {selected || "모든 기수"}
        <Image
          src={open ? "/projects/icons/ArrowUp.svg" : "/projects/icons/ArrowDown.svg"}
          alt={open ? "Arrow up" : "Arrow down"}
          width={24}
          height={24}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-full rounded-[8px] bg-white shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`cursor-pointer block w-full  text-left px-4 py-3 text-body-3 hover:bg-gray-50 ${
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
