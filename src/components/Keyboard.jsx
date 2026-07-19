import { useState, useEffect } from "react";

export default function ReactKeyboard({ onKeyPressed, isDisabled, onClick }) {

    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Clear', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
    ];

    function handleClick(incomingKey) {
        onKeyPressed(incomingKey);
    }

    useEffect(() => {
        const whenKeyIsPressed = (event) => {
            if (isDisabled) {
                alert("Physical Keyboard not in use. Use Mouse!");
            }
            else if (event.key === 'Escape') {
                handleClick('Clear');
            }
            else if (event.key === 'Backspace') {
                handleClick('Backspace');
            }
            if ((/^[a-zA-Z]$/.test(event.key))) {
                handleClick(event.key.toUpperCase());
            }
        }
        window.addEventListener('keydown', whenKeyIsPressed);
        return () => {
            window.removeEventListener('keydown', whenKeyIsPressed);
        };

    }, [isDisabled]);

    return (
        <div className="keyboard-container">
            <button
                className={`keyboard-toggle ${isDisabled ? "disabled" : ""}`}
                onClick={onClick}
            >
                {isDisabled ? "Physical Keyboard Off" : "Physical Keyboard On"}
            </button>

            <div className="keyboard-rows">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <button key={key} className="keyboard-key" onClick={() => handleClick(key)}>
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}
