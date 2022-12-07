import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FilterRadioButton({ getType }) {
  const [filterType, setFilterType] = useState("");
  useEffect(() => {
    getType(filterType);
  }, [filterType])
  return (
    <form action="#" className="filter-radio-btns ">
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            value=""
            onChange={(e) => setFilterType(e.target.value)}
            checked={filterType === ""}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            onChange={(e) => setFilterType(e.target.value)}
            value="movie"
            checked={filterType === "movie"}
          />
          <span>Movies</span>
        </label>
      </p>
      <p>
        <label>
          <input
            name="group1"
            type="radio"
            onChange={(e) => setFilterType(e.target.value)}
            value="series"
            checked={filterType === "series"}
          />
          <span>Series</span>
        </label>
      </p>
    </form>
  );
}

export default FilterRadioButton;
