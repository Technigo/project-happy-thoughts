import React from "react"
import "./messagepost.css"
import { Loader } from "./Loader"

export const MessagePost = (props) => {
    const { newThought, setNewThought, sendingThought, setSendingThought, setMessages } = props
    const handleEvent = (event) => {
        setNewThought(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSendingThought(true)
        fetch("https://williamjensen-happythoughts.herokuapp.com/", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ message: newThought })
        })
            .then(res => res.json())
            .then(latestThought => {
                setMessages(messages => [latestThought, ...messages])
                setNewThought('')
                setSendingThought(false)
            })
    }
    return (
        <form className="thoughts-container form" onSubmit={handleSubmit}>
            {sendingThought && <Loader />}
            {!sendingThought &&
                <div>
                    <p className="post-title">What's making you happy right now?</p>
                    <textarea maxLength={140}
                        value={newThought}
                        className="post-text"
                        onChange={handleEvent} type="text">
                    </textarea>
                    <p className="character-count"
                        style={{ color: newThought.length >= 100 ? "red" : newThought.length >= 50 ? "orange" : "black" }}>
                        {140 - newThought.length} characters left
                </p>
                    <button className="post-button" disabled={!newThought || newThought.length < 5} type="submit" >
                        <span role="img" aria-label="heart">❤️</span>
                        Send Happy Thought<span role="img" aria-label="heart">❤️</span>
                    </button>
                </div>}
        </form >
    )
}