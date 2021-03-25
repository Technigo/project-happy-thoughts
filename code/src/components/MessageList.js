import React from 'react';
import moment from 'moment';



const MessageList = ({messageListArray, handleMoreLikes}) => {

  return (
    <div className="message-list-container">
      {messageListArray.map(message => (
        <div className= "thoughts-card" key={message._id}>
          <h4 className="message-text">{message.message}</h4>
        <div className="created-and-likes">
          <div className="like-container">
            <button className="heart-button"
            style={{ background: message.hearts > 0 ? "#ffadad" : "#ffe9e9"}}
              onClick={() =>handleMoreLikes(message._id)}>
              <span role="img" aria-label="heart">
                {"❤️"}</span>
            </button>
            <p>x {message.hearts}</p>
          </div>
            <p className="created">{moment(message.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
     </div>
  )
}

export default MessageList;