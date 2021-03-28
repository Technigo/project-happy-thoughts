import React from 'react'

const MessageList = ({ messageList }) => {
    return (
        <>
        {messageList.map(messagePost => (
            <div key={messagePost._id}>
              <h4>{messagePost.message}</h4>
              <button onClick={() => onLikesIncrease(messagePost._id)}>
                {messagePost.hearts}
                ❤
              </button>
              <p className="date">-{moment(messagePost.created).fromNow()}</p>
            </div>
        ))}
        </>
    );
};

export default MessageList