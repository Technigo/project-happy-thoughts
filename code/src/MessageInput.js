import React, { useState } from 'react'

export const MessageInput = () => {
    // The message state to save the message ti send to the backend
    const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
    const [message, setMessage] = useState('');
    
    // A submit function which POSTs the text field
    const handleSubmit = event => {
        event.preventDefault();

        // Send a POST request using the 'message' state
        fetch(MESSAGES_URL, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({message: message})
            })
        .then(() => {
            window.location.reload();
        });
    }

    // An inout text field
    // A sumbit button
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='form-text'
                    onChange={event => setMessage(event.target.value)}
                ></input>
                <input
                    type='submit'
                    className='form-button'
                    value='Add Message'
                >
                </input>
            </form>
            
        </div>
    )
}