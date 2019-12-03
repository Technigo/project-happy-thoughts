import React, { useState } from 'react'
import { Heart } from './Heart'
import './likes.css'

//Need a function to count clicks when doing onClick to heart-button
export const Likes = () => {

  const [likes, setLikes] = useState()

  const handleOnclick = () => {
    setLikes(likes + 1)
    console.log(likes)
  }

  return (
    <div className="likes"><button type="button" className="heart-button" onClick={handleOnclick}><Heart /></button>x {thought.hearts}</div>
  )

}

