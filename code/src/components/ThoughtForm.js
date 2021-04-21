import React from 'react'

const ThoughtForm = ({ thoughtNew, onThoughtNewChanged, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label className="form-title" htmlFor="newThought">What's making you happy right now?</label>
            <textarea
                className="input"
                maxLength="140"
                id="newThought"
                type="text"
                value={thoughtNew}
                onChange={onThoughtNewChanged}
            />
            <button className="thought-button" type="submit">
            <span className="heart" role="img" aria-label="heart">❤️</span> Send Happy Thought <span className="heart" role="img" aria-label="heart">❤️</span>
            </button>
        </form>
    )
}

export default ThoughtForm