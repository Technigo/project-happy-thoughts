import React from 'react'

export const NewThought = () => {

    return (
        <form className="new-thought">
            <label><p>What's making you happy right now?</p>
            <textarea></textarea>
            </label>
            <button type="submit" className="submit-thought">
            <p><span className="heart-icon" role="img">❤️️</span>
                Send Happy Thought
                <span className="heart-icon" role="img">❤️️</span></p>
                </button>

        </form>
    )
}