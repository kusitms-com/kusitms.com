"use client";

import React, { useState } from "react";
import { getReviews, type ReviewResponse } from "@/service/reviews";
import ReviewBox from "./ReviewBox";
import ReviewFilter from "./ReviewFilter";
import ReviewsTotalCount from "./ReviewsTotalCount";

export type TeamType = "DEVELOPER" | "PLANNER" | "DESIGNER" | "";

interface ReviewsProps {
  reviews: ReviewResponse;
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [team, setTeam] = useState<TeamType>("");
  const [reviewList, setReviewList] = useState(reviews);

  const handleChangeReviewFilter = async (team: TeamType) => {
    setTeam(team);
    const reviews = await getReviews(team);
    setReviewList(reviews);
  };
  return (
    <>
      <ReviewsTotalCount reviewsCount={reviewList.data.review_count} />
      <ReviewFilter team={team} onChange={handleChangeReviewFilter} />
      <section className="grid desktop:grid-cols-3 grid-cols-1 gap-5 desktop:mb-[160px] mb-[80px] px-5">
        {reviewList.data.review_list.map((review) => (
          <ReviewBox key={review.review_id} {...review} />
        ))}
      </section>
      ;
    </>
  );
}
