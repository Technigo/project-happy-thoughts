import React from 'react';


const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <div className="form">
            <form onSubmit={onFormSubmit}>
            <label htmlFor="newMessage">What's making you happy right now?</label>
            <input
                id="newMessage"
                type="text"
                value={messageNew}
                onChange={onMessageNewChange}
                placeholder="Type your Happy Thoughts here :)"
                minLength="5"
                maxLength="140"
            />
            <button type="submit">
                <span role="img" aria-label="heart">❤️</span> 
                Send Happy Thought!
                <span role="img" aria-label="heart">❤️</span>
            </button>
            </form>
        </div>

    )
}

export default MessageForm;