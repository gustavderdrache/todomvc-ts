import { connect } from 'react-redux';

import { toggleTodo, removeTodo, editTodo } from '../state/todo';
import { Todo as TodoType } from '../todo';

import Todo from './Todo';

interface OwnProps {
  todo: TodoType;
}

interface DispatchProps {
  onToggleTodo(id: number): void;
  onRemoveTodo(id: number): void;
  onEditTodo(id: number, title: string): void;
}

export default connect(
  null,
  (dispatch, _ownProps: OwnProps): DispatchProps => {
    return {
      onToggleTodo(id) {
        dispatch(toggleTodo(id));
      },
      onRemoveTodo(id) {
        dispatch(removeTodo(id));
      },
      onEditTodo(id, title) {
        dispatch(editTodo(id, title));
      },
    };
  },
)(Todo);