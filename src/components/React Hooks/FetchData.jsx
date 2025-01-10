import { useEffect, useState } from "react";

const FetchData = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json().then((data) => setTodos(data))
    );
  }, []);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
