/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { formatDistance } from 'date-fns'
import LikeBtn from './LikeBtn.js'

const SingleThought = ({ thought, handleLike }) => {
  const [currentThought, setCurrentThought] = useState(thought);
  return (
    <section className="single-thought-section" key={thought._id}>
      <p className="single-thought-message">{thought.message}</p>
      <div className="single-thought-like">
        <LikeBtn
          handleLike={handleLike}
          currentThought={currentThought}
          setCurrentThought={setCurrentThought} />
        <div className="single-thought-date">
          {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
        </div>
      </div>
    </section>
  )
}

export default SingleThought;