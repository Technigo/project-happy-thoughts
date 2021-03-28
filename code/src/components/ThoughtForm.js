import React from 'react'

export const ThougthForm = ({ newHappyTought, onNewHappyThoughtChange, onFormSubmit }) => {
    return (
        <div className="new-thought-form-container">
            <form onSubmit={onFormSubmit} className="new-thought-form">
            <label htmlFor="newThought" className="new-thought-label">What´s making you happy right now? </label>
                <textarea 
                    id="newThought" 
                    cols="20" 
                    rows="5"
                    value={newHappyTought}
                    onChange={onNewHappyThoughtChange} 
                    className="thought-message-text-area" 
                    placeholder="Type your happy thoughts here :)"
                />
                <button type="submit" className="new-thought-button">
                    <span role="img" aria-label="heart emoji">❤️ </span>
                        Send Happy Thought 
                    <span role="img" aria-label="heart emoji"> ❤️</span>
                </button>
            </form>
        </div>
    )
}