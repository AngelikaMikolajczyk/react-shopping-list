import React from "react";

export function AddItemForm(props) {
  return (
    <form className="AddItemForm" onSubmit={props.onSubmit}>
      <input
        className="AddItemForm_input"
        type={props.inputType}
        name={props.name}
      />
      <button className="AddItemForm_button" type={props.buttonType}>
        + Add Item
      </button>
    </form>
  );
}
