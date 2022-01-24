import React from "react";
import { useState } from "react";
import { items } from "./data";

export default function Accessories() {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // Was it previously selected?
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      // Otherwise, add this ID to the array.
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <ul>
        {items.map((item) => {
          <li className="">
            <label>
              <input
                type="checkbox"
                checked={true}
                onChange={() => {
                  onToggle(item.id);
                }}
              />
              {item.name}
            </label>
          </li>;
        })}
        <hr />
        <p>
          <b>{selectedCount} items are ready</b>
        </p>
      </ul>
    </>
  );
}
