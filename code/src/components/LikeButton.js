import React from 'react'
import { Heart } from './Heart'
import './likebutton.css'

export const LikeButton = (props) => {

  const handleOnclick = () => {

    // POST like to API and then add like to that id
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST", body: "", headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
    })

  }

  return (
    <button type="button" className="heart-button" onClick={handleOnclick}><Heart /></button>
  )

}

