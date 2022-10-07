/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import Thought from './Thought';

const ThoughtsFeed = ({ list }) => {
  useEffect(() => {
    console.log('component mounted')
  }, [])
  return (
    <section>
      {list.map((singleThought) => {
        return (
          <Thought
            key={singleThought._id}
            id={singleThought._id}
            message={singleThought.message}
            hearts={singleThought.hearts}
            createdAt={singleThought.createdAt} />
        )
      })}
    </section>
  )
}

export default ThoughtsFeed