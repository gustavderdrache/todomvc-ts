import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import classnames from 'classnames';

import AllTodoList from './AllTodoList';
import ActiveTodoList from './ActiveTodoList';
import CompletedTodoList from './CompletedTodoList';

interface MainProps extends RouteComponentProps<{}> {
  todoCount: number;
  completedCount: number;
  onSetAllStatus(status: boolean): void;
}

export default function Main({ todoCount, completedCount, onSetAllStatus }: MainProps): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const status = event.target.checked;

    onSetAllStatus(status);
  }

  return (
    <section className={classnames('main', todoCount === 0 && 'hidden')} >
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        checked={todoCount === completedCount}
        onChange={handleChange}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <Switch>
        <Route path="/active" component={ActiveTodoList} />
        <Route path="/completed" component={CompletedTodoList} />
        <Route component={AllTodoList} />
      </Switch>
    </section>
  );
}

