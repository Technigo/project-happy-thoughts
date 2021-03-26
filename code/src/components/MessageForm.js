import React from 'react'


export const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange}) => {
    
    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newMessage" className="label-input-message">Share your happy thoughts!</label>
            <textarea
                className="message-input"
                id="newMessage"
                type="text"
                value={messageNew}
                onChange={onMessageNewChange}
                rows="5"
                column="3"
            ></textarea>
            <button 
                className="button-submit"
                type="submit"
            >
                <span role="img" aria-label="heart">❤️</span>Spread the joy <span  role="img" aria-label="heart"> ❤️</span>
            </button>
        </form>
    );
};

