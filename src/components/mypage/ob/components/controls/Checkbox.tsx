import { Check } from "lucide-react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="mt-2 flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#737889]"
    >
      <span
        className={`grid h-3.5 w-3.5 place-items-center rounded-[3px] border ${
          checked ? "border-[#3157ff] bg-[#3157ff]" : "border-[#c8ceda] bg-white"
        }`}
      >
        {checked && <Check size={10} className="text-white" />}
      </span>
      {label}
    </button>
  );
}
