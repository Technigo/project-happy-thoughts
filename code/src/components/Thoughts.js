/* eslint-disable no-underscore-dangle */
import React from 'react';

export const Thoughts = ({ thoughts, loading }) => {
  const likePost = () => {
    console.log('liked post');
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        thoughts.map((thought) => {
          return (
            <div key={thought._id}>
              <p>{thought.message}</p>
              <button onClick={likePost} type="button" className="heart-button">
              ❤️
              </button>
            </div>
          )
        })
      )}
    </div>
  )
}

/* export const Thoughts = ({ thoughts }) => {
  return (
    <div>
      {thoughts.map((thought) => {
        return (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <button type="button" className="heart-button">
              &#x2764;
            </button>
          </div>
        )
      })}
    </div>
  )
} */
/* export const Thoughts = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
      <button type="button" className="heart-button">
        &#x2764;
      </button>
    </div>
  )
} */