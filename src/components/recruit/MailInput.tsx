"use client";

// TODO: 메일 접수 로직 추가 및 유효성 검증
const MailInput = () => {
  return (
    <div className="w-[652px] flex justify-between items-center bg-gray-50 py-[12px] pl-[28px] pr-[20px] rounded-full text-body-2">
      <input
        type="email"
        placeholder="메일을 입력해주세요"
        className="bg-transparent placeholder:text-gray-500 text-gray-900 outline-none focus:outline-none"
      />
      <button
        onClick={() => {
          alert("알림 신청이 완료되었습니다!");
        }}
        className="bg-dark-blue-500 text-gray-0 rounded-full cursor-pointer text-body-4 px-[24px] py-[10px]"
      >
        <p>알림 받기</p>
      </button>
    </div>
  );
};

export default MailInput;
