import * as React from 'react';

import ConnectedTodo from './ConnectedTodo';

import { Todo as TodoType } from '../todo';

interface TodoListProps {
  todos: TodoType[];
}

export default function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ConnectedTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}