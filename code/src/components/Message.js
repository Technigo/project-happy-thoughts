import React from 'react'
import moment from 'moment';

const Message = ({messageList, onAddHeart, onDeleteMsg}) => {
  return (

    <>  
      {messageList.map(message => (
        <div key={message._id} className='message'> 

          <div className='msg-container'>
            <h3>{message.message}</h3>
            <button onClick={() => onDeleteMsg(message._id)} className='btn-delete'>delete</button>
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