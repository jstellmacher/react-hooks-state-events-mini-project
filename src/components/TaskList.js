import React from "react";
//jais code
import Task from "./Task";

function TaskList({ tasks, removeData }) {
  const taskList = tasks.map((data) => (
    <Task
      key={data.text}
      text={data.text}
      category={data.category}
      removeData={removeData}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;