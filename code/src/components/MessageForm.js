import React from 'react'

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <form className ="happy-form" onSubmit={onFormSubmit}>
        <label className="message-field" htmlFor="newMessage">Share your most happy thoughts!</label>
        <input 
        id="newMessage"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}

        />
        <button className="submit-button" type="submit">❤ Send happy thoughts ❤</button>
      </form>
    );

}

export default MessageForm;