/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const ThoughtList = ({ loading, thoughtList }) => {
  if (loading) {
    return <p>Loading is happening...</p>
  }
  return (
    <section className="thought-list">
      {thoughtList.map((thought) => {
        return (
          <div key={thought._id} className="single-thought">
            <p>{thought.message}</p>
            <div className="thought-details">
              <div className="likes-wrapper">
                <button
                  className={thought.hearts === 0 ? 'hearts-wrapper-nolikes' : 'hearts-wrapper'}
                  type="button">
                  💗
                </button>
                <span>x {thought.hearts}</span>
              </div>
              <div className="time-wrapper">TIME
              </div>
            </div>
          </div>
        )
      })}

    </section>
  )
}

export default ThoughtList

/* for submit-button
 onClick={() => handleLikes(thought._id)} */