import React, { useState } from 'react';

import moment from 'moment';

export const MessageList = ({messageList, onLikeClick}) => {
    const [likes, setLikes] = useState(0);

    const handleLikes = (id) => {
        setLikes(likes + 1)
        onLikeClick(id)
    }

    return ( 
        <>
        {messageList.map(message => (
            <div 
              key={message._id} 
              className="thought-container">
              <h4 className="thought-title">{message.message}</h4>
              <div className="like-and-date">
                <p className="likes">
                    <button 
                    onClick={() => handleLikes(message._id)}
                    className={
                      message.hearts > 0
                      ? "like-button pink" 
                      : "like-button gray"}>
                    <span role="img" 
                    aria-label="heart">❤️</span></button> x {message.hearts}</p>
                <p className="dates">{moment(message.createdAt).fromNow()}</p>
              </div>
            </div>
          ))}
          </>
    )
}