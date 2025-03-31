"use client";

import React from "react";

export const ReviewsTotalCount = ({
  reviewsCount,
}: {
  reviewsCount: number;
}) => {
  return (
    <h2 className="text-4xl font-normal leading-[42px] tracking-[-1px] mb-[120px]">
      <span className="text-[#05f]">{reviewsCount}</span>개의 후기가 등록되어
      있어요.
    </h2>
  );
};
