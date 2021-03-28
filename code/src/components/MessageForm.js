import React from 'react'

const MessageForm = ({ counter, messageNew, onMessageNewChange, onFormSubmit }) => {
   
    return (
        <section className="message-list">
            <form className="form" onSubmit={onFormSubmit}>
                <label className="label" htmlFor="newMessage">What's making you happy right now?</label>
                <textarea
                    className="new-message"
                    cols="20"
                    rows="5"
                    maxLength="140"
                    id="newMessage"
                    type="text"
                    placeholder="Your message should be between 5 and 140 characters long"
                    value={messageNew}
                    onChange={onMessageNewChange}
                ></textarea>
                <div className="counter-container">
                    <p>{140-counter} / 140 characters left</p>
                </div>
                <button className="submit-button" type="submit">
                    <span className="heart-icon" role="img" aria-label="like"> ❤️ </span>
                    Send Happy Thought
                    <span className="heart-icon" role="img" aria-label="like"> ❤️ </span>
                </button>
            </form>
        </section>
    )
}

export default MessageForm