import React from 'react'

export const ThougthForm = ({ newHappyTought, onNewHappyThoughtChange, onFormSubmit }) => {
    return (
        <div>
            <form onSubmit={onFormSubmit} className="new-thought-form">
            <label htmlFor="newThought">What´s making you happy right now? </label>
                <textarea 
                    id="newThought" 
                    cols="20" 
                    rows="5"
                    value={newHappyTought}
                    onChange={onNewHappyThoughtChange} 
                    className="thought-message-text-area" 
                    placeholder="Type your happy thoughts here :)"
                />
                <button type="submit">
                    <span role="img" aria-label="heart emoji">❤️</span>
                        Send Happy Though 
                    <span role="img" aria-label="heart emoji">❤️</span>
                </button>
            </form>
        </div>
    )
}