import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

function Button({ text, onClick, disabled }: ButtonProps) {
    return (
        <button disabled={disabled} className={`disabled:bg-slate-400 text-white font-bold py-2 px-4 rounded mx-2 bg-blue-400`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
