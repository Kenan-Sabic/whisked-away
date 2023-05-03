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

      <div className="mt-42 md:mt-36 flex-wrap flex items-center flex-col space-y-4 md:flex-row md:ml-12 text-2xl">
        <p className="mt-4">Filters:</p>
        {filters.map((filter, index) => (
          <div key={index}>
            <p className="flex bg-gray-300 rounded-xl h-10 px-3 ml-5 md:items-center">
              {filter}
              <img
                className="mt-3 ml-5 flex w-4 h-4 md:mt-1 cursor-pointer"
                src={close}
                alt="Remove Filter"
                onClick={() => handleRemoveFilter(filter)}
              />
            </p>
          </div>
        ))}

        <div className="w-96 h-1 bg-gray-400 md:mr-4 md:w-full"></div>
        <div className="addFilter">
          <form onSubmit={handleAddFilter}>
            <input
              className="w-full px-4 py-2 rounded-lg text-center placeholder-center bg-gray-200 border-solid border-2 border-neutral-500  rounded-lg text-xl pl-4" 
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
