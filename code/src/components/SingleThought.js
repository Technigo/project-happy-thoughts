/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { formatDistance } from 'date-fns'
import LikeBtn from './LikeBtn.js'

const SingleThought = ({ thought, handleLike }) => {
  const [currentThought, setCurrentThought] = useState(thought);
  return (
    <section className="single-thought-section" key={thought._id}>
      <div>{thought.message}</div>
      <div>
        <LikeBtn
          thought={thought}
          handleLike={handleLike}
          currentThought={currentThought}
          setCurrentThought={setCurrentThought} />
        <div>
          {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
        </div>
      </div>
    </section>
  )
}

export default SingleThought;