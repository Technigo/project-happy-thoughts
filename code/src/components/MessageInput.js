import React, { useState } from 'react';
//import moment from 'moment'
import '../index.css'

export const MessageInput = ({ onMessageChange }) => {
 const [newMessage, setNewMessage] = useState('');

    const handleSumbit = event => {
        event.preventDefault();
        onMessageChange(newMessage);
    }

    return (
        <article className="input-card">
            <form onSubmit={handleSumbit}>
                <h2>What makes you happy today?</h2>
                <input
                    textarea rows="3"
                    type="text"
                    value={newMessage} minLength="5" maxLength="140"
                    onChange={event => setNewMessage(event.target.value)}
                    className="form-text">
                </input>
                <p>{newMessage.length}/140</p>
                <input
                    type="submit"
                    className="form-button"
                    value="❤️ Send Happy Thought! ❤️">  
                </input>
            </form>
        </article>
    )
}

