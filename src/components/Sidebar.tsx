"use client";

import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

const Sidebar = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoContent(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      title: todoTitle,
      content: todoContent,
    };
    await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/post`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className="w-80 h-screen sticky top-0 bg-slate-300 flex flex-col pl-6 rounded-r-2xl">
      <form onSubmit={onSubmit}>
        <Input
          placeholder="투두 제목"
          className="mt-6 w-64 font-bold"
          value={todoTitle}
          onChange={onTitleChange}
        />
        <Textarea
          placeholder="투두 내용"
          className="mt-4 w-64 h-[30rem] resize-none text-gray-400"
          value={todoContent}
          onChange={onContentChange}
        />
        <Button type="submit" className="w-32 mt-4">
          추가
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;
