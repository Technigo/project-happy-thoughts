import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit}) => {

    return (
        <form onSubmit={onFormSubmit}>
            <p>Write your happy thought below</p>
            <textarea
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder='What is making you happy right now?'
            />

            <button 
                className='submit-btn'
                type="submit"
                disabled={newThought.length < 5 || newThought.length > 140}>
                <span role='img' aira-label='heart-emoji'>♥️ SEND THOUGHT ♥️</span>
            </button>
        </form>
    )
};

export default ThoughtsForm;
