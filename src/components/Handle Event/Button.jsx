export const Button = () => {
  const handleClick = (name) => {
    alert(`Hello there! ${name}`);
  };

  return (
    <>
      <button className="btn btn-success" onClick={() => handleClick("Pyke")}>
        Click Me!
      </button>
    </>
  );
};
