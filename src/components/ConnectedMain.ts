import { withRouter, RouteComponentProps } from 'react-router-dom';

import { connect } from 'react-redux';

import { State } from '../state/store';
import { setAllStatus } from '../state/todo';

import Main from './Main';

// use withRouter() because otherwise connect() will block UI updates on route change
export default withRouter<{}>(
  connect(
    ({ todos }: State, _ownProps: RouteComponentProps<{}>) => ({
      todoCount: todos.length,
      completedCount: todos.reduce(
        (count, todo) => count + Number(todo.completed),
        0,
      ),
    }),
    dispatch => ({
      onSetAllStatus(status: boolean) {
        dispatch(setAllStatus(status));
      },
    }),
  )(Main),
);