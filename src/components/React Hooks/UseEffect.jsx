import { useEffect, useRef, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("Count Updated!");
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <input ref={inputRef} type="text" />
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default UseEffect;
