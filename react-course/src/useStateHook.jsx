import { useState } from "react";

function useStateHook() {
  // Counter state
  const [count, setCount] = useState(0);

  // Name state
  const [name, setName] = useState("");

  // Show/hide state
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="chapter">
      <h2>React useState Hook</h2>

      {/* Counter */}
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      {/* Input state */}
      <h3>Name Input</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Hello, {name || "Guest"}!</p>

      <hr />

      {/* Toggle state */}
      <h3>Show and Hide</h3>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && <p>Welcome to React Hooks!</p>}
    </div>
  );
}

export default useStateHook;
