import React from "react";

const TodoOder = ({ priority, name }) => {
  return (
    <li>
      {name}
      {priority > 3 && <i> (Priority : 🔥)</i>}
    </li>
  );
};

export default TodoOder;
