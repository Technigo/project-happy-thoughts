import React from 'react'
import moment from 'moment'

const ThoughtsList = ({thought}) => {

  return (
    <div className='thought-card'>
      <p className='thought-message'>{thought.message}</p>
      <div className='likes-time-wrapper'>
        <p className='thought-time'>{moment(thought.createdAt).fromNow()}</p>
        <div className='likes-heart-wrapper'>
          <span className='likes-heart' role='img' aria-label='heart emoji'>❤️</span>
          <p className='likes-counter'>x 10</p>
        </div>
      </div>
    </div>
  )
}

export default ThoughtsList