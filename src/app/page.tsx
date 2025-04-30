"use client";
import { counterStore } from "@/stores/counterStore";
import { TodoStore } from "@/stores/todoStore";

export default function Home() {
  const { count, increment, decrement, reset } = counterStore();
  const { todos, addTodo, removeTodo } = TodoStore();
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center justify-center text-black">
      <div>
        <h1>Contador</h1>
        <h2>Contagem: {count}</h2>
        <button
          onClick={increment}
          className="bg-green-500 px-4 py-2 rounded-md font-bold"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 px-4 py-2 rounded-md font-bold"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 px-4 py-2 rounded-md font-bold"
        >
          Reset
        </button>
      </div>
      <div className="mt-8">
        <h1 className="mb-4">Todo</h1>
        <ul className="list-disc">
          {todos.map((todo) => (
            <li key={todo.id} className="mb-2">
              {todo.title}{" "}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
        <input
          className="border border-gray-300 rounded-md px-4 py-2"
          type="text"
          placeholder="Novo todo"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}
