import React from 'react'
import { add, formatRelative } from 'date-fns'

import Thought from './Thought'

const ShowThoughtList = ({ thoughtList }) => {
  return (
    <section>
      {thoughtList &&
        thoughtList.map(singleThought => (
          <Thought _id={singleThought._id} message={singleThought.message} hearts={singleThought.hearts} createdAt={singleThought.createdAt} />
        ))

      }
    </section>
  )
}

export default ShowThoughtList;