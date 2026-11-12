import ReviewNavButtons from "@/components/review/ReviewNavButtons";
import Stories from "@/components/review/story/Stories";
import { getStories } from "@/service/reviews/getStories";

// 어드민에서 바꾼 스토리가 바로 보이도록 요청마다 새로 그린다(빌드 시 정적 생성 시도 안 함)
export const dynamic = "force-dynamic";

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
