import { Todo } from "./todo.model";

/**
 * Todo list model interface definition
 */
export interface TodoList
{
    // array of Todos
    todos: Todo[];
    // optional add method
    addTodo?: () => void;
    // optional remove method
    remove?: (todo: Todo) => void;
}