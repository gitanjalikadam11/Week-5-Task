import UseReducerExample from "./useReducer";
import "./index.css";

function App() {
  return (
    <div>
      <UseReducerExample />
    </div>
  );
}

export default App;



// useContext

// import { useState, useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
// import "./index.css";

// function ThemeButton() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === "light" ? "Dark" : "Light"} Mode
//     </button>
//   );
// }

// function Home() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`app ${theme}`}>
//       <h1>React useContext</h1>
//       <p>Current Theme: {theme}</p>
//       <p>Learn React step by step!</p>
//       <ThemeButton />
//     </div>
//   );
// }

// function App() {
//   const [theme, setTheme] = useState("light");

//   function toggleTheme() {
//     setTheme((currentTheme) =>
//       currentTheme === "light" ? "dark" : "light"
//     );
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <Home />
//     </ThemeContext.Provider>
//   );
// }

// export default App;
