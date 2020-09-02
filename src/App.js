import React from "react";
import { AddItemForm } from "./AddItemForm";
import { ListItems } from "./ListItems";
import "./styles.css";

export default function App() {
  let [items, setItems] = React.useState(
    JSON.parse(localStorage.getItem("shoppingList"))
      ? JSON.parse(localStorage.getItem("shoppingList"))
      : []
  );

  React.useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  function handleSubmit(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: event.currentTarget.itemName.value,
        id: Date.now(),
        complete: false
      }
    ]);
  }

  function handleButtonClick(element) {
    setItems(items.filter(item => item.id !== element.id));
  }

  function handleInputClick(element) {
    const itemRef = items.find(item => item.id === element.id);
    itemRef.complete = !itemRef.complete;
    const newArray = [...items];
    setItems(newArray);
  }

  return (
    <div className="App">
      <AddItemForm
        inputType="text"
        buttonType="submit"
        onSubmit={handleSubmit}
        name="itemName"
      />
      <ListItems
        items={items}
        onButtonClick={handleButtonClick}
        onInputClick={handleInputClick}
      />
    </div>
  );
}
