/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { formatDistance } from 'date-fns';

export const Thoughts = ({ loading, thoughts, onNewHeartSubmit }) => {
  if (loading) {
    return <p>Loading in progress...</p>
  }

  return (
    <section>
      {thoughts.map((list) => (
        <div className="thoughts-container" key={list._id}>
          <p className="thought-text-container">{list.message}</p>
          <div className="like-and-time-container">

            <div className="like-container">
              <button
                type="button"
                className="like-btn"
                onClick={() => { onNewHeartSubmit(list._id) }}
                style={{
                  background: list.hearts >= 1 ? '#ffdede' : '#d5d4d5'
                }}>
                <span className="emoji" role="img" aria-label="heart-emoji">❤️</span>
              </button>

              <div className="heart-counter">
                <p>x {list.hearts}</p>
              </div>

            </div>

            <p className="timestamp">
              {formatDistance(new Date(list.createdAt), Date.now(), {
                addSuffix: true
              })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}