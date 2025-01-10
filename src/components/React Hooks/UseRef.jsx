import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();

  const handleGetValue = () => {
    console.log(inputRef.current.value);
  };

  //   const handleFocus = () => {
  //     inputRef.current.focus();
  //   };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="text"
        placeholder="Enter your name"
      />
      <button onClick={handleGetValue} className="btn btn-primary">
        Focus on me
      </button>
    </>
  );
};

export default UseRef;
