import React, { useState } from 'react'
import { Heart } from './Heart'
import './likebutton.css'

//Need a function to count clicks when doing onClick to heart-button and post them to API
export const LikeButton = (props) => {

  const id = props._id
  const [likes, setLikes] = useState()

  const handleOnclick = () => {
    // POST like to API
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST", headers: { "Content-Type": "application/json" }
    })
    setLikes(likes + 1)
  }

  return (
    <button type="button" className="heart-button" onClick={handleOnclick}><Heart /></button>
  )

}

