import React, { useState } from "react";

export default function TypedText() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>React Virtual Keyboard with Physical Support Feature</h1>
            <h2>Go ahead and type a message</h2>
            <input value={text} onChange={handleChange} />
        </div>
    )
}