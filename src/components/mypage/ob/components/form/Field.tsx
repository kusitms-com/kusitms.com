import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  focusKey?: string;
  className?: string;
  children: ReactNode;
};

export function Field({ label, required, error, focusKey, className = "", children }: FieldProps) {
  return (
    <div data-ob-field={focusKey} className={`block min-w-0 ${className}`}>
      <span className="mb-2 flex h-5 items-start gap-0.5 text-sm font-semibold text-[#777982]">
        {label}
        {required && <span className="text-[#e52222]">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-0.5 text-xs font-normal leading-[18px] tracking-[0.168px] text-[#e52222]">
          <CircleAlert size={14} />
          {error}
        </span>
      )}
    </div>
  );
}
