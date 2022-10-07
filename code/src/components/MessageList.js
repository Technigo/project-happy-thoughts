/* eslint-disable no-underscore-dangle */
import React from 'react';
import TimeStamp from './TimeStamp';
import LikeBtn from './LikeBtn';

const MessageList = ({ loading, setLoading, messageList, setNewLike }) => {
  return (
    <section>
      {messageList.map((event) => (
        <div key={event._id} className="message-box">
          <p className="message">{event.message}</p>
          <LikeBtn
            setNewLike={setNewLike}
            event={event}
            loading={loading}
            setLoading={setLoading} />
          <TimeStamp event={event} />
        </div>
      ))}
    </section>
  )
}

export default MessageList;