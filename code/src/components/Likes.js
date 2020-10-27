import React from 'react'

export const Likes = () => {
  const like = "https://happy-thoughts-technigo.herokuapp.com/thoughts/`_id`/like"

  //const handleLike = event => {
  //   fetch(like, 
  //   {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application / json'
  //     },
  //     body: ''
  //   }
  //   ).then(() => onLike(_id))
  // }

  return (
    <button 
              className="likes">
              <span 
                role="img"
                aria-label="Heart"
                className="heart-button">❤️
              </span>
    </button>
  )
}