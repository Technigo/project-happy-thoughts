import React from 'react'
import moment from 'moment';

const Thoughts = (props) => {
  const { thoughts, onLikesIncreased } = props
  
  return (
    thoughts.map(thought => (
      <div className="container" key={thought._id}>
        <div className="inner-container">
          <p className="thought">{thought.message}</p>
          
          <div className="heart-time">
            <div className="heart-container">
              <button onClick={() => onLikesIncreased(thought._id)} className={(thought.hearts === 0) ? "heart-btn-unloved"  : "heart-btn-loved"}>
                <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span>
              </button>
              <p>x {thought.hearts}</p>
            </div>
            <p className="date">
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    ))
  )
}

export default Thoughts