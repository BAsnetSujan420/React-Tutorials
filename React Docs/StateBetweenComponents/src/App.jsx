import { useState } from "react";
import { foods, filterItems } from "./data.js";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </div>
  );
};

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:&nbsp; <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map((food) => (
        <tr key={food.id}>
          <td style={{ fontWeight: 600 }}>{food.name}</td>
          <td>{food.description}.</td>
        </tr>
      ))}
    </table>
  );
}

export default App;
