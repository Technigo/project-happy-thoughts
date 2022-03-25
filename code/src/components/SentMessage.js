import React from 'react'
import { formatDistance } from 'date-fns'
import Message from './Message'

const SentMessage = ({ onFormSubmit, newMessage, setNewMessage, message }) => {

    return (
        <div className="message-send-container">
            
            <form onSubmit={onFormSubmit} className="message-container">
            <p className="sent-message-texts" >my thougt that I sent</p>

            <div className="like-counter-section">
            <button className="like-btn" type="submit">💓</button>
            <p>x</p>
            </div>
            </form>
        </div>
    )
}

export default SentMessage