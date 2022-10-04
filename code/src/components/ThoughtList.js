import React from 'react';

const ThoughtList = ({ list }) => {
  return (
    <section>
      {list.map((singleTask) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div key={singleTask._id}>
            <p>{singleTask.message}</p>
          </div>
        )
      })}
    </section>
  )
}
export default ThoughtList