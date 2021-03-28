import React from 'react';

import moment from 'moment';

const MessageElement = ({ input, onLikesIncrease }) => {
    return (
        <div>
        <h4>{input.message}</h4>
        <button onClick={() => onLikesIncrease(input._id)}>
          {input.hearts}
          <span>❤️</span>
        </button>
        <p className="date">- {moment(input.createdAt).fromNow()}</p>
      </div>
    )
}

export default MessageElement;