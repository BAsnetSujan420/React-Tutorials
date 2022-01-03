import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Article from "./Article";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
      <hr />
      <h2>My Favorite Person</h2>
      <Article />
    </div>
  );
}

export default App;
