import React, { useState } from 'react';

export const ThoughtForm = props => {
    const thoughtsUrl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [ newThought, setNewThought] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetch (thoughtsUrl, {
            method: 'POST',
            body: JSON.stringify({ message: newThought }),
            headers: { 'Content-type': 'application/json' }
        })
        .then(() => {
            setNewThought('')
            props.onFormSubmit(newThought)
        })
        .catch(err => console.log('Error:', err))
    }

    return (
        <form className='thoughts-form' >
            <h2>Post a happy thought!</h2>
            <textarea
                rows='3'
                value={newThought}
                onChange={event => setNewThought(event.target.value)}
            > 
            </textarea>
            <div className='thoughts-form__submit'>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
                >
                    Send a happy thought! <span role="img" aria-label="stars">✨ </span>
                </button>
                <p> {newThought.length} / 140</p>
            </div>
        </form>
    )
}