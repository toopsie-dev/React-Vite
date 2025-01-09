const ChildComponent = ({ children }) => {
  return (
    <>
      {children}
      <button className="btn btn-success">Submit</button>
    </>
  );
};

export default ChildComponent;
