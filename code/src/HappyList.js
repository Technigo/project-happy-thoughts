import React from 'react'
import moment from 'moment'

import './HappyList.css'

const HappyList = ({ messageList, onLikeChange }) => {

const handleLikeClick = id => {
  onLikeChange(id);
}

// Render messages using map 
  return (
    <section className="happy-post-container">
      {
        messageList.map(message => (
          <article className="happy-post" key={message._id}> 
            <p className="happy-message" >
              {message.message}
            </p>
            <div className="happy-post-footer"> 
            <span className="happy-likes-wrapper"> 
              <button
                className="happy-like-button"
                type="button"
                onClick={() => handleLikeClick(message._id)}
                //conditional classname depending on liked or not liked
                className={
                  message.hearts > 5 
                  ? "many-likes" 
                  : message.hearts > 0 
                  ? "some-likes" 
                  : "no-likes"
                }
              >
              <span
                className="like-heart"
                role='img'
                aria-label='Heart'
              > 
                { "❤️" } 
              </span>
              </button>
                <p>x {message.hearts}</p>
              </span>
              <span className="happy-message-time">
                {moment(message.createdAt).fromNow()}
              </span>
            </div>
          </article>
        ))
      }
    </section>
  )
};
export default HappyList;