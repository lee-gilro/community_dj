import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
    size: 'small' | 'medium' | 'large';
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ size, options, onChange }) => {
    const getSizeClass = () => {
        switch (size) {
            case 'small':
                return styles.small;
            case 'medium':
                return styles.medium;
            case 'large':
                return styles.large;
            default:
                return '';
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <select className={`${styles.dropdown} ${getSizeClass()}`} onChange={handleChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
