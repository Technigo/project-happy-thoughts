import React from 'react'


import ThoughtElement from './ThoughtElement'

const ThoughtList = ( {thoughtList, handleLikesIncrease} ) => {
  return (
    <>
      {thoughtList.map(thought => (
        <ThoughtElement 
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </>
  )
}

export default ThoughtList