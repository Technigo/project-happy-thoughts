import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Likes = (props) => {

  const { hearts, id } = props
  const [likes, setLikes] = useState(hearts)

  if (!localStorage[id]) {
    localStorage.setItem(id, 0)
  }

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      setLikes(likes + 1)
      localStorage[id] = Number(localStorage[id]) + 1
    })
  }

  return (
    <>
      <button onClick={handleClick}><FontAwesomeIcon icon="heart" /></button>
      <p>{likes} likes (you liked this {localStorage[id]} times)</p>
    </>
  )
}