import React from 'react'

import MessageElement from './MessageElement'

const HappyMessageList = ({ happyList, handleHeartsIncrease }) => {
  return (
    <>
      {happyList.map(message =>(
        <MessageElement 
          key={message._id}
          message={message} 
          onHeartsIncrease={handleHeartsIncrease}
        />
    ))}
    </>
  )
}

export default HappyMessageList