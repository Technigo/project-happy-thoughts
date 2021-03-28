import React from 'react'

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label className="thoughts-label" htmlFor="thoughts">
                What's making you happy right now?
            </label>
            <input className="input-thought"
                id="thoughts"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
            />
            <button className="send-button" type="submit">
                <span role="img" aria-label="heart-icon">❤️</span>
                   Send Happy Thought
              <span role="img" aria-label="heart-icon">❤️</span>
            </button>
        </form>
    )
}

export default ThoughtForm