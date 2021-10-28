import React, { useState } from "react";
import './ThoughtForm.css'
import { API_URL } from "utils/urls";

const ThoughtForm = ({ setNewThought, setThoughts, thoughts, newThought }) => {
    const [counter, setCounter] = useState(0)

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
        setCounter(event.target.value.length)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newThought })
        }

        fetch(API_URL, options)
            .then((res) => res.json())
            .then((data) => setThoughts([data, ...thoughts]))

        setNewThought('')
        setCounter(0)
    }

    return (
        <form onSubmit={handleFormSubmit} className="form-container">
            <label className="label-title" htmlFor="newThought">What's making you happy right now?</label>
            <textarea className="input-form"
                id="newThought"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
                minLength="4"
                maxLength="140"
            />
            <p className="character-counter">{140 - counter}/140 characters left</p>
            <button disabled={newThought.length < 5} type="submit" className="submit-button">Send a happy thought!</button>
        </form>
    )
}

export default ThoughtForm