import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { taskList } = useContext(TodoContext);

  return (
    <ul className="list-group">
      {taskList.map((task, index) => (
        <li key={index} className="list-group-item">
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
