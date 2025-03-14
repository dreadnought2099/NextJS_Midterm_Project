'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/todos");
        const { todos } = await res.json();
        setTodos(todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="py-5">
      <div className="px-7">
        <Link href="/" className="button">
          &larr; Back
        </Link>
      </div>

      <h1 className="text-center text-3xl font-bold text-secondary-color mb-5">
        All Todos
      </h1>

      {loading ? (
        <div className="text-center text-xl font-semibold">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-3/4 mx-auto border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Todo</th>
                <th className="px-4 py-2">Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(({ id, todo, completed }) => (
                <tr key={id} className="border-t border-gray-300 text-center hover:bg-gray-100">
                  <td className="px-4 py-2">{todo}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      completed ? "text-secondary-color" : "text-red-500"
                    }`}
                  >
                    {completed ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
