/* eslint-disable react/prop-types */
import { useState } from "react";
import { options } from "../data/options";

export default function MultiSelectCheckbox({ onChange, ...rest }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
    onChange(selectedItems);
  };
  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.name}
          className="pb-1 flex gap-2 items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value={option.value}
            checked={selectedItems.includes(option.value)}
            onChange={handleCheckboxChange}
            className="hidden peer"
          />
          <span className="w-4 h-4 border rounded border-greyscale-400 peer-checked:bg-primary peer-checked:border-primary"></span>
          <svg
            className="
      absolute 
      w-4 h-4
      hidden peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          {option.label}
        </label>
      ))}
    </div>
  );
}
