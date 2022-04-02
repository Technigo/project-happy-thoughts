import React from "react";

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {

    return (
        <form onSubmit={onFormSubmit}>
            <h1>What's making you happy right now?</h1>
            <textarea
            className="user-input"
            type="text"
            value={newThought}
            id="newThought"
            onChange={(event) => setNewThought(event.target.value)}

            />
            <button
            className="button" 
            type="submit">
            <span role="img" aria-label="heart-emoji">💗{" "}</span>
            Share some happiness! 
            <span role="img" aria-label="heart-emoji">{" "}💗</span>
            </button> 
        </form>
    )
}

export default ThoughtForm