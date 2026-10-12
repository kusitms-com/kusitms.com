import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatDropdownTime } from "@/components/mypage/ob/schedule/components/timeFormat";
import { timeOptions } from "@/components/mypage/ob/schedule/constants";

type TimeDropdownProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const dropdownOptions = timeOptions.map((time) => ({
  value: time,
  label: formatDropdownTime(time),
}));

export function TimeDropdown({ value, placeholder, onChange }: TimeDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedLabel = value ? formatDropdownTime(value) : placeholder;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative min-w-0 flex-1">
      <button
        type="button"
        aria-label={placeholder}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        className={`flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-[8px] border bg-[#fafbfc] px-3 text-left text-sm font-semibold leading-5 ${
          open ? "border-[#3157ff] bg-white" : "border-[#d9dce3]"
        } ${value ? "text-[#343946]" : "text-[#9da2af]"}`}
      >
        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedLabel}
        </span>
        <ChevronDown size={16} className="shrink-0 text-[#626879]" />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[44px] z-50 max-h-[220px] overflow-y-auto rounded-[8px] border border-[#d9dce3] bg-white p-1 shadow-[0_1px_10px_rgba(179,179,188,0.25)] overscroll-contain"
        >
          {dropdownOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option.value)}
              className={`flex h-10 w-full cursor-pointer items-center rounded-[6px] px-3 text-left text-sm leading-5 hover:bg-[#f4f5f8] ${
                option.value === value
                  ? "font-semibold text-[#3157ff]"
                  : "font-medium text-[#343946]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
