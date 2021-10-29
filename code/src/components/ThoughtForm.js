import React, { useState } from "react";
import './ThoughtForm.css'
import { API_URL } from "utils/urls";
import LoadingThought from 'components/LoadingThought'

const ThoughtForm = ({ setNewThought, setThoughts, thoughts, newThought }) => {
    const [counter, setCounter] = useState(0)
    const [loading, setLoading] = useState(false)

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
        setCounter(event.target.value.length)
    }

    const handleFormSubmit = (event) => {
        setLoading(true)
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
            .then((data) => setTimeout(() => setThoughts([data, ...thoughts]), 2000))
            .finally(() => setTimeout(() => setLoading(false), 2000))
        setNewThought('')
        setCounter(0)
    }

    const checkKey = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            handleFormSubmit(event)
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="form-container">
                <label className="label-title" htmlFor="newThought">What's making you happy right now?</label>
                <textarea className="input-form"
                    align="top"
                    id="newThought"
                    type="text"
                    value={newThought}
                    onChange={onNewThoughtChange}
                    minLength="4"
                    maxLength="140"
                    placeholder="Minimum 5 characters & maximum 140 characters"
                    onKeyDown={(event) => checkKey(event)}
                />
                <p className="character-counter">{140 - counter}/140 characters left</p>
                <button disabled={newThought.length < 5} type="submit" className="submit-button">Send a happy thought!</button>
            </form>

            {loading && <LoadingThought />}
        </div>
    )
}

export default ThoughtForm