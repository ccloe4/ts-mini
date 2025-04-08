import { Todo } from './types.js';

let todos: Todo[] = [];
let nextId = 1;

export function resetTodos() {
  todos = [];
  nextId = 1;
}

export function addTodo(task: string): Todo {
  const todo: Todo = { id: nextId++, task, done: false };
  todos.push(todo);
  return todo;
}

export function listTodos(): Todo[] {
  return todos;
}

export function completeTodo(id: number): boolean {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.done = true;
    return true;
  }
  return false;
}

export function deleteTodo(id: number): boolean {
  const before = todos.length;
  // todos = todos.filter((t) => t.id !== id);
  todos = todos.filter((t) => t.id === id);
  return todos.length < before;
}
