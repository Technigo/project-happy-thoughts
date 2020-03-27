import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Likes = (props) => {
  const { hearts, id } = props
  const [likes, setLikes] = useState(hearts)
  let [yourLikes, setYourLikes] = useState(0)
  const [yourPreviousLikes, setYourPreviousLikes] = useState(Number(localStorage.getItem(id)) + 0)

  localStorage.setItem(id, JSON.stringify(yourPreviousLikes))

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then((res) => res.json())
      .then(() => { }, [])
    setLikes((oldState) => oldState + 1)
    setYourLikes((oldState) => oldState + 1)
    setYourPreviousLikes((oldState) => oldState + 1)

    localStorage.setItem(id, JSON.stringify(yourPreviousLikes))
  }

  return (
    <>
      <button onClick={handleClick}><FontAwesomeIcon icon="heart" /></button>
      <p>{likes} likes (you liked this {yourLikes} times)</p>
    </>
  )
}