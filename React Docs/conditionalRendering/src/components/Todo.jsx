import React from "react";

const Todo = ({ name, isDone }) => {
  return (
    <li>
      {name}
      {isDone ? " ✔" : " ❌"}
    </li>
  );
};

export default Todo;
