"use client";

import React, { useState } from "react";
import { getReviews, ReviewResponse } from "@/service/reviews";
import { ReviewFilter } from "./ReviewFilter";
import { ReviewBox } from "./ReviewBox";

export type TeamType = "DEVELOPER" | "PLANNER" | "DESIGNER" | "";

interface ReviewsProps {
  reviews: ReviewResponse;
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  const [team, setTeam] = useState<TeamType>("");
  const [reviewList, setReviewList] = useState(reviews);

  const handleChangeReviewFilter = async (team: TeamType) => {
    setTeam(team);
    const reviews = await getReviews(team);
    setReviewList(reviews);
  };
  return (
    <>
      <ReviewFilter team={team} onChange={handleChangeReviewFilter} />
      <section className="grid grid-cols-3 gap-5 mb-[160px]">
        {reviewList.data.review_list.map((review) => (
          <ReviewBox key={review.review_id} {...review} />
        ))}
      </section>
      ;
    </>
  );
};
