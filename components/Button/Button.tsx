import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    color: 'blue' | 'red' | 'green';
}

function Button({ text, onClick, color, disabled }: ButtonProps) {
    return (
        <button disabled={disabled} className={`bg-${color}-500 disabled:bg-slate-400 text-white font-bold py-2 px-4 rounded`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
