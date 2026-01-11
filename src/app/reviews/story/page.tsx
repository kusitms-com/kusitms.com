import ReviewNavButtons from "@/components/review/ReviewNavButtons";
import Stories from "@/components/review/story/Stories";
import { getStories } from "@/service/reviews/getStories";

async function ReviewsStoryPage() {
  const storiesResponse = await getStories({ page: 0, size: 10 });

  return (
    <section className="w-full mx-auto max-w-[1024px]">
      <ReviewNavButtons />
      <Stories initialData={storiesResponse.data} />
    </section>
  );
}

export default ReviewsStoryPage;
