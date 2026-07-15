type FormActionsProps = {
  isCompleted: boolean;
};

export function FormActions({ isCompleted }: FormActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <button
        type="button"
        className="h-12 cursor-pointer rounded-md bg-[#eef3ff] text-[16px] font-semibold leading-[26px] text-[#3157ff] transition hover:bg-[#e2e9ff] active:bg-[#d8e2ff]"
      >
        {isCompleted ? "임시 저장" : "미리 보기"}
      </button>
      <button
        type="submit"
        className="flex h-12 cursor-pointer items-center justify-center rounded-md bg-[#3157ff] text-[16px] font-semibold leading-[26px] text-white transition hover:bg-[#2447df] active:bg-[#1938c9]"
      >
        저장하기
      </button>
    </div>
  );
}
