import React from 'react'
import moment from 'moment'

export const Newest = ({ thoughts, onLikeClick }) => {
  return (
    <>
      {thoughts.map((thought) => (
        <div
          className='message-container'
          key={thought._id}
          onClick={onLikeClick}
        >
          <p className='tag'>#{thought.tag}</p>

          <p>{thought.message}</p>
          <p className='username'>Posted by {thought.name}</p>

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
