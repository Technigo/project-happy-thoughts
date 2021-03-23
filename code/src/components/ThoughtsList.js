import React from 'react'
import moment from 'moment'

const ThoughtsList = ({thought}) => {

  return(
    <div key={thought._id}>
      <h2>{thought.message}</h2>
      <p className='date'>-{moment(thought.createdAt).fromNow()}</p>
    </div>
  )
}

export default ThoughtsList