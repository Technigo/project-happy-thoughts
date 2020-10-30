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
                <input
                    type='text'
                    rows='3'
                    className='thoughts-form__input'
                    placeholder='Write a happy thought...'
                    value={newThought}
                    onChange={event => setNewThought(event.target.value)}
                />
                <p className='message-length'> {newThought.length} / 140</p> 

                <div className='thoughts-form__submit'>

                    <button
                        className='thoughts-form__button'
                        type='submit'
                        disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
                    >
                    <span role='img' aria-label='heart'> ❤️ </span> Send Happy Thought <span role='img' aria-label='heart'> ❤️ </span>
                    </button>
                </div>
        </form>
    );
};