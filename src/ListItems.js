import React from "react";

export function ListItems(props) {
  return (
    <ul className="ListItems">
      {props.items.map(item => {
        return (
          <li className="ListItems_item" key={item.id}>
            <input
              className="ListItems_checkbox"
              type="checkbox"
              checked={item.complete}
              onClick={() => props.onInputClick(item)}
            />
            <span className="ListItems_name">{item.name}</span>
            <button
              className="ListItems_button"
              onClick={() => props.onButtonClick(item)}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
}
