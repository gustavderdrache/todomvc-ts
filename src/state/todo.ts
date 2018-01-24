import {Action} from 'redux';

import {Todo} from '../todo';

interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  title: string;
}

export function addTodo(title: string): AddTodoAction {
  return {
    type: 'ADD_TODO',
    title,
  };
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  id: number;
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  id: number;
}

export function removeTodo(id: number): RemoveTodoAction {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}

interface SetAllStatusAction {
  type: 'SET_ALL_STATUS_TODO';
  status: boolean;
}

export function setAllStatus(status: boolean): SetAllStatusAction {
  return {
    type: 'SET_ALL_STATUS_TODO',
    status,
  };
}

interface ClearCompletedAction {
  type: 'CLEAR_COMPLETED_TODO';
}

export function clearCompleted(): ClearCompletedAction {
  return {
    type: 'CLEAR_COMPLETED_TODO',
  };
}

interface EditTodoAction {
  type: 'EDIT_TODO';
  id: number;
  title: string;
}

export function editTodo(id: number, title: string): EditTodoAction {
  return {
    type: 'EDIT_TODO',
    id,
    title,
  };
}

let counter = 0;

type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction | SetAllStatusAction | ClearCompletedAction | EditTodoAction;

export function reducer(state: Todo[] = [], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: counter++,
          title: action.title,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'SET_ALL_STATUS_TODO':
      return state.map(todo => ({
        ...todo,
        completed: action.status,
      }));

    case 'CLEAR_COMPLETED_TODO':
      return state.filter(todo => !todo.completed);

    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            title: action.title,
          };
        }

        return todo;
      });

    default:
      return state;
  }
}