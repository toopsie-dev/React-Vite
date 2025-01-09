const Count = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <>
      <h2>Count: {count}</h2>
      <button className="btn btn-md btn-primary" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-md btn-danger" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Count;
