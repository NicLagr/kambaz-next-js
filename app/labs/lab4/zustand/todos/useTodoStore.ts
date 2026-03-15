import { create } from "zustand";

type Todo = { id: string; title: string };

type TodoState = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: () => void;
  updateTodo: () => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [
    { id: "1", title: "Learn Zustand" },
    { id: "2", title: "Use smaller stores" },
  ],
  todo: { id: "-1", title: "" },
  setTodo: (todo) => set({ todo }),
  addTodo: () =>
    set((state) => ({
      todos: [...state.todos, { ...state.todo, id: new Date().getTime().toString() }],
      todo: { id: "-1", title: "" },
    })),
  updateTodo: () => {
    const current = get().todo;
    set((state) => ({
      todos: state.todos.map((t) => (t.id === current.id ? current : t)),
      todo: { id: "-1", title: "" },
    }));
  },
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
