import React, { useState } from 'react'

export const LikeButton = (props) => {
  const likes_url = `https://technigo-thoughts.herokuapp.com/${props.id}/like`
  const [likes, setLikes] = useState()
  const handleClick = () => {
    fetch(likes_url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: ""
    })
    setLikes(props.likes + 1)
  }

  return (
    <div>
      <button
        onClick={handleClick}>Heart</button>
    </div>
  )
}