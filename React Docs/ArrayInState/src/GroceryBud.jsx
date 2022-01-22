import { useState } from "react";
import { favorites } from "./data";

const GroceryBud = () => {
  const [itemName, setItemName] = useState("");
  const [newItem, setNewItem] = useState({});
  const [myList, setMyList] = useState(favorites);

  function handleClick(e) {
    e.preventDefault();
    if (itemName) {
      setMyList([
        ...myList,
        {
          id: new Date().getTime() / 1000,
          name: itemName,
          count: 1,
        },
      ]);

      setItemName("");
    }
  }

  function handleAddItem(itemId) {
    setMyList(
      myList.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleRemoveItem(itemId) {
    let otherItems = myList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          count: item.count - 1,
        };
      } else {
        return item;
      }
    });
    otherItems = otherItems.filter((p) => p.count > 0);
    setMyList(otherItems);
  }

  return (
    <>
      <h3>Today's Gorcery List:</h3>
      <input value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button className="addItem" onClick={handleClick}>
        Add Item
      </button>
      <div>
        {myList.map((item) => (
          <div className="item" key={item.id}>
            <div className="itemName">
              {item.name} (<b>{item.count}</b>)
            </div>
            <div className="btn-container">
              <button
                onClick={() => {
                  handleAddItem(item.id);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  handleRemoveItem(item.id);
                }}
              >
                –
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroceryBud;
