import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonSize = "xl" | "l" | "m" | "s";
type ButtonVariant = "strong" | "primary" | "disabled" | "error" | "outlined";

type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeStyles: Record<ButtonSize, string> = {
  xl: "h-12 py-2 px-6 text-body-16sb w-[140px]",
  l: "h-11 py-2 px-6 text-body-16sb w-[140px]",
  m: "h-10 py-2 px-4 text-label-14sb w-[100px]",
  s: "h-9 py-2 px-4 text-label-14sb w-[90px]",
};

const variantStyles: Record<ButtonVariant, string> = {
  strong: "bg-brand-primary text-fill-normal",
  primary: "bg-fill-primary text-brand-primary",
  disabled: "bg-fill-alternative text-label-light",
  error: "bg-fill-destructive text-status-negative",
  outlined: "border border-line-normal bg-fill-normal text-label-neutral",
};

const Button = ({
  size = "m",
  variant = "primary",
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-[8px] cursor-pointer",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
