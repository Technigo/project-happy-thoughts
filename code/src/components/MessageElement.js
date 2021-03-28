import React from 'react';
import moment from 'moment';

const MessageElement = ({ messagePost, onLikesIncrease }) => {
    return (
        <div>
              <h4>{messagePost.message}</h4>
              <button onClick={() => onLikesIncrease(messagePost._id)}>
                    {messagePost.hearts}
                    ❤
              </button>
              <p className="date">-{moment(messagePost.created).fromNow()}</p>
        </div>
    );
}

export default MessageElement;