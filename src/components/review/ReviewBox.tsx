import React from "react";
import type { Review } from "@/service/reviews";

export default function ReviewBox(props: Review) {
  return (
    <div className="px-8 py-12 max-w-[380px] max-h-[450px] bg-[#2F3038] rounded-[32px]">
      <h3 className="text-2xl font-extrabold mb-2">{props.name}</h3>
      <h4 className="text-xl font-normal mb-8 text-[#05f]">{props.team}</h4>
      <p className="text-base font-normal max-h-[260px] overflow-y-auto custom-scrollbar-none">
        {props.review}
      </p>
    </div>
  );
}
