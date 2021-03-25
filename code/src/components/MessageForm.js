import React from 'react'


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

