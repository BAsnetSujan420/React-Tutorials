import { useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState({
    firstName: "Venus",
    lastName: "Williams",
    score: 1,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <div className="App">
      <label>
        Score: <b>{player.score}</b> &nbsp;
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </div>
  );
}

export default App;
