import React from 'react'

export const Message = ({ id, message, created, likes }) => {

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }) //fetch URL increases like with one like
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