"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getStories, type StoriesData, type StoriesParams } from "@/service/reviews/getStories";
import Pagination from "./Pagination";
import StoryCard from "./StoryCard";
import StoryFilter from "./StoryFilter";

type StoriesContainerProps = {
  initialData: StoriesData;
};

export default function Stories({ initialData }: StoriesContainerProps) {
  const [storiesData, setStoriesData] = useState(initialData);
  const [generation, setGeneration] = useState<number | undefined>();
  const [position, setPosition] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();

  const handleFilterChange = async (params: StoriesParams) => {
    setGeneration(params.generation);
    setPosition(params.position);
    setCategory(params.category);
    setCurrentPage(0); // 필터 변경 시 첫 페이지로

    const res = await getStories({ ...params, page: 0 });
    setStoriesData(res.data);
  };

  const handlePageChange = async (page: number) => {
    const pageIndex = page - 1;
    setCurrentPage(pageIndex);

    const res = await getStories({
      generation,
      position,
      category,
      page: pageIndex,
    });
    setStoriesData(res.data);

    // 페이지 변경 시 스크롤 최상단으로
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="tablet:px-10 pl-4">
        <StoryFilter
          generation={generation}
          position={position}
          category={category}
          totalCount={storiesData.totalElements}
          onChange={handleFilterChange}
        />
      </div>
      <div className="w-full mb-[32px] tablet:px-10 px-4 tablet:max-w-[1024px] mx-auto">
        <div className="flex flex-col tablet:gap-8 gap-5 tablet:mb-14 mb-9">
          {storiesData.content.length > 0 ? (
            storiesData.content.map((story) => (
              <Link
                key={story.blog_post_id}
                href={story.address}
                prefetch={false}
                onMouseEnter={() => {
                  router.prefetch(story.address);
                }}
              >
                <StoryCard>
                  <StoryCard.Thumbnail src={story.imageAddress} />
                  <StoryCard.Info>
                    <StoryCard.Title>{story.title}</StoryCard.Title>
                    <StoryCard.Content>{story.content}</StoryCard.Content>
                    <StoryCard.TagContainer>
                      <StoryCard.Tag>{story.categoryName}</StoryCard.Tag>
                      <StoryCard.Tag>{story.cardinal}기</StoryCard.Tag>
                      <StoryCard.Tag>{story.position}</StoryCard.Tag>
                    </StoryCard.TagContainer>
                  </StoryCard.Info>
                </StoryCard>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">후기가 없습니다.</p>
          )}
        </div>
        {storiesData.totalPages > 0 && (
          <Pagination
            currentPage={currentPage + 1}
            totalPages={storiesData.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}
