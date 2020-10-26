import React, { useState } from 'react'

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
            <input
                type="text"
                className="message-input"
                onChange={event => setMessage(event.target.value)}>
            </input>
            <input
                type="submit"
                className="button"
                value="Send your Happy thought" >
            </input>
        </form>
    )
}