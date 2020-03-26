import React from 'react'
import moment from 'moment'
import './MessageList.css'

export const MessageList = ({ thought, onLiked }) => {
  const { message, hearts, createdAt, _id } = thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: {
        'Content-Type': 'application / json'
      }
    }).then(() => onLiked(_id))
  }

  return (
    <article className="message-box">
      <h3>{message}</h3>
      <p>
        <button
          className="like-button"
          style={{ background: hearts > 5 ? 'red' : hearts > 0 ? 'lightred' : '#808080' }}
          onClick={handleClick}
        ><span role="img" aria-label="Heart">{"❤️ "}</span></button> X {hearts}
      </p>
      <p>
        {moment(createdAt).fromNow()}
      </p>
    </article >
  )
}