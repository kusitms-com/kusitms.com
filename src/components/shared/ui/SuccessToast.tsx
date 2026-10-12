import { Check } from "lucide-react";

type SuccessToastProps = {
  message?: string;
};

export function SuccessToast({ message = "수정이 완료되었습니다." }: SuccessToastProps) {
  return (
    <div className="fixed bottom-10 left-1/2 z-50 flex min-h-12 -translate-x-1/2 items-center gap-1.5 overflow-hidden rounded-full bg-[#1b1c1e]/[0.52] px-4 py-2 text-[15px] font-semibold leading-[22px] tracking-[0.144px] text-white/90 shadow-lg backdrop-blur-[32px] before:absolute before:inset-0 before:bg-[#0066ff]/5">
      <span className="relative grid size-6 shrink-0 place-items-center rounded-full bg-[#18c568]">
        <Check size={15} strokeWidth={3} className="text-white" />
      </span>
      <span className="relative px-0.5 py-[5px]">{message}</span>
    </div>
  );
}
