import { useState } from "react";
import "./App.css";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Sujan Basnet");
  const [language, setLanguage] = useState("Korean");

  return (
    <div className="App">
      <h1>Set up your Duolingo Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <label>
          Full name :&nbsp;
          {isEditing ? (
            <input
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          ) : (
            <span>{fullName}</span>
          )}
        </label>
        <br />
        <label>
          Langauge : &nbsp;
          {isEditing ? (
            <input
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            />
          ) : (
            <span>{language}</span>
          )}
        </label>
        <br />
        <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
        <p>
          <i>
            I am <span>{fullName}</span>. I want to learn
            <span className="language"> {language} !</span>
          </i>
        </p>
      </form>
    </div>
  );
}

export default App;
