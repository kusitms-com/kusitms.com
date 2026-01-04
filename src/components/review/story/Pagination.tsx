"use client";

import Image from "next/image";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const page = currentPage;

  const handleChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const groupSize = 5;
  const currentGroup = Math.ceil(page / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex items-center justify-center gap-5 pb-14">
      <div className="flex gap-2">
        <button
          onClick={() => handleChange(1)}
          className="cursor-pointer"
          disabled={page === 1}
          aria-label="첫 페이지"
        >
          <Image src="/reviews/arrow_double_left.svg" alt="first" width={24} height={24} />
        </button>
        <button
          onClick={() => handleChange(page - 1)}
          className="cursor-pointer"
          disabled={page === 1}
          aria-label="이전 페이지"
        >
          <Image src="/reviews/arrow_left.svg" alt="prev" width={24} height={24} />
        </button>
      </div>

      <div className="body-6 flex gap-4">
        {visiblePages.map((num) => (
          <button
            key={num}
            onClick={() => handleChange(num)}
            className={`${
              page === num ? "text-gray-700 font-bold" : "text-gray-500 hover:text-gray-700"
            } cursor-pointer transition-colors`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleChange(page + 1)}
          disabled={page === totalPages}
          className="cursor-pointer"
          aria-label="다음 페이지"
        >
          <Image src="/reviews/arrow_right.svg" alt="next" width={24} height={24} />
        </button>
        <button
          onClick={() => handleChange(totalPages)}
          disabled={page === totalPages}
          aria-label="마지막 페이지"
          className="cursor-pointer"
        >
          <Image src="/reviews/arrow_double_right.svg" alt="last" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
