import React from 'react';
import moment from 'moment';




const MessageElement = ({ message, onLikesIncrease }) => {
    return (
        <div className="message-card">
            <h4>{message.message}</h4>
            <div className="likes-container">
                <button className="likes-btn" onClick={() => onLikesIncrease(message._id)}>
                <span role="img" aria-label="Heart emoji">💗</span>
                </button>
                <p> x {message.hearts} </p>
            </div>
            <p className="date">- {moment(message.createdAt).fromNow()}</p>
        </div>
    )
}

export default MessageElement;