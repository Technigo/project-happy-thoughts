/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import moment from 'moment'

export const Post = ({ message, hearts, _id, createdAt }) => {
  const [likes, setLikes] = useState(hearts)

  const likeClickHandler = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, { method: 'POST' })
    setLikes((oldState) => oldState + 1)
  }

  return (
    <article className="card">
      <h3>{message}</h3>
      <section className="card-bottom">
        <span className="like-section">
          <button type="button" onClick={likeClickHandler} className={(likes > 0 ? 'liked' : 'notLiked')}>💖</button>
          <p>{likes}</p>
        </span>
        <p>{moment(createdAt).fromNow()}</p>
      </section>
    </article>
  )
}