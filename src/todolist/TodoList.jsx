import {useTodos} from "./use-todos.js";
import {useCollection} from "../hooks/use-collection.js";

export function TodoList() {
  const [todosData, loading] = useCollection('todos');
  const {todos, addTodo,removeTodo, toggleTodo} = useTodos(todosData);

  if(loading) return <div>טוען...</div>

  return (
    <div>
      <h2>דברים לעשות</h2>
      <input type='text' onKeyDown={addTodo}/>
      <ul>
        {todos.map((todo) => {
          return (
              <li key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                {todo.title}
                <button onClick={() => removeTodo(todo.id)}>מחק</button>
              </li>
          );
        })}
      </ul>
    </div>
  );
}
