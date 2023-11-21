import React, { useState, useEffect, FC, ChangeEvent, useRef } from 'react';

interface Option {
  value: string;
  name: string;
}

interface AutocompleteSelectProps {
  data: Option[];
  label: string;
  placeholder: string;
  value?: any;
  onSelect: any;
}

const AutocompleteSelect: FC<AutocompleteSelectProps> = ({
  data,
  onSelect,
  label,
  placeholder,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value ? value : '');
  const [filteredData, setFilteredData] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Filter data based on the input value
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [inputValue, data]);

  const handleSelect = (selectedItem: Option) => {
    setInputValue(selectedItem.name); // Display the 'name' property
    setIsOpen(false);
    onSelect(selectedItem.value); // Return the 'value' property
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-20 w-1/2" ref={inputRef}>
      <label className="mb-2.5 block text-black dark:text-white">
        {label} <span className="text-meta-1">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        onFocus={() => setIsOpen(true)}
        className="w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full max-h-25 overflow-y-auto border-t border-stroke bg-white dark:bg-form-input">
          {filteredData.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelect(item)}
              className="py-2 px-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-form-inputdark"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteSelect;
