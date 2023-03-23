/* eslint-disable no-underscore-dangle */
import React from 'react'

export const ListThoughts = ({ loading, thoughtsList }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return thoughtsList.map((thought) => {
    return (
      <p key={thought._id}>{thought.message}</p>
    )
  })
}
