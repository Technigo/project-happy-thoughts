/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';

const ThoughtsFeed = ({ list }) => {
  useEffect(() => {
    console.log('component mounted')
  }, [])
  return (
    <section>
      {list.map((singleThought) => {
        return (
          <div className="thought" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <p>hearts: {singleThought.__v}</p>
          </div>
        )
      })}
    </section>
  )
}

export default ThoughtsFeed