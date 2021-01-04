import React from 'react'
import moment from 'moment'

export const Message = ({ _id, message, createdAt, hearts, getMessages }) => {

  const postLike = () => {
    fetch(`https://happy-thoughts-annika.herokuapp.com/thoughts/${_id}/like`, {
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
          <p className="likes">x {hearts}</p>
        </div>
        <p>{moment(createdAt).fromNow()}</p>
      </div >
    </div >
  )
}