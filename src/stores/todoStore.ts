import { create } from "zustand";

type Todo = {
  id: number;
  title: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
};

export const TodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((state) => ({ todos: [...state.todos, { id: Date.now(), title }] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
