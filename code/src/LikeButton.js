import React from 'react'
import { Emoji } from './Emoji'

export const LikeButton = ({ thought, onLiked }) => {
  const { hearts, _id } = thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <span>
      <button
        onClick={handleClick}
        className={
          hearts > 0 ? 'likeButton' : 'notLiked'
        }
      >
        <span role='img' aria-label='Heart'>
          <Emoji symbol="❤️" />
        </span>
      </button>
      x {hearts}
    </span>
  )
}


