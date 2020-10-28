import React, { useState } from 'react'

export const Likes = ({ id, onLike, hearts }) => {
  const like_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`
  const [like, setLike] = useState(hearts)

  const handleLike = event => {
    fetch(like_URL, {
      method:'POST', 
      headers: {'Content-Type': 'application/json'},
      body: ''
    })
      .then((res => res.json()))
      .then(() => {}, [])
    setLike((staleState) => staleState + 1)
    }

  return (
    <button 
      onClick={handleLike}
      className={like > 0 ? "you-liked-this" : "no-like"}>
        <span 
          role="img"
          aria-label="Heart"
          className="like-span">{'❤️'}
        </span>
    </button>
  )
}