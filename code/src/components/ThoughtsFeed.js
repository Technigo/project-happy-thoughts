/* eslint-disable max-len */
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
        console.log(singleThought)

        return (
          <Thought
            id={singleThought._id}
            message={singleThought.message}
            hearts={singleThought.hearts} />
        )
      })}
    </section>
  )
}

export default ThoughtsFeed