"use client";

import { useMemo, useState } from "react";
import { getReviews, type ReviewResponse } from "@/service/reviews";
import ReviewBox from "./ReviewBox";
import ReviewFilter from "./ReviewFilter";

export type TeamType = "DEVELOPER" | "PLANNER" | "DESIGNER" | "";

interface ReviewsProps {
  reviews: ReviewResponse;
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [team, setTeam] = useState<TeamType>("");
  const [cardinal, setCardinal] = useState<number | "">("");
  const [reviewList, setReviewList] = useState(reviews);

  const handleChangeTeamFilter = async (newTeam: TeamType) => {
    setTeam(newTeam);
    const reviews = await getReviews(newTeam);
    setReviewList(reviews);
  };

  const handleChangeCardinalFilter = (newCardinal: number | "") => {
    setCardinal(newCardinal);
  };

  // 프론트엔드에서 cardinal 필터링
  const filteredReviews = useMemo(() => {
    if (cardinal === "") {
      return reviewList.data.review_list;
    }
    return reviewList.data.review_list.filter((review) => review.cardinal === cardinal);
  }, [reviewList, cardinal]);

  return (
    <>
      <ReviewFilter
        team={team}
        cardinal={cardinal}
        totalCount={filteredReviews.length}
        onTeamChange={handleChangeTeamFilter}
        onCardinalChange={handleChangeCardinalFilter}
      />
      <section className="desktop:columns-3 columns-1 gap-4 desktop:mb-[160px] mb-[80px] px-10">
        {filteredReviews.map((review) => (
          <div key={review.review_id} className="break-inside-avoid mb-4">
            <ReviewBox {...review} />
          </div>
        ))}
      </section>
    </>
  );
}
