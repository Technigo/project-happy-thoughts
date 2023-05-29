/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment'

export const ListThoughts = ({ loading, thoughtsList, handleLikeChange }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  const getTimeAgo = (createdAt) => {
    const timeAgo = moment(createdAt).fromNow();
    return timeAgo;
  }
  return (
    <section className="listSection">
      {thoughtsList.map((thought) => {
        return (
          <div className="listBox">
            <p className="thought" key={thought._id}>{thought.message}</p>
            <div className="list">
              <button
                className={thought.hearts === 0 ? 'heartBtn' : 'likedBtn'}
                type="submit"
                onClick={() => handleLikeChange(thought._id)}>
                  💛
              </button>
              <p>x {thought.hearts}</p>
              <div>
                <p className="time">{getTimeAgo(thought.createdAt)}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
