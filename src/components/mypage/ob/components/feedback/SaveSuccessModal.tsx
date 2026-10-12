import Image from "next/image";
import { useId } from "react";

type SaveSuccessModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

export function SaveSuccessModal({ onClose, onConfirm }: SaveSuccessModalProps) {
  const titleId = useId();

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-[#171719]/[0.52] px-5">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex w-full max-w-[336px] flex-col items-center justify-center overflow-hidden rounded-[16px] border-l border-[rgba(112,115,124,0.16)] bg-white shadow-[0_10px_15px_-5px_rgba(23,23,23,0.1),0_24px_38px_-10px_rgba(23,23,23,0.12)]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-3 px-6 pt-6 pb-2">
          <div className="relative h-[120px] w-[160px] shrink-0 overflow-hidden">
            <Image
              src="/mypage/ob-success-illustration.png"
              alt=""
              width={302}
              height={202}
              className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[calc(50%+0.8px)] h-[201.6px] w-[302.4px] max-w-none object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1 whitespace-nowrap">
            <p
              id={titleId}
              className="text-[18px] font-semibold leading-[26px] tracking-[-0.09px] text-[#17171a]"
            >
              멘토링 등록 완료
            </p>
            <p className="text-[14px] font-normal leading-5 tracking-[0.175px] text-[#5b5c63]">
              일정을 등록하여 멘토링을 진행해요
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 px-5 pt-4 pb-5">
          <button
            type="button"
            onClick={onClose}
            className="h-11 min-w-0 flex-1 cursor-pointer rounded-[8px] border border-[rgba(112,115,124,0.22)] bg-white px-[13px] py-[9px] text-center text-[16px] font-semibold leading-6 tracking-[-0.04px] text-[#484950] transition hover:bg-[#f7f7f9] active:bg-[#eef0f4]"
          >
            닫기
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="h-11 min-w-0 flex-1 cursor-pointer rounded-[8px] bg-[#3e5efa] px-3 py-2 text-center text-[16px] font-semibold leading-6 tracking-[-0.04px] text-white transition hover:bg-[#3157ff] active:bg-[#2447df]"
          >
            일정 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}
