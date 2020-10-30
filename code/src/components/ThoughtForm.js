import React, { useState } from 'react';

import "styles/thoughtform.css";


export const ThoughtForm = ({onThoughtChange}) => {
    const [newThought, setNewThought] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        onThoughtChange(newThought);
    }

    return (
        <form onSubmit={handleSubmit} className='thoughts-form'>
            <h2>What's making you happy right now?</h2>
                <textarea
                    type='text'
                    rows='3'
                    className='thoughts-form__textarea'
                    placeholder='Write a happy thought'
                    value={newThought}
                    onChange={event => setNewThought(event.target.value)}
                > 
                </textarea>
                <div className='thoughts-form__submit'>
                    <button
                        type='submit'
                        disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
                    >
                    <span role="img" aria-label="stars">✨ </span> Send Happy Thought <span role="img" aria-label="stars">✨ </span>
                    </button>
                    <p> {newThought.length} / 140</p> 
                </div>
        </form>
    );
};