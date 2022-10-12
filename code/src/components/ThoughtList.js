/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import { formatRelative } from 'date-fns';

const ThoughtList = ({ thought, handleLikes }) => {
  return (
    <section>
      {thought.map((singleThought) => {
        return (
          <div className="singleThought" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <div className="heartBtn">
              <div className="likeCounter">
                <button
                  onClick={() => handleLikes(singleThought._id)}>❤️
                </button>
                <p> x {singleThought.hearts}</p>
              </div>
              <p>{// fixing the date format
                formatRelative(
                  new Date(singleThought.createdAt),
                  Date.now(),

                  { addSuffix: true }
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