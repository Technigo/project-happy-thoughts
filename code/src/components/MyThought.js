import React, { useState } from 'react'

import moment from 'moment'

const MyTought = ({message, onLikesIncrease}) => {

    
    return (
        <div key={message._id}>
        <div>
            <h4>{message.message}</h4>
        </div>
            <div>
                <button 
                className="likes-btn"
                onClick={() => onLikesIncrease(message._id)}>
                    <span className="likes">&#10084;</span>
                    {message.hearts}
                </button>
                <p>{moment(message.createdAt).fromNow()}</p>
            </div>
            <div></div>
        </div>
    )
}

export default MyTought