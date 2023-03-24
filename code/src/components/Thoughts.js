/* eslint-disable no-underscore-dangle */
import React from 'react';

export const Thoughts = ({ thoughtsList, setThoughtsList, loading }) => {
  const increaseHeartCount = (updatedData) => {
    const updatedThoughtsList = thoughtsList.map((thought) => {
      if (thought._id === updatedData._id) {
        return { ...thought, hearts: updatedData.hearts };
      } else {
        return thought;
      }
    });
    setThoughtsList(updatedThoughtsList);
  };

  const handleLike = (id) => {
    console.log(id);
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((updatedData) => {
        // Add the new heart count to existing list
        increaseHeartCount(updatedData);
      })
  };

  return (
    <div className="thoughts-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        thoughtsList.map((thought) => {
          return (
            <div className="single-thought" key={thought._id}>
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