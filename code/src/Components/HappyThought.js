import React from 'react'
import moment from 'moment'

const HappyThought = (props) => {
  console.log('props', props)
  const { message, hearts, createdAt } = props.thought

  return (
    < article >
      <h1>{message}</h1>
      <span>{hearts}</span>
      <p>{moment(createdAt).fromNow()}</p>
    </article >
  )
}

export default HappyThought