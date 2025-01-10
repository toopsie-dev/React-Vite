import { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
    </>
  );
};

export default UseCallback;
