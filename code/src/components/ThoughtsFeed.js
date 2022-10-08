/* eslint-disable no-underscore-dangle */
import React from 'react';
import Thought from './Thought';

const ThoughtsFeed = ({ handleTotalLikesCallback, list, posted }) => {
  return (
    <section>
      {list.map((singleThought, index) => {
        if (index < 1) {
          return (
            <Thought
              createdAt={singleThought.createdAt}
              handleTotalLikesCallback={handleTotalLikesCallback}
              hearts={singleThought.hearts}
              id={singleThought._id}
              key={singleThought._id}
              message={singleThought.message}
              posted={posted} />
          )
        } else {
          return (
            <Thought
              createdAt={singleThought.createdAt}
              handleTotalLikesCallback={handleTotalLikesCallback}
              hearts={singleThought.hearts}
              id={singleThought._id}
              key={singleThought._id}
              message={singleThought.message}
              posted={false} />
          )
        }
      })}

    </section>
  )
}

export default ThoughtsFeed