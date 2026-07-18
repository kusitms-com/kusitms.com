"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DropdownProps = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const Dropdown = ({ options, value, onChange, placeholder = "선택해주세요" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full border rounded-[8px] border-line-normal bg-fill-normal px-4 py-2 flex items-center justify-between cursor-pointer"
      >
        <p className={cn("text-body-16m", selected ? "text-label-normal" : "text-label-assitive")}>
          {selected ?? placeholder}
        </p>
        <Image
          src="/mentoring/icons/ArrowDownIcon.svg"
          alt=""
          width={20}
          height={20}
          className={cn("size-5 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 flex h-[196px] w-[180px] flex-col gap-1 overflow-y-auto rounded-[8px] border border-line-normal bg-fill-normal p-1 shadow-[0_1px_10px_0_rgba(179,179,188,0.25)]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={cn(
                "cursor-pointer rounded-[8px] px-3 py-2 text-body-16m text-label-netural hover:bg-fill-alternative hover:text-label-light",
                selected === option && "bg-fill-alternative",
              )}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
