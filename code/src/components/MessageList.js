/* eslint-disable no-underscore-dangle */
import React from 'react';
import TimeStamp from './TimeStamp';
// eslint-disable-next-line import/no-named-as-default-member
import LikeBtn from './LikeBtn';
/* , setMessageList, onMessageLiked */

const MessageList = ({ loading, setLoading, messageList, setNewLike }) => {
  return (
    <section>
      {messageList.map((event) => (
        <div key={event._id} className="message-box">
          {/* {console.log(event)} */}
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
/*          <LikeBtn
            event={event}
            messageList={messageList}
            setMessageList={setMessageList}
            onMessageLiked={onMessageLiked} />
 */
export default MessageList;