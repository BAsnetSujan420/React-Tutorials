import { useState } from "react";

export default function AddCheckpoint({ onAddCheckpoint }) {
  const [checkpoint, setCheckpoint] = useState("");
  return (
    <div>
      <input
        placeholder="Add checkpoint"
        value={checkpoint}
        onChange={(e) => setCheckpoint(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          onAddCheckpoint(checkpoint);
          setCheckpoint("");
        }}
      >
        Add
      </button>
    </div>
  );
}
