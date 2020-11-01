import React, { useState } from 'react';

import "styles/thoughtform.css";

export const ThoughtForm = ({onThoughtChange}) => {

    //State hooks for new thoughts
    const [newThought, setNewThought] = useState(''); 

    // Function for handling input and posting of new happy thought
    const handleSubmit = event => {
        event.preventDefault();
        onThoughtChange(newThought);
        setNewThought('')
    }

    // Form for posting happy thoughts
    return (
        <form onSubmit={handleSubmit} className='thoughts-form'>
            <h2 className='thoughts-form__header'> 
                What's making you happy right now?
            </h2>
                <input
                    type='text'
                    className='thoughts-form__input'
                    placeholder='Write a happy thought...'
                    value={newThought}
                    onChange={event => setNewThought(event.target.value)}
                />
                <p 
                className={ /* If the message is >140 characters, a new class will turn the counter text red  */ 
                newThought.length <= 140 ? 'message-length__ok' : 'message-length__error'}> 
                {newThought.length} / 140 
                </p>
                
                <button
                    className='thoughts-form__button'
                    type='submit'
                    disabled={ /* If the input is empty, less than 6 characters or over 140 characters, the submit-button will be disabled */
                    newThought.length < 6 || newThought.length > 140 ? true : false}
                >
                    <span role='img' aria-label='heart'> ❤️ </span> 
                        Send Happy Thought 
                    <span role='img' aria-label='heart'> ❤️ </span>
                </button>
        </form>
    );
};