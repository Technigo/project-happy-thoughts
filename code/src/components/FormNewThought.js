import React from 'react'

import { API_URL } from 'utils/urls'

const FormNewThought = ({ thoughts, setThoughts, newThought, setNewThought }) => {

    // when we submit the form, we want to save newThought on back end using fetch and storing it in setThoughts
    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newThought })
        }

        fetch(API_URL, options)
            .then(res => res.json())
            .then(data => setThoughts([data, ...thoughts]))
    }

    // updating newThoughts from the form input like we did last week to have separate function for it 
    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    // displaying form input for new thought
    return (
        <form className="input-form" onSubmit={onFormSubmit}>
            <div className="new-thought">
                <label htmlFor="newThought" className="header-form">What's making you happy right now?</label>
                <textarea type="text"
                    id="newThought"
                    value={newThought}
                    onChange={onNewThoughtChange}
                    placeholder="Type your thoughts here..."
                    className="input-message"
                    rows='5'
                />
                <div className="count">
                    <span className={newThought.length > 140 ? 'red-color-counter' : 'black-color-counter'}>
                        {newThought.length}/140</span>
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className="form-button"
                        disabled={newThought.length < 5 || newThought.length > 140}><span role="img" aria-label="heart">❤️</span><p className="send-thought-button">Send Happy Thought</p> <span role="img" aria-label="heart">❤️</span></button >
                </div>
            </div>
        </form >
    )
}

export default FormNewThought