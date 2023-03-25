/* eslint no-underscore-dangle: 0 */

import React from 'react';

import { formatDistanceToNow } from 'date-fns';

export const ThoughtsList = ({ loading, thoughts, handleLikes }) => {
  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <section className="thoughts">
      {thoughts.map((thought) => {
        return (
          <div className="thought" key={thought._id}>

            <p className="thought-message-text">{thought.message}</p>
            <button
              aria-label="Like-button"
              type="button"
              className="like-btn"
              onClick={() => { handleLikes(thought._id, thought.hearts); }}
              style={{ background: thought.hearts >= 1 ? 'rgb(237, 164, 175)' : 'lightgrey' }}>
              ❤️
            </button>
            <span className="thought-hearts-counter"> x {thought.hearts}
            </span>
            <p className="thought-created-time">
              {formatDistanceToNow(
                new Date(thought.createdAt),
                Date.now(),
                { addSuffix: true }
              )}
            </p>
          </div>

        )
      })}
    </section>
  )
}