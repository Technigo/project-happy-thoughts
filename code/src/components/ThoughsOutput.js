/* eslint-disable no-underscore-dangle */
import React from 'react';
import { LikeButton } from './LikeButton';

export const ThoughtsOutput = (props) => {
  return (
    props.map((thought) => {
      return (
        <div className="outputBox" key={thought._id}>
          <p>{thought.message}</p>
          <div className="outputBottom">
            <LikeButton id={thought._id} hearts={thought.hearts} />
            <div className="date-display">
              Posted:
              {(thought.createdAt)}
            </div>
          </div>
        </div>
      )
    })
  )
}