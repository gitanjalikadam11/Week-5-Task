import { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>useMemo Hook</h1>

      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <hr />

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseMemo;
