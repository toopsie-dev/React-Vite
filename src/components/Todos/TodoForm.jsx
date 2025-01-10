import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoForm = () => {
  const { inputRef, error, task, setTask, handleTaskSumbit } =
    useContext(TodoContext);
  return (
    <form className="form text-center" onSubmit={handleTaskSumbit}>
      <div className="mb-2">
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {error && (
          <p style={{ fontSize: "12px", color: "red" }}>
            You must not have empty task.
          </p>
        )}
      </div>
      <div>
        <button type="submit" className="btn btn-md btn-success">
          Add task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
