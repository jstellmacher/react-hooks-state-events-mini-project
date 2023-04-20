import React from "react";
//jais code
import { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [category, setCat] = useState("Food");
  const [inputVal, setInputVal] = useState("");
//?--------------gotta make my useStates------------------------?
  const changeOption = (e) => {
    setCat(e.target.value);
  };
//?----------------------uhhhhhh try to understand this better------------------------?
  const formSubmitter = (e) => {
    e.preventDefault();
    const object = {
      text: inputVal,
      category: category,
    };
    onTaskFormSubmit(object);
  };
//?-------------uhhhhhhhh try to understand this better---------?
  const changeInput = (e) => {
    setInputVal(e.target.value);
  };
//?---------------uhhhhhhhhh----------------?
  return (
    <form className="new-task-form" onSubmit={formSubmitter}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={inputVal}
          onChange={changeInput}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={changeOption}>
          <option>Food</option>
          <option>Money</option>
          <option>Code</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;