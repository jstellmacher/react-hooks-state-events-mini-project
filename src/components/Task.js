import React from "react";
//jais code
function Task({ text, category, removeData }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeData} value={text}>
        X
      </button>
    </div>
  );
}

export default Task;