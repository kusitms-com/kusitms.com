import React from "react";
import Reviews from "@/components/review/Reviews";
import { getReviews } from "@/service/reviews";

async function ReviewsPage() {
  const reviews = await getReviews("");
  return <Reviews reviews={reviews} />;
}

export default ReviewsPage;
