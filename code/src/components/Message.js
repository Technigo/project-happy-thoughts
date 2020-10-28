import React from 'react'

// import { Heart } from './Heart.js'

export const Message = ({ id, message, created, likes }) => {

  const handleClick = event => {

    event.preventDefault()

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: "",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => likes += 1)
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <>
      <p>{message} </p>
      <p> {created}</p>
      <div>
        <button onClick={handleClick}>Heart</button>
        <p>{likes}</p>
      </div>
      <br></br>
    </>
  )
}