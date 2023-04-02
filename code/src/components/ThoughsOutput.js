/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns/esm';
import { LikeButton } from './LikeButton';

export const ThoughtsOutput = (props) => {
  return (
    props.map((thought) => {
      return (
        <div className="outputBox" key={thought._id}>
          <p className="thoughtOutputText">{thought.message}</p>
          <div className="outputBottom">
            <LikeButton id={thought._id} hearts={thought.hearts} />
            <div className="date-display">
              {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
            </div>
          </div>
        </div>
      )
    })
  )
}