/* eslint-disable linebreak-style */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const ThoughtsList = ({ thoughts }) => {
  return (
    <section className='thought-list'>
      {thoughts.map((thought) => {
        return (
          <div className='thought-container' key={thought._id}>
            <p>{thought.message}</p>
            <button type='button' className='like-btn'>
             ❤️
            </button>
          </div>
        )
      })}
    </section>
  )
};

export default ThoughtsList;
