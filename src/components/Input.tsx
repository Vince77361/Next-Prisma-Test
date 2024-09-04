import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={twMerge(
        `px-6 py-4 focus:outline-none text-xl rounded-2xl`,
        className
      )}
    />
  );
};

export default Input;
