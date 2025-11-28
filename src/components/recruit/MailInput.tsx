"use client";

// TODO: 메일 접수 로직 추가 및 유효성 검증
const MailInput = () => {
  return (
    <div className="w-[288px] desktop:w-[652px] flex items-center bg-gray-50 desktop:py-[12px] py-[8px] pl-[20px] desktop:pl-[28px] pr-[10px] desktop:pr-[20px] rounded-full text-body-8 desktop:text-body-2">
      <input
        type="email"
        placeholder="메일을 입력해주세요"
        className="flex-1 min-w-0 bg-transparent placeholder:text-gray-500 text-gray-900 outline-none focus:outline-none"
      />
      <button
        onClick={() => {
          alert("알림 신청이 완료되었습니다!");
        }}
        className="bg-dark-blue-500 text-gray-0 rounded-full cursor-pointer text-body-8 px-[12px] py-[8px] desktop:text-body-4 desktop:px-[24px] desktop:py-[10px] flex-shrink-0 min-w-[72px]"
      >
        알림 받기
      </button>
    </div>
  );
};

export default MailInput;
