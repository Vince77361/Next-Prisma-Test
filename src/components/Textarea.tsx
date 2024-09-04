import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <textarea
      className={twMerge(
        `px-6 py-4 focus:outline-none text-xl rounded-2xl`,
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
