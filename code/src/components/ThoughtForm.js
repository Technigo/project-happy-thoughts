import React from 'react';

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {
    return (
        <div className="textBox">
            <form className="textArea" onSubmit={onFormSubmit}>
                <h1>What makes you happy?</h1>
                <textarea value={newThought} onChange={(event) => setNewThought(event.target.value)} className="inputField" type="text" placeholder="Share some happy toughts..." cols="50" rows="5" />
                <button className="sendBtn" type="submit">❤️Send happy toughts❤️</button>
            </form>
        </div>
    )
}

export default ThoughtForm