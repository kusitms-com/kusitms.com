"use client";

import React from "react";

export default function ReviewsTotalCount({ reviewsCount }: { reviewsCount: number }) {
  return (
    <h2 className="desktop:text-4xl text-xl font-normal leading-[42px] tracking-[-1px] desktop:mb-[120px] mb-[60px]">
      <span className="text-[#05f]">{reviewsCount}</span>개의 후기가 등록되어 있어요.
    </h2>
  );
}
