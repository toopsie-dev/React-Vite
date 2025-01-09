import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana", "Durian"]);
  const [isChecked, setIsChecked] = useState(false);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleShowFruits = () => {
    setIsChecked(!isChecked);
  };

  const handleAddFruit = (event) => {
    event.preventDefault();
    setFruits([...fruits, event.target.elements.new_fruit.value]);
    document.getElementById("add-fruit-form").reset();
  };

  const handleRemoveFruit = (fruitIndex) => {
    const updateFruits = fruits.filter((fruit, index) => index !== fruitIndex);
    setFruits(updateFruits);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button className="btn btn-primary" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={handleDecrement}>
        Decrement
      </button>

      <br />
      <br />

      <label>Show fruits: </label>
      <input type="checkbox" onChange={handleShowFruits} checked={isChecked} />

      <br />

      <form id="add-fruit-form" onSubmit={handleAddFruit}>
        <label>Add fruit: </label>
        <input type="text" name="new_fruit" placeholder="Enter new fruit" />
        <button type="submit" className="btn btn-sm btn-success">
          Add Fruit
        </button>
      </form>

      <ul className="list-group">
        {isChecked &&
          fruits.map((fruit, index) => (
            <div key={index}>
              <li className="list-group-item">{fruit}</li>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveFruit(index)}
              >
                Remove
              </button>
            </div>
          ))}
      </ul>
    </>
  );
}
