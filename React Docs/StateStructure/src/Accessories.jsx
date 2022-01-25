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
          const isSelected = selectedIds.includes(item.id);
          return (
            <li className={isSelected ? "selelcted" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {
                    handleToggle(item.id);
                  }}
                />
                {item.name}
              </label>
            </li>
          );
        })}
        <p>
          {selectedCount === 3 ? (
            <p className="ready-for-trail">All things ready. Lets start!!!</p>
          ) : (
            <b>{selectedCount} items are ready</b>
          )}
        </p>
        <hr />
      </ul>
    </>
  );
}
