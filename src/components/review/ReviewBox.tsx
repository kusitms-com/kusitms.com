import React from "react";

export const ReviewBox = () => {
  return (
    <div className="px-8 py-12 max-w-[380px] max-h-[450px] bg-[#F2F2F8] rounded-[32px]">
      <h3 className="text-2xl font-extrabold mb-2">윤지원</h3>
      <h4 className="text-xl font-normal mb-8 text-[#05f]">기획팀</h4>
      <p className="text-base font-normal max-h-[260px] overflow-y-auto scrollbar-custom">
        짧은 시간이었지만, 큐시즘에서 많은 좋은 사람들을 만날 수 있어서
        좋았습니다. 열정적인 분들과 함께 하며 많은 자극을 받고, 함께 열심히 해서
        실력도 많이 키울 수 있었습니다. 지금 이 글을 보고 계신 예비 백엔드
        큐밀리분들! 큐시즘에서는 프로젝트 진행 시 약 100만원 상당의 Naver Cloud
        비용을 지원합니다. 다양한 Cloud 기술을 무료로 접할 수 있는, 백엔드
        개발자로서 정말 놓치면 안되는 기회라고 생각합니다. 백엔드 운영에 관심이
        있지만 비용 부담 때문에 망설였던 분들, 다양한 기술을 경험하며 배우고
        싶은 분들 모두 큐시즘에 들어오셔서 좋은 경험을 얻어가시길 바랍니다!
      </p>
    </div>
  );
};
