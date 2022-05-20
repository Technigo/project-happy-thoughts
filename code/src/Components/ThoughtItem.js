import React from 'react'
import { formatDistance } from 'date-fns'

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className='card'>
      <p className='thought-text'>{thought.message}</p>

      <div className='likes'>
        <div className='button-card'>
          <button
            className='like-button'
            onClick={() => onLikesIncrease(thought._id)}
            style={{
              backgroundColor: thought.hearts > 0 ? '#ffadad' : '#eaeaea',
            }}
          >
            {' '}
            <span role='img' aria-label='heart emoji'>
              &#10084;&#65039;
            </span>
          </button>
          <p className='likes-amount'>x {thought.hearts}</p>
        </div>

        <p className='date'>
          {formatDistance(new Date(thought.createdAt), Date.now(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  )
}

export default ThoughtItem
