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
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({message: message})
            })
        .then(response => {
            response.ok ? window.location.reload() : setError(true);
        })
    }

    const lengthCheck = () => {
        return (message.length > 4 && message.length < 141)
    }

    return (
        <div className='form-container'>
            <p>What's making you happy right now?</p>
            <form onSubmit={handleSubmit} className='form'>
                <textarea
                    type='text'
                    placeholder='Type your thought here...'
                    className='form-text'
                    onChange={event => setMessage(event.target.value)}
                />
                <div className={lengthCheck() ? 'validation-black' : 'validation-red'}>
                    {message.length}/140
                </div>
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