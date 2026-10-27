import { useState } from "react";

function ClickEvents() {
  const [message, setMessage] = useState("Click the button!");
  const [count, setCount] = useState(0);

  function handleClick() {
    setMessage("Button clicked successfully!");
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div className="chapter">
      <h2>React Click Events</h2>

      <p>{message}</p>

      <button onClick={handleClick}>
        Click Me
      </button>

      <hr />

      <h3>Click Counter: {count}</h3>

      <button onClick={increaseCount}>
        Increase Count
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default ClickEvents;
