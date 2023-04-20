import React from "react";
//jais code
//?-----------------------------------------------------------------?
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
//?-------------------destructured yayyyyyyy goal is to put category into label and have the delete button--------------------------------?
export default Task;