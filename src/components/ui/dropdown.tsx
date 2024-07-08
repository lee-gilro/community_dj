"use client";
// components/Dropdown.tsx
import { ChangeEvent, FC, useState } from 'react';

// DropdownProps 타입 정의
interface DropdownProps {
  options: { value: string; label: string }[];
  // onChange: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    // onChange(newValue);
  };


  return (
    <select value={selectedValue} onChange={handleChange} className='w-full'>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
