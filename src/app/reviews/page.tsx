import React from "react";
import { ReviewBox, ReviewFilter } from "@/components/review";

async function ReviewsPage() {
  return (
    <>
      <ReviewFilter />
      <section className="grid grid-cols-3 gap-5 mb-[160px]">
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </section>
    </>
  );
}

export default ReviewsPage;
