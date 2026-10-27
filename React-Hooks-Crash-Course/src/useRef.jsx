import { useRef, useState } from "react";

function UseRefExample() {
  const inputRef = useRef(null);
  const clickCount = useRef(0);
  const [message, setMessage] = useState("");

  function handleFocus() {
    inputRef.current.focus();
    setMessage("Input focused!");
  }

  function handleClear() {
    inputRef.current.value = "";
    inputRef.current.focus();
    setMessage("Input cleared!");
  }

  function handleClickCount() {
    clickCount.current += 1;
    console.log("Button clicks:", clickCount.current);
    setMessage(`Button clicked ${clickCount.current} times.`);
  }

  return (
    <div className="container">
      <h1>useRef Hook</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <div className="button-group">
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear}>Clear Input</button>
        <button onClick={handleClickCount}>Count Clicks</button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default UseRefExample;
