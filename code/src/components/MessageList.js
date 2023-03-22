/* eslint-disable no-underscore-dangle */
import React from 'react';
import LikeBtn from './LikeBtn';

// the component that sets every message posted to the database in a list
const MessageList = ({ loading, setLoading, messageList, setNewLike }) => {
  return (
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
          </div>
        </div>
      ))}
    </section>
  )
}

export default MessageList;