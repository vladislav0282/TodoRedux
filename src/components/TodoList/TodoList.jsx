import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  console.log('Render todo list')

  const todos = useSelector(state => state.todos)

  return (
    <ul className="list-group">
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          {...todo}
          inx={i}
        />
      ))}
    </ul>
  );
};
