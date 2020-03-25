import React from 'react'
import { Emoji } from './Emoji'

export const LikeButton = (props) => {
  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
    })
  }

  return (
    <a className="likeButton" onClick={handleClick} ><Emoji symbol="❤️" /></a>
  )
}