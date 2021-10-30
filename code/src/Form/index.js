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
            .catch(error => console.error('Error:', error))
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
                //option to control max-min length from the form 
                // maxLength="140"
                // minLength="5"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Message"
            />
            <p className={`form_counter ${charactersRemaining <= 0 ? "red_form_counter" : ""}`}>Characters remaining: {charactersRemaining <= 0 ? 0 : charactersRemaining}</p>
            <p className={`form_counter ${message.length < 5 || message.length > 139 ? "red_form_counter" : ""}`}> {message.length > 0 && message.length < 5 && "Min 5 characters"} {message.length > 140 && "Max 140 characters"}</p>
            <button type="submit" className={`form_button ${message.length >= 5 || message.length > 140 ? "form-button-hover" : ""}`} disabled={message.length < 5 || message.length > 140} > <i className="fas fa-heart"></i>  Send happy thougth  <i className="fas fa-heart"></i></button>
        </form >

    )
}
