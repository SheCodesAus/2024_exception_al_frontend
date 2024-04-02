import { useState, useRef, useEffect } from 'react';
import { options } from '../data/options';

const Dropdown = ({onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
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
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleOptionKeyDown = (event, option) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(option);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 flex flex-col w-full"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-list"
      >
        {selectedOption ? selectedOption.label : 'Select'}
        <span className='w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black border-t-solid'></span>
      </button>
      {isOpen && (
        <ul className="border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 " id="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              onKeyDown={(event) => handleOptionKeyDown(event, option)}
              tabIndex="0"
              role="option"
              aria-selected={selectedOption === option}
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
