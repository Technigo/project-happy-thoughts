import React from 'react'
import moment from 'moment'
import Emoji from 'utils/Emoji'

const ThoughtsList = ({ thought, handleLikesIncrease }) => {
  return (
  <article 
    className="toughts-box" 
    key={thought._id}>
    <p>{thought.message}</p>

    <button className="heart-button" 
    onClick={() => handleLikesIncrease(thought._id)}>
   <Emoji symbol="❤️" />
    </button>
    
    <span className="thoughts-likes"> x {thought.hearts}</span>
    <p className="date">{moment(thought.createdAt).fromNow()}</p>
  </article>
  )
  
}

export default ThoughtsList