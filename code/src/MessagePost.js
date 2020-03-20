import React from "react"
import "./messagepost.css"

export const MessagePost = (props) => {
    return (
        <div>
            <p className="post-title">What's making you happy right now?</p>
            <input className="post-text" onChange={(event) => props.setNewThought(event.target.value)} type="text"></input>
            <button className="post-button" disabled={!props.newThought} type="submit" >❤️Send Happy Thought❤️</button>
        </div>
    )
}