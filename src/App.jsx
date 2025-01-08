const cities = ["Cabuyao", "Rizal", "Bacolod", "Davao City"];

const persons = [
  {
    id: 1,
    f_name: "Pyke",
    age: 27,
    married: false,
  },
  {
    id: 2,
    f_name: "Doe",
    age: 19,
    married: false,
  },
  {
    id: 3,
    f_name: "Hans",
    age: 31,
    married: true,
  },
  {
    id: 4,
    f_name: "Renz",
    age: 26,
    married: true,
  },
  {
    id: 5,
    f_name: "Millie",
    age: 224,
    married: false,
  },
];

function App() {
  return (
    <>
      <h2>Cities</h2>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
      <br />
      <h2>List of person</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {persons.length !== 0 &&
            persons.map((person) => (
              <tr key={person.id}>
                <th scope="row">{person.id}</th>
                <td>{person.f_name}</td>
                <td>{person.age}</td>
                <td>{person.married ? "Already Married" : "Single"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
