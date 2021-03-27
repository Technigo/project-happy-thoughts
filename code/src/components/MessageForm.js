import React from 'react';

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <form className="message-form" onSubmit={onFormSubmit}>
            <label className="form-title" htmlFor="newMessage">What's making you happy right now ?</label>
            <input
                className="text-area"
                id="newMessage"
                type="text"
                value={messageNew}
                onChange={onMessageNewChange}
                minLength="5"
                maxLength="140"
                required
            />
            <button 
                className="form-btn" 
                type="submit"
            >
                    <span role="img" aria-label="Heart emoji">💗  </span>
                        Send Happy Thought!
                    <span role="img" aria-label="Heart emoji"> 💗</span>
            </button>
        </form>
    );
}

export default MessageForm;