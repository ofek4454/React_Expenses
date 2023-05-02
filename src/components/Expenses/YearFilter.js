import React from "react";

import "./YearFilter.css";

const YearFilter = (props) => {
  const selectedHandler = (event) => {
    props.onFilterSet(event.target.value);
  };

  return (
    <div className="year-filter">
      <div className="year-filter__control">
        <label>Filter by year</label>
        <select value={props.value} onChange={selectedHandler}>
          <option value="all">show all</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
