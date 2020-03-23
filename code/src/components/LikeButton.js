import React, { useState } from 'react'

export const LikeButton = ({ hearts, id, apiUrl }) => {

  const [likes, setLikes] = useState(hearts)

  const addLike = (event) => {
    event.preventDefault()

    fetch(`${apiUrl}${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(
        setLikes(likes + 1)
      )
  }

  console.log(likes)

  return (
    <span className="likes">
      <button onClick={addLike} className={"like-btn" + (likes > 0 ? " has-likes" : "")} ><span role="img" aria-label="heart">❤️</span></button>
      x { likes}
    </span >
  )
}