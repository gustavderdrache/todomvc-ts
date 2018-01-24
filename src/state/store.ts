import {createStore, combineReducers, Store, Action} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import {reducer as todoReducer} from './todo';
import {Todo} from '../todo';

export interface State {
  readonly todos: Todo[];
}

export function configureStore(): Store<State> {
  return createStore(
    combineReducers({
      todos: todoReducer as ((state: Todo[] | undefined, action: Action) => Todo[]),
    }),
    devToolsEnhancer({}),
  );
}