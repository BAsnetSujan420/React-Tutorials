import { useState } from "react";

export default function CheckpointList({
  checkpoints,
  onChangeItem,
  onDeleteItem,
}) {
  return (
    <ul>
      {checkpoints.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.reached}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  reached: e.target.checked,
                });
              }}
            />
            {item.title}
          </label>
          <button className="delete-btn" onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
