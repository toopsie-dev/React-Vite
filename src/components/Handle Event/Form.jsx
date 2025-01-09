export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
  };

  return (
    <>
      <form className="w-25 p-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
