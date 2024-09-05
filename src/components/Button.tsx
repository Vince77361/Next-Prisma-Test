"use client";

import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  buttonMethod?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  type = "button",
  className,
  children,
  buttonMethod,
}) => {
  const router = useRouter();
  const onClick = async () => {
    if (buttonMethod === "edit") {
      router.push("/edit");
    } else if (buttonMethod === "delete") {
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/post/${id}`, {
        method: "DELETE",
      }).then(() => console.log("삭제 완료"));
    } else {
      return;
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
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
