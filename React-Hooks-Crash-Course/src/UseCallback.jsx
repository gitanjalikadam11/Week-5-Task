import { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Hook</h1>

      <h2>Count: {count}</h2>

      <button onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
}

export default UseCallback;
