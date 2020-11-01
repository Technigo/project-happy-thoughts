import React from 'react'

export const Message = ({ id, message, created, likes, getMessages }) => {

  const postLike = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      // the fetch URL line increases the likes with one like - built in functionality
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        getMessages()
      })
  }

  return (
    <div className="card">
      <p>{message} </p>
      <div className="card-footer">
        <div className="likes-container">
          <button onClick={postLike}><img src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-256.png" alt="heart"></img></button>
          <p className="likes">x {likes}</p>
        </div>
        <p> {created}</p>
      </div >
    </div >
  )
}