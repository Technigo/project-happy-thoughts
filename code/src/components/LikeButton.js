import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LikeButton = (props) => {
  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.likedMessage(props.id)
    })
  }

  return (
    <button onClick={handleClick}><FontAwesomeIcon icon="heart" /></button>
  )
}