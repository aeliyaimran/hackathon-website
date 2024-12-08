"use client";
import React, { useState } from "react";

const FilterSidebar = () => {
  const [selectedTypes, setSelectedTypes] = useState(["Sport", "SUV"]);
  const [selectedCapacity, setSelectedCapacity] = useState([
    "2 Person",
    "8 or More",
  ]);
  const [price, setPrice] = useState(100);

  const types = [
    { label: "Sport", count: 10 },
    { label: "SUV", count: 12 },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ];

  const capacities = [
    { label: "2 Person", count: 10 },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16 },
  ];

  const toggleSelection = (list: any, setList: any, item: any) => {
    if (list.includes(item)) {
      setList(list.filter((i: any) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside className="w-full max-w-xs p-4 bg-white border rounded-lg shadow-sm">
      {/* Types Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Type</h3>
        <ul className="mt-2 space-y-2">
          {types.map((type) => (
            <li key={type.label} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`type-${type.label}`}
                checked={selectedTypes.includes(type.label)}
                onChange={() =>
                  toggleSelection(selectedTypes, setSelectedTypes, type.label)
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`type-${type.label}`}
                className="flex items-center justify-between w-full text-gray-700 cursor-pointer"
              >
                {type.label}
                <span className="text-sm text-gray-500">({type.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Capacity</h3>
        <ul className="mt-2 space-y-2">
          {capacities.map((capacity) => (
            <li key={capacity.label} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`capacity-${capacity.label}`}
                checked={selectedCapacity.includes(capacity.label)}
                onChange={() =>
                  toggleSelection(
                    selectedCapacity,
                    setSelectedCapacity,
                    capacity.label
                  )
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`capacity-${capacity.label}`}
                className="flex items-center justify-between w-full text-gray-700 cursor-pointer"
              >
                {capacity.label}
                <span className="text-sm text-gray-500">
                  ({capacity.count})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Price</h3>
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
            className="w-full cursor-pointer accent-blue-600"
          />
          <p className="mt-2 text-gray-700">Max. ${price}.00</p>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
