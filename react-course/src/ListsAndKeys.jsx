import { useState } from "react";

function ListsAndKeys() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Orange" }
  ]);

  function addFruit() {
    const newFruit = {
      id: Date.now(),
      name: "Grapes"
    };

    setFruits((previous) => [...previous, newFruit]);
  }

  function removeFruit(id) {
    setFruits((previous) =>
      previous.filter((fruit) => fruit.id !== id)
    );
  }

  return (
    <div className="chapter">
      <h2>Lists and Keys in React</h2>

      <button onClick={addFruit}>Add Grapes</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}

            <button onClick={() => removeFruit(fruit.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListsAndKeys;
