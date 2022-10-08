/* eslint-disable no-underscore-dangle */
import React from 'react';
import TimeStamp from './TimeStamp';
import LikeBtn from './LikeBtn';

const MessageList = ({ loading, setLoading, messageList, setNewLike }) => {
  return (
    <div className="inner-wrapper">
      <section className="message-boxes">
        {messageList.map((event) => (
          <div key={event._id} className="message-box">
            <p className="message">{event.message}</p>
            <div className="likes-and-time">
              <LikeBtn
                setNewLike={setNewLike}
                event={event}
                loading={loading}
                setLoading={setLoading} />
              <TimeStamp event={event} />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MessageList;