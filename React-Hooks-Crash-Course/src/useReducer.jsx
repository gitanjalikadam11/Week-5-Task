import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };

    case "decrease":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>useReducer Hook</h1>

      <h2>Count: {state.count}</h2>

      <div className="button-group">
        <button onClick={() => dispatch({ type: "increase" })}>
          Increase
        </button>

        <button onClick={() => dispatch({ type: "decrease" })}>
          Decrease
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseReducerExample;
