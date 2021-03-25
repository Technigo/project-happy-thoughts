import React from 'react'

import MessageElement from './MessageElement'

const HappyMessageList = ({ happyList, handleHeartsIncrease }) => {
  return (
    <>
      {happyList.map(message =>(
        <div className='message-card' key={message._id}>
          <MessageElement 
            message={message} 
            onHeartsIncrease={handleHeartsIncrease}
          />
        </div>
    ))}
    </>
  )
}

export default HappyMessageList