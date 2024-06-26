/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, onSelect, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleOptionKeyDown = (event, option) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelect(option.value);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        className="border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 flex flex-row justify-between w-full items-center hover:bg-greyscale-300 text-left"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-list"
        {...rest}
      >
        {selectedOption ? selectedOption.label : "Select"}
        <span
          className="w-2 h-2 border-r-2 border-b-2 transform rotate-45"
        ></span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 top-100% w-full border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 cursor-pointer max-h-[200px] overflow-y-auto"
          id="dropdown-list"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              onKeyDown={(event) => handleOptionKeyDown(event, option)}
              tabIndex="0"
              role="option"
              aria-selected={selectedOption === option}
              className="py-1.5 px-3 hover:bg-greyscale-300 "
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
