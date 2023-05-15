import React, { useState } from "react";
import close from "../assets/close.png";

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

      <div className="flex flex-col flex-wrap items-center space-y-4 rounded-xl px-2 py-6 text-2xl md:flex-row">
        <p className="ml-6 mt-4 rounded-md px-6 py-2 md:ml-8">Filters:</p>
        {filters.map((filter, index) => (
          <div key={index}>
            <p className="ml-5 flex h-10 items-center rounded-xl border bg-gray-300 px-3">
              {filter}
              <img
                className="ml-5 mt-3 flex h-4 w-4 cursor-pointer md:mt-1"
                src={close}
                alt="Remove Filter"
                onClick={() => handleRemoveFilter(filter)}
              />
            </p>
          </div>
        ))}

        <div className="h-[2px] w-96 w-full rounded bg-gray-200 md:mr-4"></div>

        <div className="addFilter md:ml-12">
          <form onSubmit={handleAddFilter}>
            <input
              className="placeholder-center w-full rounded-lg rounded-lg bg-gray-200 px-4 py-2  pl-4 text-center text-xl"
              type="text"
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
