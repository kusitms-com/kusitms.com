import React from "react";
import { ReviewBox, ReviewFilter } from "@/components/review";
import { getReviews } from "@/service/reviews";

async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <ReviewFilter />
      <section className="grid grid-cols-3 gap-5 mb-[160px]">
        {reviews.data.review_list.map((review) => (
          <ReviewBox
            key={review.review_id}
            name={review.name}
            team={review.team}
            review={review.review}
            review_id={review.review_id}
          />
        ))}
      </section>
    </>
  );
}

export default ReviewsPage;
