const todos = ["Jogging", "learn programming", "Cooking", "Gaming", "Watching"];

const Todo = () => {
  return (
    <>
      <h2>Todo List</h2>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {todo}
          </li>
        ))}
      </ul>
      <br />
    </>
  );
};

export default Todo;
