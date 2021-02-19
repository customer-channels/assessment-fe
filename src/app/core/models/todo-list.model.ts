import { Todo } from "./todo.model";

/**
 * Todo list model interface definition
 */
export interface TodoList
{
    // array of Todos
    todos: Todo[];
    // required add method
    add(todo: Todo): void;
    // required remove method
    remove(todo: Todo): void;
}