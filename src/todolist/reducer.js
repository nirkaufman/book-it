import {actions} from "./actions.js";
import {produce} from 'immer';


export const todosReducer = produce((draft, action) => {
  switch (action.type) {

    case actions.addTodo:
      draft.todos.push(action.payload);
      break;

    case actions.removeTodo:
      draft.todos = draft.todos.filter((todo) => todo.id !== action.payload);
      break;

    case actions.toggleTodo:
      const todoToToggle = draft.todos.find(todo => todo.id === action.payload);

      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
      break;

    case actions.setTodos:
      draft.todos = action.payload;
      break;

    case actions.setLoading:
      draft.loading = action.payload;
      break;

    case actions.addToast:
      draft.toasts.push(action.payload);
      break;

    case actions.removeToast:
      draft.toasts = draft.toasts.filter((toast) => toast.id !== action.payload);
      break;

    case actions.setOnline:
      draft.online = action.payload;
      break;

    default:
      return draft;
  }

})
