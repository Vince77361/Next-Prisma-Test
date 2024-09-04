"use client";

import TodoItem from "@/components/TodoItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/post`, {
        cache: "no-store",
      })
        .then((r) => r.json())
        .then((r) => setTodos(r));
    };
    fetchData();
  }, [todos]);

  return (
    <div>
      {todos.map((key: any) => (
        <TodoItem
          key={key.id}
          id={key.id}
          title={key.title}
          content={key.content}
        />
      ))}
    </div>
  );
}
