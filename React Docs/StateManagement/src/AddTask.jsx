import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="What not to be missed"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "ADD",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

let nextId = 3;

export default AddTask;
