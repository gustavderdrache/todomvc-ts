import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { State } from '../state/store';
import { clearCompleted } from '../state/todo';

import TodoCount from './TodoCount';
import Filters from './Filters';

interface StoreProps {
  totalCount: number;
  activeCount: number;
  noCompleted: boolean;
}

interface DispatchProps {
  clearCompleted(): void;
}

interface FooterProps extends StoreProps, DispatchProps, RouteComponentProps<{}> {
}

function Footer({ totalCount, activeCount, noCompleted, clearCompleted }: FooterProps): JSX.Element {
  return (
    <footer className={classnames('footer', totalCount === 0 && 'hidden')}>
      <TodoCount count={activeCount} />

      <Filters />

      <button className={classnames('clear-completed', noCompleted && 'hidden')} onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default withRouter<{}>(
  connect(
    ({ todos }: State, _ownProps: RouteComponentProps<{}>): StoreProps => ({
      totalCount: todos.length,
      activeCount: todos.reduce((sum, {completed}) => sum + Number(!completed), 0),
      noCompleted: !todos.some(todo => todo.completed),
    }),
    (dispatch): DispatchProps => ({
      clearCompleted() {
        dispatch(clearCompleted());
      },
    }),
  )(Footer)
);