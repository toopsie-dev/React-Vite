import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state.count;
  }
};

const UseReducer = () => {
  const initialCount = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialCount);

  const handleCount = (action) => {
    action === "increment"
      ? dispatch({ type: action })
      : action === "decrement"
      ? dispatch({ type: action })
      : dispatch({ type: action });
  };

  return (
    <>
      <div>
        <h2>Count: {state.count}</h2>
      </div>
      <button
        onClick={() => handleCount("increment")}
        className="btn btn-md btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => handleCount("decrement")}
        className="btn btn-md btn-danger"
      >
        Decrement
      </button>
      <button
        onClick={() => handleCount("reset")}
        className="btn btn-md btn-success"
      >
        Reset
      </button>
    </>
  );
};

export default UseReducer;
