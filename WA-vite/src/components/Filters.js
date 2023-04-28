import React, { useState } from "react";
import close from "../images/icons/close.png";

const Filters = () => {
  const [filters, setFilters] = useState(["pastry", "dessert", "chocolate"]);
  const [newFilter, setNewFilter] = useState("");

  const handleAddFilter = (event) => {
    event.preventDefault();
    setFilters([...filters, newFilter]);
    setNewFilter("");
  };

  const handleRemoveFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <div>
      {/*Filters*/}

      <div className="filters">
        <p>Filters:</p>
        {filters.map((filter, index) => (
          <div key={index} className="filter">
            <p>
              {filter}
              <img
                src={close}
                alt="Remove Filter"
                onClick={() => handleRemoveFilter(filter)}
              />
            </p>
          </div>
        ))}
        <div className="line"></div>
        <div className="addFilter">
          <form onSubmit={handleAddFilter}>
            <input
              placeholder="Add filter"
              value={newFilter}
              onChange={(event) => setNewFilter(event.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
