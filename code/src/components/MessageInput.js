import React, { useState } from 'react';

export const MessageInput = ({ onMessageChange }) => {
 const [newMessage, setNewMessage] = useState('');

    const handleSumbit = event => {
        event.preventDefault();
        onMessageChange(newMessage);
    }

    return (
        <form onSubmit={handleSumbit}>
            <h2>What makes you happy today?</h2>
            <input 
                type="text"
                value={newMessage}
                onChange={event => setNewMessage(event.target.value)}
                className="form-text">
            </input>
            <input
                type="submit"
                className="form-button"
                value="Add Message">  
            </input>
        </form>
    )
}

