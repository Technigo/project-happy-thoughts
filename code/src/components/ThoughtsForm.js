import React from 'react';

const ThoughtsForm = (newThought, onnewThoughtChange, onFormSubmit) => {
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="happyThought">
                <p>What's making you happy right now?</p>
            </label>
            <input
                id="happyThought"
                type="text"
                value={newThought}
                onChange={onnewThoughtChange}
            />
            <button type="submit">Send Happy Thought</button>
        </form>
    );
}

export default ThoughtsForm;