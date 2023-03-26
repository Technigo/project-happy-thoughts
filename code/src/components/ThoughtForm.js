/* eslint-disable */
import React from 'react';

export const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {

const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140;
const characterWarning = () => {
    if (newThought.length > 140 ) {
        return (
            <p className="character-warning">You are trying to send too much love.</p>)
    }   else {
        return (<p className="character-count">{newThought.length} / 140</p>)
    }
}
    return (
        <section className="form-section">
        <form classname="form" onSubmit={onFormSubmit}>
            <label className="label" htmlFor="new-thought">
            <h2>What is making you happy right now? ❤️</h2>
            <textarea 
                className="new-thought"
                id="new-thought"
                placeholder="Share your happy thought here..."
                rows="4"
                cols="40"
                value={newThought} 
                onChange={onNewThoughtChange} />
            </label>
            {characterWarning()}
            <button 
                className="submit-button"
                type="submit"
                disabled={isSubmitButtonDisabled}>
                ❤️ Send Happy Thought ❤️
            </button>
        </form>
    </section>
    )
}