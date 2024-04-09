import { useState } from "react";
import { audienceOptions } from "../data/options";

export default function RadioButton({ onChange }) {
  const [selectedOption, setSelectedOption] = useState(audienceOptions[0].value);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    onChange(value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.click();
    } 
  };

  return (
    <div className="flex gap-6 md:flex-col md:gap-1">
      {audienceOptions.map((option, index) => (
        <label
          key={index}
          htmlFor={option.label}
          className="pb-1 flex gap-2 items-center cursor-pointer focus-visible:border-2 border-primary"
        >
          <input
            type="radio"
            name={option.label}
            id={option.label}
            value={option.value}
            onKeyDown={handleKeyDown}
            checked={selectedOption == option.value}
            onChange={handleRadioChange}
            className="sr-only peer"
          />
          <span className="w-4 h-4 border border-2 rounded-full border-greyscale-400 peer-checked:bg-white peer-checked:border-primary peer-hover:border-2 peer-hover:border-solid peer-hover:border-primary peer-focus:border-2 peer-focus:border-solid peer-focus:border-primary flex items-center justify-center peer-checked:*:bg-primary transition-all">
            <span className=" w-full h-full border-2 border border-white rounded-full"></span>
          </span>

          {option.label}
        </label>
      ))}
    </div>
  );
}
