import React from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">My favorite sports persons 2021</h1>
      <Profile
        person={{
          imageId: "4YYLAMd",
          name: "Dean Potter",
          age: "Died at aged 43",
        }}
      />
      <Profile
        person={{
          imageId: "5tHisO6",
          name: "Alex Honnold",
          age: "36 years",
        }}
      />

      <Profile
        person={{
          imageId: "6oe3hud",
          name: "Lynn Hill",
          age: "61 years",
        }}
      />
    </div>
  );
}

export default App;
