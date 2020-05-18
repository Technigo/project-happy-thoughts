import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const LikeButton = ({ hearts, id, apiUrl }) => {

  const [likes, setLikes] = useState(hearts)

  const addLike = event => {
    event.preventDefault()

    fetch(`${apiUrl}/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    })
      .then(setLikes(likes + 1))
  }

  return (
    <div className="likes">

      <button onClick={addLike} id={id} className={"like-btn" + (likes > 0 ? " has-likes" : "")} > {/* Add class if post has likes */}
        <FontAwesomeIcon icon={faHeart} />
      </button>

      <label htmlFor={id}>x {likes}</label>

    </div >
  )
}
