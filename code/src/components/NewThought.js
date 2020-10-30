import React from 'react'

export const NewThought = ({newThought, setNewThought, handleSubmit, errorMessage}) => {

    const countCharacters = (maxNumber) => {
        const characters = maxNumber - newThought.length
        const characterCount = document.getElementById("character-count");

        if (newThought.length > maxNumber) {
            characterCount.classList.add("warning")
        }
        return characters
    }

    return (
        <form className="new-thought" onSubmit={handleSubmit}>
            <label>
                <p>What's making you happy right now?</p>
                <textarea 
                    placeholder="Happy thoughts"
                    onChange={event => setNewThought(event.target.value)}
                    value={newThought}
                ></textarea>
            </label>
            <div className="details">
                <p className="warning">{errorMessage}</p>
                <p id="character-count" className="character-count">{countCharacters(140)}</p>
            </div>
            
            <button type="submit" className="submit-thought">
                <p>
                    <span className="heart-icon" role="img" aria-label="heart-icon">❤️️</span>
                    Send Happy Thought
                    <span className="heart-icon" role="img" aria-label="heart-icon">❤️️</span>
                </p>
            </button>

        </form>
    )
}