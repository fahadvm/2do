import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  updateTodo: (updatedTodo) => set((state) => ({
    todos: state.todos.map((t) => t._id === updatedTodo._id ? updatedTodo : t)
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((t) => t._id !== id)
  })),
}));

export default useTodoStore;
