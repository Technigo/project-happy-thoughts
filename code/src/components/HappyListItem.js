import React from 'react'

const HappyListItem = ({ list }) => {
  return (
    <section>
      {list.map((singleThought) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div className="thought-card" key={singleThought._id}>
            <p>{singleThought.message}</p>
            {singleThought.hearts}
            {singleThought.createdAt}
          </div>
        )
      })}
    </section>
  )
}

export default HappyListItem