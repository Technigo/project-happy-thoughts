import React from 'react'
import moment from 'moment'

const MessageList = ({thoughtList, onLikesIncrease, onDeleteThought}) => {
  return (
    <>
      <h6>{thoughtList.length} thoughts:</h6>
      {
      thoughtList.map(thought => (
        <div key={thought._id} className="thought">
          <button className="delete-btn" onClick={() => onDeleteThought(thought._id)}>
          ✖️
          </button>
          <h4>{thought.message}</h4>
          <div className="message-info">
            <button 
              className={"heart-btn " + (thought.hearts > 0 ? 'pink' : 'null')}
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
