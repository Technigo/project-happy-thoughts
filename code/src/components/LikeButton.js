import React, { useState } from 'react'
import { Heart } from './Heart'
import './likebutton.css'

// Likes should increase by 1 for every click
// How to add the like..?

export const LikeButton = (props) => {

  // const id = props.thoughts._id
  const [likes, setLikes] = useState()

  const handleOnclick = () => {
    //Increase likes by 1
    setLikes(likes + 1)

    // POST like to API
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST", body: "", headers: { "Content-Type": "application/json" }
    })

  }

  return (
    <button type="button" className="heart-button" onClick={handleOnclick}><Heart /></button>
  )

}

