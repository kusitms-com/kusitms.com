import React from "react";
import { getReviews } from "@/service/reviews";
import Reviews from "@/components/review/Reviews";

async function ReviewsPage() {
  const reviews = await getReviews("");
  return <Reviews reviews={reviews} />;
}

export default ReviewsPage;
