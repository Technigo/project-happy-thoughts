import React, { useState } from 'react'
import { ErrorMessage } from 'ErrorMessage'

export const MessageInput = () => {
    const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
        
    const handleSubmit = event => {
        event.preventDefault();

        fetch(MESSAGES_URL, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({message: message})
            })
        .then(response => {
            response.ok ? window.location.reload() : setError(true);
        })
    }

    return (
        <div className='form-container'>
            <p>What's making you happy right now?</p>
            <form onSubmit={handleSubmit} className='form'>
                <textarea
                    type='text'
                    className='form-text'
                    onChange={event => setMessage(event.target.value)}
                />
                {error && <ErrorMessage />}
                <button
                    type='submit'
                    className='form-button'
                >
                    <img className='heart' src={require('./assets/heart.png')} alt='heart'/>
                    <p className='heart-button-text'>Send Happy Thought</p>
                    <img className='heart' src={require('./assets/heart.png')} alt='heart'/>
                </button>
            </form>
            
        </div>
    )
}