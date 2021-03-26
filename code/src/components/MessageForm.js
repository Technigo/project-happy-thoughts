import React from 'react'
import { MessageList } from './MessageList';


export const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange}) => {
    

    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newMessage" className="label-input-message">Share your happy thoughts!</label>
            <input
                className="message-input"
                id="newMessage"
                type="text"
                value={messageNew}
                onChange={onMessageNewChange}
                rows="4"
                cols="60"
            />
            <button 
                className="button-submit"
                type="submit"
            >
                <span>❤️ </span>Spread the joy <span> ❤️</span>
            </button>
        </form>
    
    );
};

