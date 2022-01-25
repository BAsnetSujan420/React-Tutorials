import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import Checkpoints from "./Checkpoints";
import Accessories from "./Accessories";

function App() {
  return (
    <div className="App">
      <h1>Trail running to Tarebhir via Jamchen Vijaya Stupa.</h1>
      <h2>Current Time: </h2>
      <Clock />
      <h2>What I Need: </h2>
      <Accessories />
      <h2>Update checkpoints on the trail: </h2>
      <Checkpoints />
      <h2></h2>
    </div>
  );
}

export default App;
