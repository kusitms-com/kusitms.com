import type { ButtonHTMLAttributes } from "react";

const Button = ({ children, ...buttonProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
