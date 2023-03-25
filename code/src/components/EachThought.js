/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import { Hearts } from './Hearts';

export const EachThought = ({ thoughtInput, fetchThoughts }) => {
  return thoughtInput.map((thought) => {
    // eslint-disable-next-line no-underscore-dangle
    return (
      <div className="eachThought" key={thought._id}>
        <p>{thought.message}</p>
        <Hearts
          thought={thought}
          fetchThoughts={fetchThoughts} />
        <p className="timeStamp">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>

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
