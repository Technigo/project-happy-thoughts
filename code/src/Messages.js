import React from 'react'
import moment from 'moment'

export const Messages = ({ thoughts, onLikeClick }) => {
  return (
    <>
      {thoughts.map((thought) => (
        <div
          className='message-container'
          key={thought._id}
          onSubmit={onLikeClick}
        >
          <p>{thought.message}</p>
          <div className='icon-container'>
            <div className='button-container'>
              <button
                className='like-button'
                onClick={() => onLikeClick(thought._id)}
              >
                <span className='heart-icon' role='img' aria-label='heart-icon'>
                  ❤️️
                </span>{' '}
              </button>
              <p className='likes-number'>x {thought.hearts} </p>
            </div>

            <p className='date'>{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </>
  )
}
