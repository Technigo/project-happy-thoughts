import React from 'react'
// import { formatDistance } from 'date-fns';
// npm install date-fns
/* eslint-disable no-underscore-dangle */

export const HappyList = (loading, happyList) => {
  if (loading) {
    return <h1 className="loading">Happy thoughts coming soon</h1>
  }
  return (
    <section className="thought-list-container">
      {happyList.map((thought) => {
        return (<p key={thought._id}>{thought.message}</p>)
      })}
    </section>
  )
}

// här vill vi få upp listan av texter som skrivs och fetchas från apin post
// onLikes
/* <div className="like-stats-container">
            <button
              type="button"
              onClick={() => onLikes(thought._id)}>
              <span className="heart" role="img" aria-label="heart symbol">❤️
              </span>
            </button>
            <p className="likes">x{thought.hearts}</p>
            <p className="time">{formatDistance(new Date(thought.createdAt),
              Date.now(), { addSuffix: true })}</p>
          </div> */