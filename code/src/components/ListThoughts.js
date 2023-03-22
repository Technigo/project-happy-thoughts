/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

export const ListThoughts = ({ loading, thoughtsList }) => {
  if (loading) {
    return <h1>Loading in progress</h1>
  }

  console.log({ thoughtsList })

  // const onThoughtChange = (thought) => {
  //   setThoughtsList((thoughtsList) => thoughtsList.map((singleTought) => {
  //     if (singleTought._id === thought._id) {
  //       return {...singleTought, isChecked: !singleTought.isChecked};
  //     }
  //     return singleTought;
  //   }));
  // }

  return (
    <section className="thought-list">
      {thoughtsList.map((thought) => {
        return (
          <div className="single-thought">
            <p key={thought._id}>{thought.message}</p>
            <button className="heart-wrapper" type="submit">❤️</button>
            <p>
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        )
      })}
    </section>
  )
}