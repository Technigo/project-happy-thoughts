import React from 'react'
import moment from 'moment'

const ThoughtElement = ( {thought, onLikesIncrease} ) => {
  return (
    <div>
			<h4>{thought.message}</h4>
      <button onClick={() => onLikesIncrease(thought._id)}>
        {thought.hearts}
      </button>
      <p>- {moment(thought.createdAt).fromNow()}</p>
		</div>
  )
}

export default ThoughtElement
