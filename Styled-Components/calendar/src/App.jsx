import { useState } from "react";
import "./App.css";
import Calendar from "./Calendar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
