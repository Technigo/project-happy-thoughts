/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment'

export const ListOfThoughts = ({ thoughtsList, loading, handleLikeChange }) => {
  if (loading) {
    return (
      <h1>Loading some love...</h1>
    )
  }
  return (
    <section className="thoughts-list">
      {thoughtsList.map((thought) => {
        return (
          <div className="thought-box">
            <p key={thought._id}>{thought.message}</p>
            <div className="likes-and-time">
              <div className="likes-section">
                <button
                  className={thought.hearts === 0 ? 'heart-btn' : 'liked-heart-btn'}
                  type="submit"
                  onClick={() => handleLikeChange(thought._id)}>
                  ❤︎
                </button>
                <p>x{thought.hearts}</p>
              </div>
              <p className="time-show">
                {moment(thought.createdAt).fromNow()}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}