import React, { useState } from 'react'
import './MessageInput.css'

export const MessageInput = () => {

    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        fetch(MESSAGES_URL,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: message})
            }
        ).then(() => {
             window.location.reload()
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                rows='3'
                value={message}
                className="message-input"
                onChange={event => setMessage(event.target.value)}>
            </textarea>
            <input
                type="submit"
                className="button"
                value="Send your Happy thought">
            </input>
        </form>
    )
}