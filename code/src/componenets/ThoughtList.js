import React from 'react'
import moment from 'moment'

const ThoughtList = ({thought, onLikesIncrease}) => {
    return (
        <div className="thought-container" key={thought._id}>
        <p className="thought-message">{thought.message}</p>
        <div className="thought-info">
          <div className="thought-heart">
            <button className="heart-button" onClick={() => onLikesIncrease(thought._id)} style={{backgroundColor: thought.hearts > 0 ? 'lightpink' : 'lightgrey'}}>
              <span className="heart" role="img" aria-label="heart">❤️</span>
            </button>
            <span className="x-hearts">  x {thought.hearts}</span>
          </div>
          <p className="date"> {moment(thought.createdAt).fromNow()} </p>
        </div>
      </div>
    )
}

export default ThoughtList