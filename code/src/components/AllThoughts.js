import React from 'react';
import moment from 'moment';

const AllThoughts = ({ message, onLikesIncrease, heart }) => {
  return (
    <div className="posted-thoughts" key={message._id}>
      <p className="thought-message">{message.message}</p>
      <div className="like-button">
        <button onClick={() => onLikesIncrease(message._id)}>
          <img src={heart} alt="Red heart emoji" />
        </button>
        <span className="thoughts-likes"> x {message.hearts}</span>
      </div>
      <p className="date">Created at: {moment(message.createdAt).fromNow()}</p>
    </div>
  );
};

export default AllThoughts;
