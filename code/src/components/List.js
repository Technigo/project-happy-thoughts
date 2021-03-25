import React from 'react'
import moment from 'moment'

export const List = ({ messageList, onLikesIncrease }) => {
  return (
    <>
      {messageList.map(message => ( 
        <div key={message._id} className="thought-card">
          <h4>
            {message.message}
          </h4>
          <div className="card-info">
            <div className="likes">
              <button 
                className={`like-button ${message.hearts > 0 ? 'liked' : ''} ${message.hearts > 10 ? 'super-liked' : ''}`}
                onClick={() => onLikesIncrease(message._id)}>
                <span role="img" aria-label="heart emoji">💓</span>
              </button>
              <p>x {message.hearts}</p>
            </div>
            <p className="post-time">
              {moment(message.createdAt).fromNow()}
            </p>
          </div>       
        </div>
      ))}
    </>
  )
}