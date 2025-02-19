import React from 'react';
import './Input.css';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, style }) => {
    return (
        <input  
            type={type}
            value={value} 
            placeholder={placeholder}
            onChange={onChange}
            style={style}
        />
    );
}

export default Input;
