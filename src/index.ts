import { addTodo, listTodos, completeTodo, deleteTodo } from './todo.js';

addTodo("TypeScript 배우기");
addTodo("Jest 설정하기");

console.log("📋 할 일 목록:", listTodos());

completeTodo(1);
console.log("✅ 완료 후:", listTodos());

deleteTodo(2);
console.log("🗑️ 삭제 후:", listTodos());
