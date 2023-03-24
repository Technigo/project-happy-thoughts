/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

export const Thoughts = ({ thoughts, loading }) => {
 /*  const [likedThoughtId, setLikedThoughtId] = useState('');
  
  const handleLike = ({ id }) => {
    console.log(id);
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then(newHeartCount => {

    })
  }; */

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        thoughts.map((thought) => {
          return (
            <div key={thought._id}>
              <p>{thought.message}</p>
              <button onClick={() => handleLike(thought._id)} type="button" className="heart-button">
                {thought.hearts} ❤️
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