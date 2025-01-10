import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(1);

  const doubleNumber = useMemo(() => {
    console.log("Computing....");
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Double Number: {doubleNumber}</h2>
      <button onClick={() => setCount(doubleNumber)}>Double Number</button>
    </>
  );
};

export default UseMemo;
