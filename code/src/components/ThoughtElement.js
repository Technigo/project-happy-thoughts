import React from 'react'
import moment from 'moment'


import './ThoughtElement.css'

const ThoughtElement = ( {thought, onLikesIncrease} ) => {
  return (
    <div className='thought-element'>
			<h4>{thought.message}</h4>
      <div className='heart-and-time'>
        <button onClick={() => onLikesIncrease(thought._id)}>
        <span className='heart'>❤️</span>  x {thought.hearts}
        </button>
        <p className='time'>{moment(thought.createdAt).fromNow()}</p>
      </div>
      
		</div>
  )
}

export default ThoughtElement
