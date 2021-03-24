import React from 'react';

const NewMessageForm = ({ handleFormSubmit, handleNewMessageChange }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="newMessage">Write new message!</label>
            <input
                id="newMessage"
                type="text"
                onChange={handleNewMessageChange}
            />
            <button type="submit">Send message!</button>
        </form>
    );
}

export default NewMessageForm;