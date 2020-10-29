import React from 'react'

export const NewThought = ({newThought, setNewThought, handleSubmit}) => {

    return (
        <form className="new-thought" onSubmit={handleSubmit}>
            <label><p>What's making you happy right now?</p>
            <textarea 
            placeholder="Happy thoughts"
            onChange={event => setNewThought(event.target.value)}
            value={newThought}
            ></textarea>
            </label>

            <p>{newThought}</p>

            <button type="submit" className="submit-thought">
                <p>
                    <span className="heart-icon" role="img">❤️️</span>
                    Send Happy Thought
                    <span className="heart-icon" role="img">❤️️</span>
                </p>
            </button>

        </form>
    )
}