import React from 'react'
import moment from 'moment'

export const MessageElement = ({ message, onIncreaseLikes }) => {

  return(
    <>
      <h4 className='messageText'>
        {message.message}
      </h4>

      <div className='heartAndTime'>
        <div className='heartThings'>

          <button
            className='heartButton'
            style={{ background: message.hearts >= 1 ? '#ffadad' : '#eaeaea'}}
            onClick={() => onIncreaseLikes(message._id)}>
            <span
              className='heart'
              role='img'
              aria-label='heart emoji'>
                &#128151;
            </span>
          </button>

          <p className='nrOfLikes'>
            x {message.hearts}
          </p>

        </div>

        <p className='time'>
          {moment(message.createdAt).fromNow()}
        </p>

      </div>
    </>
  )
}