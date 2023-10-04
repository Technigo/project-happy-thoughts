/* eslint-disable */
import React from 'react';

export const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {

//The submit button is disabled if the message contains less than six characters or more than 140 characters.
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
                rows="4"  //maximum of four rows per message
                cols="40" //maximum of 40 characters per row.
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