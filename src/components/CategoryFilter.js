import React from "react";
//jais code
function CategoryFilter({ catFilter, categories, onClickEvent }) {
  //?----------------Oh boy I need to memorize the syntax----below: iterating through categories array----passing data through and if the button is clocked then the data is grouped------really reallly realllllllly go through this again-----?
  const categoryButton = categories.map((data) => (
    <button
      onClick={onClickEvent}
      key={data}
      value={data}
      className={data === catFilter ? "selected" : ""}
    >
      {data}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;