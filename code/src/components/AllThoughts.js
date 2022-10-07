import React from 'react';
import { formatDistance } from 'date-fns';

const AllThoughts = ({ loading, thoughts, handleLikeCounter }) => {
  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="allthoughtst">
      {thoughts.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div className="thought-wrapper" key={thought._id}>
            <h2 className="all-thoughts">{thought.message}</h2>
            <div className="like-time">
              <div className="like-container">
                <button
                  type="button"
                  className="like-button"
                  onClick={() => {
                    // eslint-disable-next-line no-underscore-dangle
                    handleLikeCounter(thought._id)
                  }}
                  style={{
                    background: thought.hearts >= 1 ? '#e79898bd' : '#f2f2f2'
                  }}>
                ❤️
                </button>
                <p className="likes"> x {thought.hearts}</p>
              </div>
              <div className="timestamp">
                <p className="created">
                  {formatDistance(new Date(thought.createdAt), Date.now(), {
                    addSuffix: true
                  })}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default AllThoughts;