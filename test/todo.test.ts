import {
  addTodo,
  completeTodo,
  deleteTodo,
  listTodos,
  resetTodos
} from '../src/todo.js';

describe("🧪 Todo 단위 테스트", () => {
  beforeEach(() => {
    resetTodos();
  });

  test("할 일을 추가하면 목록에 들어가야 한다", () => {
    const todo = addTodo("공부하기");
    const list = listTodos();
    expect(list).toHaveLength(1);
    expect(list[0]).toEqual(todo);
  });

  test("완료 처리가 되어야 한다", () => {
    const todo = addTodo("완료 테스트");
    const success = completeTodo(todo.id);
    expect(success).toBe(true);
    expect(listTodos()[0].done).toBe(true);
  });

  test("없는 ID를 완료하면 false 반환", () => {
    expect(completeTodo(999)).toBe(false);
  });

  test("삭제 처리가 되어야 한다", () => {
    resetTodos();
    const todo = addTodo("삭제 테스트");
    const success = deleteTodo(todo.id);
    expect(success).toBe(true);
    expect(listTodos()).toHaveLength(0);
  });

  test("없는 ID를 삭제하면 false 반환", () => {
    expect(deleteTodo(999)).toBe(false);
  });
});
