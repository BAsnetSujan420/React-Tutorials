import { useState } from "react";
import "./App.css";
import ContactManager from "./ContactManager";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <ContactManager />
      <hr />
      <Gallery />
    </div>
  );
}

export default App;
