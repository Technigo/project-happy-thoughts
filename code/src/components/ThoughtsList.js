/* eslint no-underscore-dangle: 0 */

import React from 'react';

import { formatDistanceToNow } from 'date-fns';

export const ThoughtsList = (props) => {
  if (props.loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <section className="thoughts">
      {props.thoughts.map((thought) => {
        return (
          <div className="thought" key={thought._id}>

            <p className="thought-message-text">{thought.message}</p>
            <span className="thought-hearts-counter">
              {thought.hearts}
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