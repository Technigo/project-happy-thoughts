/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const AllThoughts = ({ loading, thoughts, handleLikeChange }) => {
  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="thoight-list">
      {thoughts.map((thought) => {
        return (
          <div key={thought._id} className="thought-container">
            <div className="btn-container">
              <div className="like-container">
                <button
                  type="button"
                  className="btn-like"
                  onClick={() => handleLikeChange(thought._id)}
                  style={{
                    background: thought.hearts >= 1 ? '#f6c6e5' : '#f2f2f2'
                  }}>
                ❤️
                </button>
                <p className="likes"> {thought.hearts} </p>
              </div>
              <div className="time">
                <p className="timecreated">
                  {formatDistance(new Date(thought.createAt), Date.now(), { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default AllThoughts