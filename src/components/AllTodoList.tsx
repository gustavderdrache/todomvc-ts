import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { State } from '../state/store';

import TodoList from './TodoList';

export default connect(
  ({ todos }: State, _ownProps: RouteComponentProps<{}>) => ({ todos }),
)(TodoList);