/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

export const ListThoughts = ({ loading, thoughtsList, handleLikeChange }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className="thought-list">
      {thoughtsList.map((thought) => {
        return (
          <div className="single-thought">
            <p key={thought._id}>{thought.message}</p>
            <div className="thought-details">
              <div className="likes-section">
                <button key={`${thought._id}-button`} className={thought.hearts === 0 ? 'heart-wrapper-nolikes' : 'heart-wrapper'} type="submit" onClick={() => handleLikeChange(thought._id)}>❤️</button>
                <p>x{thought.hearts}</p>
              </div>
              <p>
                {moment(thought.createdAt).fromNow()}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}