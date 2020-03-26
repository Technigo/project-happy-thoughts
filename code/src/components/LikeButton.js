import React from 'react'
import { Heart } from './Heart'
import './likebutton_style.css'

export const LikeButton = (props) => {

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`,
       {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: ""
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }
  return (
    // <button className="like-button" onClick={handleClick}><Heart /></button>
    <button className={props.hearts > 0 ? "like-button-clicked" : "like-button-start"} onClick={handleClick}><Heart /></button>
  )
}
/*
react conditional styling of color button
idea: Can the button color change depending on how many like's the post have?
https://stackoverflow.com/questions/40853161/change-text-colour-depending-on-if-condition-react
*/