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
  todos = todos.filter((t) => t.id !== id);
  return todos.length < before;
}

// ❗ 버그: "완전히 같은" 이름만 찾게 만듦 (포함 검색이 아니라 완전 일치 검색)
export function findTodoByTask(task: string): Todo[] {
  return todos.filter((t) => t.task === task);  // ❌ "포함"이 아니라 "일치"만 찾음
}
