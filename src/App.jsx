import React, { useState } from "react";
import ReactKeyboard from "./components/Keyboard.jsx";
import './index.css';


export default function TypedText() {

    const [isDisabled, setIsDisabled] = useState(false);
    const toggleState = () => {
        setIsDisabled(prev => !prev);
    };

    const [text, setText] = useState("");
    function handleChange(e) {
        setText(e.target.value)
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
    function handleKey(incomingKey) {
        if (incomingKey === "Backspace") {
            setText((prevText) => prevText.slice(0, -1));
        } else if (incomingKey === "Clear") {
            setText("");
        } else if (incomingKey === 'Space') {
            setText((prevText) => prevText + ' ');
        } else {
            setText((prevText) => prevText + incomingKey);
        }
    };

    return (
        <div>
            <h1>Virtual Keyboard feat. Physical Support</h1>
            <h2>Go ahead and type your masterpiece!</h2>
            <textarea value={text} onChange={handleChange} disabled={isDisabled} />
            <ReactKeyboard
                isDisabled={isDisabled}
                onClick={toggleState}
                onKeyPressed={handleKey} />
        </div>
    )
}