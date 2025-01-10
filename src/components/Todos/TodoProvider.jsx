import { useEffect, useRef, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [task]);

  const handleTaskSumbit = (event) => {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
      setError(false);
    } else {
      setError(true);
    }
    inputRef.current.focus();
  };

  return (
    <>
      <TodoContext.Provider
        value={{ task, setTask, taskList, error, inputRef, handleTaskSumbit }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
