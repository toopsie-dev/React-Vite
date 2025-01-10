import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoProvider from "./TodoProvider";

const TodosComponent = () => {
  return (
    <TodoProvider>
      <div className="d-flex justify-content-center p-4">
        <div
          className="d-flex flex-column align-items-center border border-success p-5 w-50"
          style={{ borderRadius: "15px" }}
        >
          <h2 className="text-center">Todos</h2>

          <TodoForm />

          <hr />

          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodosComponent;
