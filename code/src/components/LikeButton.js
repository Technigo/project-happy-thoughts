import React from 'react'
import { Heart } from './Heart'
import './likebutton.css'

export const LikeButton = (props) => {

  const handleOnClick = () => {

    // POST like to API and then add like to that matching id
    //onThoughtLiked is passed via ListThoughts from the function onThoughtLikes in Thought
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST", body: "", headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }

  return (
    <button type="button" className={props.hearts > 0 ? "heart-button-liked" : "heart-button"} onClick={handleOnClick}><Heart /></button>
  )

}
