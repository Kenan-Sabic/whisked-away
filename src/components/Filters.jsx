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

      <div className="mt-42 mt-24 md:mt-40 flex-wrap flex items-center flex-col space-y-4 md:flex-row rounded-xl text-2xl bg-neutral-700 px-2 py-6">
        
        <p className="mt-4 bg-neutral-700 text-white rounded-md px-6 py-2 ml-6 md:ml-8">Filters:</p>
        {filters.map((filter, index) => (
          <div key={index}>
            <p className="flex bg-gray-300 rounded-xl h-10 px-3 ml-5 md:items-center border border-neutral-800">
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

        <div className="w-96 h-1 bg-sandybrown md:mr-4 md:w-full"></div>

        <div className="addFilter md:ml-12">
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
