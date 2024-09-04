import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  children,
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        `px-6 py-4 rounded-2xl bg-slate-600 font-bold text-white text-2xl`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
