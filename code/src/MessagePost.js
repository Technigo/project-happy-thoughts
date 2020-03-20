import React, { useState } from "react"
import "./messagepost.css"

export const MessagePost = (props) => {
    const [textLength, setTextLength] = useState(0)
    const handleEvent = (event) => {
        props.setNewThought(event.target.value)
        setTextLength(event.target.value.length)

    }


    return (
        <div>
            <p className="post-title">What's making you happy right now?</p>
            <textarea maxLength={140}
                className="post-text"
                onChange={handleEvent} type="text"></textarea>
            <p className="character-count"
                style={{ color: textLength >= 100 ? "red" : textLength >= 50 ? "orange" : "black" }}>
                {140 - textLength} characters left</p>
            <button className="post-button" disabled={!props.newThought} type="submit" >❤️Send Happy Thought❤️</button>
        </div>
    )
}