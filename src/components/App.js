import React from "react";
//jais code
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
//! So many imports
import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
//?-----------------------------------------------------------------?
function App() {
  const [catFilter, setCat] = useState("All");
  const [lists, setList] = useState(TASKS);
//?------------Define my useState ^ I want all to show for now--------------?
  const filteredTasks = lists.filter(
    (listItem) =>
      listItem.category === catFilter || catFilter === "All"
  );
  // array.filter(function(currentValue, index, arr), thisValue) ------- I am filtering through my lists array that I defined in my useState
//?----I used a ternary ^ This means that ...list.filter = creates new array pass a test provided by function----does not replace array----?
  const onClickEvent = (e) => {
    const category = e.target.value;
    setCat(category);
  };
  // syntax for useState => const [state, updateState] = useState(0)
//?---gotta make an onclick event category is defined by the value input --- setCat (defined in my useState--- ) passes category---------------------------------?
  const removeData = (e) => {
    const updatedList = lists.filter((data) => data.text !== e.target.value);
    setList(updatedList);
  };
//?-----event to remove data item-----after the data is removed ^ this filters thorugh data and if text doesnt equal what is in the input then it is updated---- setList passes in updatedList---?
  const onTaskFormSubmit = (object) => {
    setList([...lists, object]);
  };
  //?-----------this passes object as a param into setList and then spreads out lists and updates object-------ask morgan to confirm please----------?

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onClickEvent={onClickEvent}
        catFilter={catFilter}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} removeData={removeData} />
    </div>
  );
}
//?---------------------above: in the CategoryFilter component categories, event, and catfilter are all------------the new task for is also incited---------------?

export default App;