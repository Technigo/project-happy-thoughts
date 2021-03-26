import React from 'react'
import moment from 'moment'

const MessageElement = ({thought, onHeartLikeIncrease}) => {
  return (
    <>
      <div className="received-message-container">  {/*key={thought._id} */}
        <h4 className="received-message" >{thought.message}</h4>
        <button 
          className={` ${thought.hearts === 0 ? "heart-like-button" : "heart-like-button pink-heart"}`} 
          onClick={() => onHeartLikeIncrease(thought._id)}  /* i want to understand whats happening here, why 2 arrow functions??  */
        >
          <span 
            role="img" 
            aria-label="heart"
          > 
            &#10084;&#65039;
          </span>
        </button> 
        <span 
          aria-label="number of likes" 
          className="like-counter"
        >
          x {thought.hearts} 
        </span>
        <span 
          className="date"
        > 
          {moment(thought.createdAt).fromNow()}
        </span>
      </div>
    </>

  )
}

export default MessageElement