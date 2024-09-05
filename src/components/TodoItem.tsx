import Link from "next/link";
import React from "react";

interface TodoItemProps {
  id: number;
  title: string;
  content: string;
  created_at?: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, id }) => {
  return (
    <div className="rounded-2xl border m-10 px-10 py-6">
      <Link href={`/${id}`}>
        <h3 className="font-bold text-2xl">{title}</h3>
      </Link>
    </div>
  );
};

export default TodoItem;
