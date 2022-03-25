import React, { useState } from 'react'

const Message = ({ loading, newMessage, onNewMessageChange, onFormSubmit }) => {


    if (loading) {
        return <span className='loading-heart'>💓 Loading thinking</span>

    }

    return (
        <div className="message-send-container">
            <form onSubmit={onFormSubmit} className="message-container">

                <label className="message-label">Give us a happy thought!</label>
                <textarea
                    className="message-area"
                    placeholder="Tell us what makes you happy right now..."
                    value={newMessage}
                    onChange={onNewMessageChange}
                    maxLength={140}
                    minLength={6}>
                </textarea>

                <button className="send-btn" type="submit"><span>💓</span> Send Happy Thought <span>💓</span></button>

            </form>
        </div>
    )
}

export default Message