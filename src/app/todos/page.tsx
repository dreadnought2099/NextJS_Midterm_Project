// Should be executed on the client side
"use client";

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

  // to fetch data | runs to fetchTodos function
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/todos");
        const { todos } = await res.json();
        setTodos(todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
        // False whether the fetch succeeds or fails
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // JSX rendered by the component
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white py-4 px-7 shadow-md">
        <div className="flex items-center space-x-4">
          <Link href="/" className="button">
            &larr; Back
          </Link>
          <h1 className="text-3xl font-extrabold text-secondary-color">
            All Todos
          </h1>
        </div>
      </div>

      {/* Kung true ang loading, it displays a mesage Loading... */}
      {loading ? (
        <div className="text-center text-xl text-secondary-color font-semibold">
          Loading...
        </div>
      ) : (
        <div className="pt-28 pb-10 overflow-x-auto">
          <table className="w-3/4 mx-auto border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-color">Todo</th>
                <th className="px-4 py-2 text-color">Completed</th>
              </tr>
            </thead>
            <tbody>
              {/* Map function to loop todos */}
              {todos.map(({ id, todo, completed }) => (
                <tr
                  key={id}
                  className="border-t border-gray-300 text-center cursor-pointer "
                >
                  <td className="px-4 py-2 hover:bg-text-tertiary-color">
                    {todo}
                  </td>
                  <td
                    className={`px-4 py-2 font-semibold  ${
                      completed ? "text-secondary-color" : "text-red-500"
                    }`}
                  >
                    {/* Renders Yes if completed otherwise No if incomplete */}
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
