/* eslint-disable no-underscore-dangle */
import React from 'react';
import SingleThought from './SingleThought.js';

const Thoughts = ({ thoughts, handleLike }) => {
  return (
    <section className="thoughts-section">
      {thoughts.map((thought) => {
        return (
          <SingleThought thought={thought} handleLike={handleLike} />
        )
      })}
    </section>
  )
}

export default Thoughts;