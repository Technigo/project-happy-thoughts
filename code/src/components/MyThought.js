import React, { useState } from 'react'

import moment from 'moment'

const MyTought = ({message, onLikesIncrease}) => {
    return (
        <div className="post-section">
            <div key={message._id} className="post-container">
                <div>
                    <h4 className="message-content">{message.message}</h4>
                </div>
                <div className="like-moment-section">
                    <div className="likes-section">
                        <button 
                        className={message.hearts > 0 ? "likes-btn liked" : "likes-btn"}
                        onClick={() => onLikesIncrease(message._id)}>
                            <span className="likes">&#10084;</span>  
                        </button>
                        <p>x {message.hearts}</p>
                    </div>
                    <div className="moment-section">
                        <p>{moment(message.createdAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTought