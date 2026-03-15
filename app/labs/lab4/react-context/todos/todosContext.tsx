"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Todo = { id: string; title: string };

type TodosContextType = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: () => void;
  updateTodo: () => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React Context" },
    { id: "2", title: "Refactor app state" },
  ]);
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "" });

  const addTodo = () => {
    const next = { ...todo, id: new Date().getTime().toString() };
    setTodos([...todos, next]);
    setTodo({ id: "-1", title: "" });
  };

  const updateTodo = () => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setTodo({ id: "-1", title: "" });
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, todo, setTodo, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
