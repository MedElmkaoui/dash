import React, { useState, useEffect, FC, ChangeEvent, useRef } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

interface Option {
  value: string;
  name: string;
}

interface AutocompleteSelectProps {
  data: Option[];
  label: string;
  placeholder: string;
  value?: any;
  row?:boolean 
  onSelect: any;
}

const AutocompleteSelect: FC<AutocompleteSelectProps> = ({
  data,
  onSelect,
  label,
  placeholder,
  value,
  row
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
    <div className={`relative z-9999 ${row ? 'xl:w-full' : 'w-1/2'}`} ref={inputRef}>
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
        className="w-full appearance-none rounded border border-stroke  py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
   
      {isOpen && (
        <div className="absolute z-9999 p-2 top-full left-0 w-full max-h-35 border dark:border-graydark  overflow-y-auto border-t border-stroke bg-white dark:bg-form-input">
          {filteredData.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelect(item)}
              className="py-2 px-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-black"
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
