import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./page/Home";
import Router from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return <Router />;
}

export default App;
