import { Button } from "@kusitms.com/ui";
import MailInput from "./MailInput";

// 모집기간 여부(서버에서 한국 시간으로 판정)에 따라 문구와 버튼 다르게 처리
const RecruitmentTogether = ({ isRecruiting }: { isRecruiting: boolean }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="text-pc-40b text-brand-primary desktop:text-[48px] desktop:leading-[1.35]">
        Recruitment
      </h2>
      {isRecruiting ? (
        <>
          <span className="desktop:text-body-2 text-body-8 items-center flex desktop:pt-[40px] pt-[20px] flex-col text-gray-900 pb-[40px] desktop:pb-[80px]">
            <p className="text-center">
              큐시즘은 혼자서는 해낼 수 없는 일들을
              <br className="desktop:hidden" />
              함께 이루어내고 있어요.
            </p>
            <p>멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.</p>
            <p>함께 큐밀리가 되시겠어요?</p>
          </span>
          <a href="https://forms.gle/7sf8ix1CnP9s3G3s8" target="_blank" rel="noopener noreferrer">
            <Button>지원하기</Button>
          </a>
        </>
      ) : (
        <>
          {/* 시안 KUS_RCT(모집 전): 데스크톱 20/30 Medium, 모바일 13/18 */}
          <span className="flex w-full flex-col items-center gap-1 pt-5 pb-10 text-center text-label-13m text-label-normal desktop:pt-4 desktop:pb-20 desktop:text-[20px] desktop:leading-[30px]">
            <p>지금은 모집 기간이 아니에요</p>
            <p>모집이 시작되면 메일로 알려드릴게요.</p>
          </span>
          <MailInput />
        </>
      )}
    </div>
  );
};

export default RecruitmentTogether;
