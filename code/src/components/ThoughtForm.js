import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="newThought" className="input-label">
        <p>What is making you happy right now?</p>
            </label>
        <input 
        className="text-input"
        id="newThought"
        type="text" 
        value={newThought} 
        onChange={(e) => setNewThought(e.target.value)} 
        />
        <button 
        disabled={newThought.length < 5} 
        type="submit"
        className="send-button"
        >
        Send Happy Thought!
        </button>
      </form>
    );
};

export default ThoughtForm;
