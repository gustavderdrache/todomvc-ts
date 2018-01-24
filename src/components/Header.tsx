import * as React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../state/todo';

interface HeaderProps {
  onAddTodo(title: string): void;
}

interface HeaderState {
  title: string;
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      title: '',
    };
  }

  protected handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const title = this.state.title.trim();
    const {onAddTodo} = this.props;

    if (title) {
      onAddTodo(title);
      this.setState({
        title: '',
      });
    }
  }

  protected handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const {title} = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          autoFocus
          className="new-todo"
          placeholder="What needs to be done?"
          value={title}
          onKeyDown={this.handleKeyDown}
          onInput={this.handleInput}
        />
      </header>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    onAddTodo(title: string): void {
      dispatch(addTodo(title));
    },
  }),
)(Header);