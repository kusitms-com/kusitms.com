import Image from "next/image";

const Pagination = () => {
  return (
    <div className="py-5 flex gap-5 justify-self-center">
      {/* 왼쪽 더블버튼, 버튼 */}
      <span className="flex gap-2">
        <button>
          <Image src="/reviews/arrow_double_left.svg" alt="double-left" width={24} height={24} />
        </button>
        <button>
          <Image src="/reviews/arrow_left.svg" alt="left" width={24} height={24} />
        </button>
      </span>
      {/* 페이지 수 */}
      <span className="flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <button key={index} className="text-gray-700 text-body-6">
            {index + 1}
          </button>
        ))}
      </span>
      {/* 오른쪽 더블버튼, 버튼 */}
      <span className="flex gap-2">
        <button>
          <Image src="/reviews/arrow_double_right.svg" alt="double-right" width={24} height={24} />
        </button>
        <button>
          <Image src="/reviews/arrow_right.svg" alt="right" width={24} height={24} />
        </button>
      </span>{" "}
    </div>
  );
};

export default Pagination;
