import React from 'react'

const Message = ({ loading, newMessage, onNewMessageChange, onFormSubmit }) => {

    // SHOWN WHEN IMAGE RELOADS WHICH I HAVENT MANAGED TO FIX, DO NOT WANT IT TO SHOW..

    if (loading) {
        return <div className='loading-container'>
            <img className='loading' src='./icons/heart.png' alt="heart icon" />
        </div>

    }


    return (
        <div className="message-send-container">

            <form onSubmit={onFormSubmit} className="message-container">

                <label className="message-label">Give us a happy thought!</label>
                <textarea
                    id={newMessage}
                    className="message-area"
                    placeholder="Tell us what makes you happy right now..."
                    value={newMessage}
                    onChange={onNewMessageChange}
                    maxLength="140"
                    minLength="5"
                >
                </textarea>
                <button className="send-btn" type="submit"><span role="img" aria-label="heart emoji">💓</span> Send Happy Thought <span role="img" aria-label="heart emoji">💓</span></button>
            </form>
        </div>
    )
}


export default Message