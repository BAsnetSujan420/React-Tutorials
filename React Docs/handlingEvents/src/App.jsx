import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/SignUp";
import Toolbar from "./components/Toolbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Toolbar />
      <Signup />
    </div>
  );
}

export default App;
