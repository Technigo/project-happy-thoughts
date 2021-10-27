import React from 'react'
import './form.css'
import { API_URL } from '../utils/urls'

export const Form = ({ message, setMessage, thougths, setThougths }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            body: JSON.stringify({ message: message }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(API_URL, options)
            .then((res) => res.json())
            .catch(error => console.error('Error:', error)) //save the error in state to show it  error.message
            .then((newThought) => {
                setThougths([newThought, ...thougths])
                setMessage("")
            })
    }

    let charactersRemaining = 140 - message.length;

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <input
                className={`form-input ${charactersRemaining === 0 ? "red_form_border" : ""}`}
                required
                maxLength="140"
                minLength="5"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Message"
            />
            <p className={`form_counter ${charactersRemaining === 0 ? "red_form_counter" : ""}`}>Characters remaining: {charactersRemaining}</p>
            <button type="submit" className="form_button">Send happy thougth</button>
        </form>

    )
}
