import React, { useState } from 'react'
import './happyForm.css'

export const HappyForm = ({ onFormSubmit }) => {
    const [message, setMessage] = useState("")

    const sendHappyThought = (event) => {
        event.preventDefault()
        onFormSubmit(message)
    }

    return (
        <article>
            <h3>What's making you happy right now?</h3>
            <p>{message}</p>
            <textarea r
                rows="3"
                onChange={event => setMessage(event.target.value)}></textarea>
            <p>{message.length <= 140 ? 140 - message.length + ' character(s) left' : message.length - 140 + ' character(s) over the limit'}</p>
            <button
                type="submit"
                onClick={sendHappyThought}
                disabled={message.length < 5 || message.length > 140 ? true : false}>
                Send Happy Thought
            </button>
        </article>
    )
}