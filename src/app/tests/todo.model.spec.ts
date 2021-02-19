import { Todo } from "../core/models/todo.model";

/**
 * Simple instantiation test for Todo class
 */
describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should get its values from constructor', () => {
    let todo = new Todo({
      title: 'Go out for pizza',
      complete: true
    });
    expect(todo.title).toEqual('Go out for pizza');
    expect(todo.complete).toEqual(true);
  });
});
