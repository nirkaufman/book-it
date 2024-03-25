import {useEffect, useReducer} from "react";
import {todosReducer} from "./reducer.js";
import {state} from "./state.js";
import {actions} from "./actions.js";

export function useTodos({todos = []}) {
  const [todosState, dispatch] = useReducer(todosReducer, {...state, todos});

  function addTodo(event) {
    if(event.key === 'Enter') {
      const newTodo = {
        id: Date.now(),
        title: event.target.value,
        completed: false
      };

      dispatch({type: actions.addTodo, payload: newTodo});
      event.target.value = '';
    }
  }

  function toggleTodo(id) {
    dispatch({type: actions.toggleTodo, payload: id});
  }

  function removeTodo(id) {
    dispatch({type: actions.removeTodo, payload: id});
  }

  return {
    todos: todosState.todos,
    addTodo,
    toggleTodo,
    removeTodo,
    loading: todosState.loading,
  }
}
