import Image from "next/image";

const RecruitmentTogether = () => {
  // 모집기간 여부에 따라 문구와 버튼 다르게 처리
  const isRecruiting = true;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-title-3 text-dark-blue-400 pb-[40px]">Recruitment</h2>
      {isRecruiting ? (
        <>
          <span className="text-body-2 items-center flex flex-col text-gray-900 pb-[80px]">
            <p>큐시즘은 혼자서는 해낼 수 없는 일들을 함께 이루어내고 있어요.</p>
            <p>멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.</p>
            <p>함께 큐밀리가 되시겠어요?</p>
          </span>
          <button className="text-gray-0 rounded-full text-body-4 flex gap-[12px] justify-center items-center px-[24px] py-[10px] bg-dark-blue-500">
            <p>함께하러 가기</p>
            <Image
              src="/recruit/icons/WhiteArrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              style={{ width: 24, height: 24 }}
            />
          </button>
        </>
      ) : (
        <>
          <span className="text-body-2 items-center flex flex-col text-gray-900 pb-[80px]">
            <p>지금은 모집 기간이 아니에요</p>
            <p>모집 기간이 되면 메일로 알려드릴게요</p>
          </span>
          <button className="text-gray-0 rounded-full text-body-4 flex gap-[12px] justify-center items-center px-[24px] py-[10px] bg-dark-blue-500">
            <p>함께하러 가기</p>
            <Image src="/recruit/icons/WhiteArrow.svg" alt="Arrow" width={24} height={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default RecruitmentTogether;
