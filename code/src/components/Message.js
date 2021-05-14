import React from 'react'
import moment from 'moment';

const Message = ({messageList, onAddHeart}) => {
  return (

    <>  
      {messageList.map(message => (
        <div key={message._id} className='message'> 

          <div>
            <h3>{message.message}</h3>
          </div>
          <div className='btn-container'> 

            <div className='btn-counter'>
              <button className= { `heart-btn ${message.hearts === 0 ? "heart-btn-unliked" : "heart-btn-liked"}`} 
              onClick={() => onAddHeart(message._id)}> <span role='img' aria-label='heart'>❤️</span></button> 
              <p> {message.hearts} web developers loved this</p>
            </div>
            <div>
              <p>Posted: {moment(message.createdAt).fromNow()} </p>
            </div>
          </div>
      </div>
      ))}
    </>
  )
}

export default Message