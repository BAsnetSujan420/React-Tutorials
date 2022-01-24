import { useState } from "react";

export default function AddCheckpoint({ onAddCheckpoint }) {
  const [checkpoint, setChekpoint] = useState("");
  return (
    <>
      <input
        placeholder="Add checkpoint"
        value={checkpoint}
        onChange={(e) => setChekpoint(e.target.value)}
      />
      <button
        onClick={() => {
          setCheckpoint("");
          onAddCheckpoint(checkpoint);
        }}
      >
        Add
      </button>
    </>
  );
}
