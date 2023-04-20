import React from "react";
//jais code
//?-----------------------------------------------------------------?
import Task from "./Task";
//?----------below: destructured-iterate through tasks, pass through data, and create Tasks with key, text, category, and be able to delete it--------------------------?
function TaskList({ tasks, removeData }) {
  const taskList = tasks.map((data) => (
    <Task
      key={data.text}
      text={data.text}
      category={data.category}
      removeData={removeData}
    />
  ));
//?-----------------------------------------------------------------?
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;