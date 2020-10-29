import React, { useState } from 'react';
import moment from 'moment';

import Button from './Button';

const MessageList = ({ messageList, onLikeChange }) => {
  const [newLike, setNewLike] = useState(0);

  const handleClick = id => {
    if (!localStorage[id]) {
      localStorage.setItem(id, 0);
    }
    console.log(id);
    setNewLike(newLike + 1);
    onLikeChange(id);
    localStorage[id] = Number(localStorage[id]) + 1;
  };

  return (
    <>
      {messageList.map(message => (
        <article className="App__item" key={message._id}>
          {console.log(message._id)}
          {console.log(message.hearts)}
          <p className="Article__text">{message.message}</p>
          <Button
            type="button"
            className="Button Button--round"
            onClick={() => handleClick(message._id)}
            text={
              <span role="img" aria-label="Heart">
                {'❤️'}
              </span>
            }
          />
          <div>
            <p>x{message.hearts}</p>
            <p>
              x {!localStorage[message._id] ? 0 : localStorage[message._id]}{' '}
              your likes
            </p>
          </div>
          <p>{moment(message.createdAt).fromNow()}</p>
        </article>
      ))}
    </>
  );
};

export default MessageList;
