import React from 'react'
import { formatRelative } from 'date-fns'

const ShowThoughtList = ({thoughtList}) => {
  return (
    <section>
      { thoughtList &&
        thoughtList.map(singleThought => (
          <div key={singleThought._id}>
            <h4>{singleThought.message}</h4>
            <span>Number of hearts: {singleThought.hearts}</span>
            <p>{singleThought.createdAt}</p>

          </div>
        ))

      }
    </section>
  )
}

export default ShowThoughtList;