/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment';

export const ThoughtList = ({ loading, thoughtList, handleLikeChange }) => {
  if (loading) {
    return <h1> Preparing some happiness..</h1>
  }

  return (
    <section className="thought-list">
      {thoughtList.map((thought) => {
        return (
          <div className="thought-boxes">
            <p className="thought-text" key={thought._id}>{thought.message} </p>
            <div className="thought-specs">
              <div className="likes-section">
                <button
                  className={thought.hearts === 0 ? 'heart-passive' : 'heart-active'}
                  type="submit"
                  onClick={() => handleLikeChange(thought._id)}>❤️
                </button>
                <p className="number-likes">x{thought.hearts}</p>
              </div>
              <div className="minutes">
                <p className="minutes-text">{moment(thought.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}