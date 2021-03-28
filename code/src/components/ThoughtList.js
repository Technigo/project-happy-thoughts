import React from 'react'

import ThoughtElement from './ThoughtElement'

const ThoughtList = ( {thoughtList, handleLikesIncrease} ) => {
  return (
    <div className='thought-list'>
      {thoughtList.map(thought => (
        <ThoughtElement 
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}

export default ThoughtList