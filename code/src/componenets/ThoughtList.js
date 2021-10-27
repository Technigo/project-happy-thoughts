import React from 'react'
import moment from 'moment'

const ThoughtList = ({thought, onLikesIncrease}) => {
    return (
        <div className="thought-container" key={thought._id}>
        <p className="thought-message">{thought.message}</p>
        <div className="thought-info">
          <div className="thought-heart">
            <button className="heart-button" onClick={() => onLikesIncrease(thought._id)}>
              <span className="heart" role="img" aria-label="heart">❤️</span>
            </button>
            <span>  x {thought.hearts}</span>
          </div>
          <p className="date"> {moment(thought.createdAt).fromNow()} </p>
        </div>
      </div>
    )
}

export default ThoughtList