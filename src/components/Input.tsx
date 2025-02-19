import React from 'react';
import './Input.css';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <input  
            type={type}
            value={value} 
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;
