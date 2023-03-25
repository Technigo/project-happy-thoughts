/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import LikeBtn from './LikeBtn.js'

const Thoughts = ({ thoughts, handleLike }) => {
  return (
    <section className="thoughts-section">
      {thoughts.map((thought) => {
        return (
          <section className="single-thought-section" key={thought._id}>
            <div>{thought.message}</div>
            <div>
              <LikeBtn thought={thought} handleLike={handleLike} />
              <div>
                {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
              </div>
            </div>
          </section>
        )
      })}
    </section>
  )
}

export default Thoughts;