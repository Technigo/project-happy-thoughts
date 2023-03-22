import React from 'react';

const Thoughts = ({ thoughts }) => {
  return (
    <section>
      {thoughts.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id}>{thought.message}</div>
        )
      })}
    </section>
  )
}

export default Thoughts;