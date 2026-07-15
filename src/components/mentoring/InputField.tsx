import Image from "next/image";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  label: string;
  helperText?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, helperText, error, ...inputProps }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-0.5 text-label-alternative text-label-14sb">
        {label}
        {inputProps.required && <span className="text-status-negative text-label-14sb">*</span>}
      </div>
      <input
        {...inputProps}
        className={cn(
          "h-12 w-full rounded-[8px] border border-line-normal bg-fill-netural px-4 text-label-normal text-body-16r transition-colors duration-200 not-placeholder-shown:bg-fill-normal placeholder:text-body-16r placeholder:text-label-assitive focus:border-brand-primary focus:bg-fill-normal focus:outline-none",
          error && "border-status-negative bg-fill-normal focus:border-status-negative",
        )}
      />
      {helperText && (
        <div
          className={cn(
            "flex items-center gap-0.5 text-caption-12r text-label-light",
            error && "text-status-negative",
          )}
        >
          {error && (
            <Image
              src="/mentoring/icons/CautionIcon.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          )}
          {helperText}
        </div>
      )}
    </div>
  );
};

export default InputField;
