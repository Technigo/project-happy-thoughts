/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import { myApi } from './apiList';

export const Thoughts = ({ thoughtsList, setThoughtsList, loading }) => {
  // Updates the data when post is liked
  const handleLike = (_id) => {
    fetch(`${myApi}/${_id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((newData) => {
        // Update the heart count with the response from the server
        const updatedThoughtsList = thoughtsList.map((thought) => {
          if (thought._id === newData._id) {
            console.log('old count:', thought.hearts, 'new count:', newData.hearts);
            return { ...thought, hearts: newData.hearts }
          }
          return thought;
        });
        setThoughtsList(updatedThoughtsList);
      })
      .catch((error) => {
        console.log('error', error);
      });
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
              <p className="category-tag">[{thought.category}]</p>
              <span className="heart-span">
                <div className="heart-div">
                  <button onClick={() => handleLike(thought._id)} type="button" className="heart-button">❤️</button>
                  <p>x{thought.hearts}</p>
                </div>
                <p>{formatDistance(new Date(thought.createdAt), new Date())}</p>
              </span>
            </div>
          )
        })
      )}
    </div>
  )
};