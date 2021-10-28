import React from 'react'
import moment from 'moment'
import { Oldest } from 'Oldest'

export const Newest = ({ thoughts, onLikeClick, filter }) => {
  return (
    <>
      {filter === 'Oldest' && (
        <Oldest thoughts={thoughts} onLikeClick={onLikeClick} />
      )}
      {thoughts.map((thought) => (
        <div
          className='message-container'
          key={thought._id}
          onClick={onLikeClick}
        >
          <p>{thought.message}</p>
          <div className='icon-container'>
            <div className='button-container'>
              <button
                className={
                  thought.hearts > 0
                    ? 'like-button like-button-clicked'
                    : 'like-button'
                }
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

/*{filter === 'Oldest' && (
  <Oldest thoughts={thoughts} onLikeClick={onLikeClick} />
)}*/
