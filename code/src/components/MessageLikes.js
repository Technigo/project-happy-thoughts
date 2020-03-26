import React from 'react'
import moment from 'moment'
import './messageLikes.css'

export const MessageLikes = ({ thought, onLiked }) => {
  const { message, hearts, createdAt, _id } = thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application(json' }
    }).then(() => onLiked(_id))
  }

  return (
    <article className='happy-thought'>
      <h3>{message}</h3>
      <div className='likes-time'>
        <p>
          <button
            onClick={handleClick}
            className={
              hearts > 5 ? 'superLiked' : hearts > 0 ? 'liked' : 'notLiked'
            }
          >
            <span role='img' aria-label='Heart'>
              {`❤️  `}
            </span>
          </button>
        x {hearts}
        </p>

        <p className='toughts-time'>{moment(createdAt).fromNow()}</p>
      </div>
    </article>
  )

}