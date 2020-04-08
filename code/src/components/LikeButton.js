import React, { useState } from 'react'
import { Emoji } from './Emoji.js'

export const LikeButton = ({ hearts, id, apiUrl }) => {

  const [likes, setLikes] = useState(hearts)

  const addLike = event => {
    event.preventDefault()

    fetch(`${apiUrl}${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(setLikes(likes + 1))
  }

  return (
    <div className="likes">

      <button onClick={addLike} id={id} className={"like-btn" + (likes > 0 ? " has-likes" : "")} > {/* Add class if post has likes */}
        <Emoji symbol="❤️" label="heart" />
      </button>

      <label htmlFor={id}>x {likes}</label>

    </div >
  )
}
