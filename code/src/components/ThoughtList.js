/* eslint-disable max-len */
import React from 'react'
import ThoughtForm from './ThoughtItem'

const ThoughtList = ({ thoughts, handleLikesIncrease }) => {
  return (
    <>
      {thoughts.map((thought) => <ThoughtForm thought={thought} onLikesIncrease={handleLikesIncrease} />)}
    </>
  )
}

export default ThoughtList