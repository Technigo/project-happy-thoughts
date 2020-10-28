import React from 'react'

export const Heart = ({ key, likes, onLike }) => {

  const addLike = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${key}/like`, {
      method: 'POST',
      body: "",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => onLike(key))
  }

  return (
    <>
      <button
        onClick={addLike}
      ></button>
      <p>{likes}</p>
    </>
  )
}