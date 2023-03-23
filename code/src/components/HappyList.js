import React from 'react'
import { formatDistance } from 'date-fns';
// npm install date-fns
/* eslint-disable no-underscore-dangle */

export const HappyList = ({ loading, happyList, onThoughtLikeChange }) => {
  if (loading) {
    console.log('loading...');
    return <h1 className="loading">Happy thoughts coming soon</h1>
  }

  console.log('happyList:', happyList);
  return (
    <div>
      <section className="thoughts-container">
        {happyList.map((thought) => {
          console.log('thought:', thought);
          return (
            <div key={thought._id} className="thoughts">
              <p className="thoughts-p">{thought.message}</p>
              <div className="like-stats-container">
                <button
                  type="button"
                  className={thought.hearts === 0 ? 'empty-btn' : 'like-btn'}
                  onClick={() => onThoughtLikeChange(thought._id)}>
                  <span className="heart" role="img" aria-label="heart symbol">
                    ❤️
                  </span>
                </button>
                <p className="likes">x {thought.hearts}</p>
                <p className="time">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

// här vill vi få upp listan av texter som skrivs och fetchas från apin post
/* I set my my heart fetch to: .finally(() => fetchThoughts(''))
 and it refreshes the page with the new heart likes
 */