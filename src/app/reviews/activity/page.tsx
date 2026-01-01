import ReviewNavButtons from "@/components/review/ReviewNavButtons";
import Reviews from "@/components/review/Reviews";
import { getReviews } from "@/service/reviews";

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
