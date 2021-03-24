import React from 'react'

const HappyMessageList = ({ happyList }) => {
  return (
    <>
      {happyList.map(message =>(
        <div key={message._id}>
          <h4>{message.message}</h4>
          <button onClick={ () => onHeartsIncrease(message._id)}>
            {message.hearts}
            ❤️
          </button>
          <p>-{moment(message.createdAt).fromNow()}</p>
        </div>
    ))}
    </>
  )
}

export default HappyMessageList