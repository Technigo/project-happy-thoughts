import React from 'react'
import moment from 'moment'

const MessageList = ({thoughtList, onLikesIncrease}) => {
  return (
    <>
      {
      thoughtList.map(thought => (
        <div key={thought._id} className="thought">
          <h4>{thought.message}</h4>
          <div className="message-info">
            <button 
            className="heart-btn"
              className={"heart-btn " + (thought.hearts > 0 ? 'pink' : null)}
              onClick={() => onLikesIncrease(thought._id)}>
                <span role="img" aria-label="heart">❤️</span>
            </button>
            <p className="hearts-amount">x {thought.hearts}</p>
            <p className="time">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default MessageList
