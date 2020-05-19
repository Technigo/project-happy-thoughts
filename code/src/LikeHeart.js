import React from 'react'
import { Emoji } from "./Emoji"
import './LikeHeart.css'


export const LikeHeart = (props) => {
  const hearts = props.hearts
  const id = props.id

  const handleClick = () => {
    fetch(`https://anna-happythoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(id)
    })
  }

  return (
    <div>
      <button
        className="like-heart"
        onClick={handleClick}>
        <div>
          <Emoji symbol='❤️' />
        </div>
      </button>
      x{hearts}
    </div>
  )
}