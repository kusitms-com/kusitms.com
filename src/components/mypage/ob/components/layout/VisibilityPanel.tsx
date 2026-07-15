type VisibilityPanelProps = {
  enabled: boolean;
  onChange: () => void;
};

export function VisibilityPanel({ enabled, onChange }: VisibilityPanelProps) {
  return (
    <section className="flex min-h-[98px] items-center justify-between rounded-[14px] bg-white px-6 shadow-[0_0_0_1px_#dfe2ea]">
      <div>
        <h2 className="text-base font-bold">멘토링 노출 상태</h2>
        <p className="mt-1 text-sm text-[#737889]">
          현재 프로필이 활성화되어 멘티들이 신청할 수 있는 상태입니다.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-[#737889]">공개</span>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={onChange}
          className={`relative h-8 w-[58px] cursor-pointer rounded-full transition ${
            enabled ? "bg-[#3157ff]" : "bg-[#d7d9df]"
          }`}
        >
          <span
            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
              enabled ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
