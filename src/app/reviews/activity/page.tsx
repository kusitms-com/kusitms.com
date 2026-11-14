import ReviewNavButtons from "@/components/review/ReviewNavButtons";
import Reviews from "@/components/review/Reviews";
import { getReviews } from "@/service/reviews";

// 어드민에서 바꾼 활동 후기가 바로 보이도록 요청마다 새로 그린다(빌드 시 정적 생성 시도 안 함)
export const dynamic = "force-dynamic";

async function ReviewsActivityPage() {
  const reviews = await getReviews("");

  return (
    <section className="w-full mx-auto max-w-[1024px]">
      <ReviewNavButtons />
      <Reviews reviews={reviews} />
    </section>
  );
}

export default ReviewsActivityPage;
