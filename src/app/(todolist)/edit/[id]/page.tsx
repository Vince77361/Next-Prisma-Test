"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const [todoTitle, setTodotitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodotitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoContent(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:3000/api/post/${id}`)
        .then((r) => r.json())
        .then((r) => {
          setTodotitle(r.title);
          setTodoContent(r.content);
        });
    };
    fetchData();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      title: todoTitle,
      content: todoContent,
    };
    await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    }).then(() => console.log("수정 완료!"));
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12 my-16">
        <form onSubmit={onSubmit}>
          <div className="flex justify-between">
            <Button buttonMethod="back" className="bg-white text-black border">
              뒤로가기
            </Button>

            <Button
              id={id}
              type="submit"
              className="bg-white text-black border"
            >
              완료
            </Button>
          </div>
          <div className=" min-h-[50rem] border rounded-3xl mt-8 p-20">
            <Input
              placeholder="투두 제목"
              className="text-6xl font-bold border w-full"
              value={todoTitle}
              onChange={onTitleChange}
            />
            <Textarea
              placeholder="투두 내용"
              className="text-2xl mt-10 border resize-none w-full min-h-96 text-gray-400"
              value={todoContent}
              onChange={onContentChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
