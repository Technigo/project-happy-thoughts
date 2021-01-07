import { BASE_API } from 'API'
import React, { useState } from 'react'
import { BASE_API } from './API'
import './MessageInput.css'

export const MessageInput = () => {

    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        fetch(`${BASE_API}/thoughts`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            }
        ).then(() => {
            window.location.reload()
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3> Share a happy thought <span className='heart-one' role='img' aria-label='heart'>♥</span> </h3>
            <textarea className="text-input"
                rows='5'
                value={message}
                placeholder='Your thought must contain a min of 5 and max of 140 caracters'
                onChange={event => setMessage(event.target.value)}>
            </textarea>
            <p>{message.length} / 140 </p>
            <input
                type="submit"
                className="button"
                value="Send">
            </input>
        </form>
    )
}