import React from 'react';
import { formatDistance } from 'date-fns';
import loadingimg from 'Images/Spinner.gif'

const MessageList = ({ loading, messageList, onLikesIncrease }) => {
  if (loading) {
    return (
      <>
      <h1>Loading in progress...</h1>
      <div className='loadingImg'><img src= {loadingimg} />
      </div>
      </>
    )
  }

  return (
    <section>
      {messageList.map((event) => (
        <div
          key={event._id}
          className="message-box">
          <p className="message">{event.message}</p>
          <div className="heart-counter-container">
            <div className="heart-counter">
              <button
                type="button"
                /* an if conditional that says if the count of the heart is zero,
                  then the className would be like-btn, otherwise it would be no-like-btn */
                className={(event.hearts === 0 ? 'like-btn' : 'no-like-btn')}
                onClick={() => onLikesIncrease(event._id)}
                // Condition to determine heart button's back color depending on the amount of hears it has
                style={{ backgroundColor: event.hearts > 0 ? '#ffadad' : '#f2f0f0' }}
                aria-label="Heart emoji">❤️
              </button>
              <p className="counter">x {event.hearts}</p>
            </div>
          </div>
          <p className="date">
            {formatDistance(new Date(event.createdAt), Date.now(), { addSuffix: true })}
          </p>
        </div>
      ))}
    </section>
  )
}

export default MessageList