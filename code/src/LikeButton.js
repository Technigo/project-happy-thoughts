import React, { useState } from 'react'

export const LikeButton = (props) => {
  const [clicks, setClicks] = useState((props.hearts))

  if(!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  }

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    props.onThoughtLiked(props.id)
    localStorage[props.id] = Number(localStorage[props.id]) + 1
    setClicks(clicks + 1)
  })
}

  return (
    <div>
    <button 
      className="heart-button"
      type="submit"
      onClick={handleClick}
    >❤️ 
    </button> x {clicks} (you clicked x {localStorage[props.id]})
    </div>
  )}