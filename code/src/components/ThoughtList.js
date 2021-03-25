import React from'react'

import ThoughtElement from './ThoughtElement'

const ThoughtList = ({thoughtList, handleHeartsIncrease}) => {
  return (
    <>
    
      {thoughtList.map(thought =>(
        <ThoughtElement 
        key={thought._id}
        thought={thought}
        onHeartsIncrease={handleHeartsIncrease}/>
      ))}
      
    </>
  )
}
export default ThoughtList