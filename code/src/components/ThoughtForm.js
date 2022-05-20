import React from "react";

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {

    return (
        <form onSubmit={onFormSubmit}>
            <h1>What's making you happy right now? <span role="img" aria-label="lollipop emoji">🍭</span></h1>
            <textarea
            className="user-input"
            type="text"
            value={newThought}
            id="newThought"
            placeholder="Type a minimum of 5 characters :)"
            onChange={(event) => setNewThought(event.target.value)}
            maxLength={140}
            />
            <button
            disabled={newThought.length < 6 || newThought.length > 140}
            className="share-button" 
            type="submit">
            <span role="img" aria-label="heart emoji">💗{" "}</span>
            Share Happy Thought! 
            <span role="img" aria-label="heart emoji">{" "}💗</span>
            </button> 
        </form>
    )
}

export default ThoughtForm