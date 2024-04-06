/* eslint-disable react/prop-types */
import { useState } from "react";
import { categoryOptions } from "../data/options";

export default function MultiSelectCheckbox({ onChange, values }) {
  const initialState = values ? values.split('|') : []
  const [selectedItems, setSelectedItems] = useState(initialState);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedItems = checked
      ? [...selectedItems, value]
      : selectedItems.filter((item) => item !== value);
    setSelectedItems(updatedItems);
    onChange(updatedItems);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.click();
    }
  };
  return (
    <div className="flex flex-col">
      {categoryOptions.map((option, index) => (
        <label
          key={index}
          htmlFor={option.name}
          className="pb-1 flex gap-2 items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value={option.value}
            checked={selectedItems.includes(option.value)}
            onChange={handleCheckboxChange}
            className="sr-only peer focus:border-2 focus:border-solid focus:border-primary"
            onKeyDown={handleKeyDown}
          />
          <span className="w-4 h-4 border rounded border-greyscale-400 peer-checked:bg-primary peer-checked:border-primary peer-focus:border-2 peer-focus:border-solid peer-focus:border-primary"></span>
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
