"use client";
import React from "react";

interface OptionBarProps {
  batch: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (batch: string) => void;
}

export default function OptionBar({ batch, onChange }: OptionBarProps) {
  return (
    <div className="w-full flex gap-4 desktop:mt-[64px] mt-[0px] max-w-[855px] mx-auto">
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 desktop:text-[28px] text-[14px] font-extrabold p-8 cursor-pointer ${
          batch === ""
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
        onClick={() => onChange("")}
      >
        ALL
      </div>
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 desktop:text-[28px] text-[14px] font-extrabold p-8 cursor-pointer ${
          batch === "OB"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
        onClick={() => onChange("OB")}
      >
        OB
      </div>
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 desktop:text-[28px] text-[14px] font-extrabold p-8 cursor-pointer ${
          batch === "YB"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
        onClick={() => onChange("YB")}
      >
        YB
      </div>
    </div>
  );
}
