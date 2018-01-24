import * as React from 'react';
import classnames from 'classnames';

import { Todo as TodoType } from '../todo';

interface TodoProps {
  todo: TodoType;
  onToggleTodo(id: number): void;
  onRemoveTodo(id: number): void;
  onEditTodo(id: number, title: string): void;
}

interface TodoState {
  editing: boolean;
  editText: string;
}

export default class Todo extends React.PureComponent<TodoProps, TodoState> {
  protected input: HTMLInputElement | null;

  constructor(props: TodoProps) {
    super(props);

    this.state = {
      editing: false,
      editText: props.todo.title,
    };
  }

  protected enterEditingMode = () => {
    this.setState({
      editing: true,
    }, () => {
      if (this.input) {
        this.input.focus();
      }
    });
  }

  protected leaveEditingMode = () => {
    this.setState({
      editing: false,
    });
  }

  protected updateTodo = () => {
    const {todo, onEditTodo, onRemoveTodo} = this.props;
    const {editText} = this.state;
    const title = editText.trim();

    if (!title) {
      onRemoveTodo(todo.id);
      return;
    }

    onEditTodo(todo.id, title);
    this.leaveEditingMode();
  }

  protected handleInputBlur = () => {
    this.updateTodo();
  }

  protected handleInputKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case 'Escape':
        this.setState({
          editText: this.props.todo.title,
        });

        this.leaveEditingMode();
        return;

      case 'Enter':
      case 'Return':
        this.updateTodo();
        return;
    }
  }

  protected handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editText: event.target.value,
    });
  }

  protected toggleTodo = () => {
    const { onToggleTodo, todo } = this.props;

    onToggleTodo(todo.id);
  }

  protected removeTodo = () => {
    const { onRemoveTodo, todo } = this.props;

    onRemoveTodo(todo.id);
  }

  render() {
    const {todo} = this.props;
    const {editing, editText} = this.state;

    return (
      <li className={classnames(todo.completed && 'completed', editing && 'editing')} onDoubleClick={this.enterEditingMode}>
        <div className="view">
          <input type="checkbox" className="toggle" checked={todo.completed} onChange={this.toggleTodo} />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.removeTodo} />
        </div>
        <input
          ref={input => this.input = input}
          className="edit"
          value={editText}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onKeyDown={this.handleInputKeyDown}
        />
      </li>
    );
  }
}