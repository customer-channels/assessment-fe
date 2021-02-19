import { Todo } from "./todo.model";

/**
 * Todo list model interface definition
 */
export interface TodoList
{
    // optional name for list
    name?: string;
    // array of Todos
    todos: Todo[];
}