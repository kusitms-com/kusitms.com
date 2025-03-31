import React from "react";
import { ReviewResponse } from "@/service/reviews";
import { ReviewFilter } from "./ReviewFilter";
import { ReviewBox } from "./ReviewBox";

interface ReviewsProps {
  reviews: ReviewResponse;
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <>
      <ReviewFilter />
      <section className="grid grid-cols-3 gap-5 mb-[160px]">
        {reviews.data.review_list.map((review) => (
          <ReviewBox key={review.review_id} {...review} />
        ))}
      </section>
      ;
    </>
  );
};
