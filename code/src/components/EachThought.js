/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Hearts } from './Hearts';

export const EachThought = ({ thoughtInput }) => {
  return thoughtInput.map((thought) => {
    // eslint-disable-next-line no-underscore-dangle
    return (
      <div key={thought._id}>
        <p>{thought.message}</p>
        <Hearts thought={thought} />
      </div>
    )
    // return (
    //   <>
    //     {/* <p key={thought._id}>{thought.message}</p> */}
    //     <Hearts key={thought._id} thought={thought} />
    //   </>
    // )
  });
}
