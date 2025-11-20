"use client";

import { useState } from "react";
import { getReviews, type ReviewResponse } from "@/service/reviews";
import ReviewBox from "./ReviewBox";
import ReviewFilter from "./ReviewFilter";

interface ReviewsProps {
  reviews: ReviewResponse;
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [team, setTeam] = useState<string>("");
  const [cardinal, setCardinal] = useState<number | undefined>(undefined);
  const [reviewList, setReviewList] = useState(reviews);

  const fetchReviews = async (nextTeam: string, nextCardinal?: number) => {
    const response = await getReviews(nextTeam, nextCardinal);
    setReviewList(response);
  };

  const handleFilterChange = (params: { team?: string; cardinal?: number }) => {
    const hasNextCardinal = Object.hasOwn(params, "cardinal");
    const updatedTeam = params.team ?? team;
    const updatedCardinal = hasNextCardinal ? params.cardinal : cardinal;
    setTeam(updatedTeam);
    setCardinal(updatedCardinal);
    fetchReviews(updatedTeam, updatedCardinal);
  };

  const reviewCount = reviewList.data.review_count;
  const reviewItems = reviewList.data.review_list;

  return (
    <>
      <ReviewFilter
        team={team}
        cardinal={cardinal}
        totalCount={reviewCount}
        onChange={handleFilterChange}
      />
      <section className="desktop:columns-3 columns-1 gap-4 desktop:mb-[160px] mb-[80px] px-10">
        {reviewItems.map((review) => (
          <div key={review.review_id} className="break-inside-avoid mb-4">
            <ReviewBox {...review} />
          </div>
        ))}
      </section>
    </>
  );
}
