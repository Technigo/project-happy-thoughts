/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import { formatRelative } from 'date-fns';

const ThoughtList = ({ thought, handleLikesChange }) => {
  return (
    <section>
      {thought.map((singleThought) => {
        return (
          <div className="singleThought" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <div className="heartBtn">
              <div className="likeCounter">
                <button
                  onClick={() => handleLikesChange(singleThought._id)}>❤️
                </button>
                <p> x {singleThought.hearts}</p>
              </div>
              <p>{// fixing the date format
                formatRelative(
                  new Date(singleThought.createdAt),
                  Date.now(),

                  { addSuffix: true /* removed error in console */ }
                )
              }
              </p>
            </div>

          </div>
        );
      })}
    </section>
  )
}

export default ThoughtList