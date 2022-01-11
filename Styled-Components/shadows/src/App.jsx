import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import BlueWrapper from "./components/BlueWrapper";
import { ElevatedBox } from "./components/ElevatedBox";
import { MeduimBox } from "./components/MeduimBox";
import { SubtleBox } from "./components/SubtleBox";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <SubtleBox />
        <MeduimBox />
        <ElevatedBox />
      </Wrapper>
      <BlueWrapper>
        <SubtleBox />
        <MeduimBox />
        <ElevatedBox />
      </BlueWrapper>
    </div>
  );
}

export default App;
