/* eslint-disable no-underscore-dangle */
import React from 'react';

export const ThoughtsOutput = (props) => {
  return (
    props.map((thought) => {
      return (
        <div className="outputBox" key={thought._id}>
          <p>{thought.message}</p>
          {/* Like-button here */}
          {/* timestamp here */}
        </div>
      )
    })
  )
}