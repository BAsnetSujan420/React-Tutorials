import { useState } from "react";
import AddCheckpoint from "./AddCheckpoint";
import CheckpointList from "./CheckpointList";

let nextId = 3;
const initialCheckpoints = [
  { id: 0, title: "Running shoes", reached: true },
  { id: 1, title: "Smart watch", reached: false },
  { id: 2, title: "Awesome outfit", reached: false },
];

export default function Checkpoints() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState(initialCheckpoints);
  const [total, setTotal] = useState(3);
  const [reached, setReached] = useState(1);

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        reached: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    if (nextItem.reached) {
      setReached(reached + 1);
    } else {
      setReached(reached - 1);
    }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    setTotal(total - 1);
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddCheckpoint onAddCheckpoint={handleAddItem} />
      <CheckpointList
        checkpoints={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {reached} out of {total} reached!
      </b>
    </>
  );
}
