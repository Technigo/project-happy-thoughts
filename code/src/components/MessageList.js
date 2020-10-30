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
        <article className="Article" key={message._id}>
          {console.log(message._id)}
          {console.log(message.hearts)}
          <p className="Article__text">{message.message}</p>
          <Button
            type="button"
            className={
              message.hearts === 0
                ? 'Button Button__round Button__round--gray'
                : message.hearts > 5
                ? 'Button Button__round Button__round--darkpink'
                : 'Button Button__round Button__round--pink'
            }
            onClick={() => handleClick(message._id)}
            text={
              <img
                className={
                  message.hearts < 6
                    ? 'Button__icon'
                    : 'Button__icon Button__icon--pulse'
                }
                src="./assets/heart.svg"
                alt="heart icon"
              />
            }
            // <span
            //   className={message.hearts > 5 ? 'Article__span' : ''}
            //   role="img"
            //   aria-label="Heart"
            // >
            //   {'❤️'}
            // </span>
          />
          <div>
            <p className="Article__text--likes">x {message.hearts}</p>
            <p className="Article__text--likes">
              {!localStorage[message._id]
                ? ''
                : localStorage[message._id] < 2
                ? `x ${localStorage[message._id]} your like`
                : `x ${localStorage[message._id]} your likes`}
            </p>
          </div>
          <p className="Article__text--time">
            {moment(message.createdAt).fromNow()}
          </p>
        </article>
      ))}
    </>
  );
};

export default MessageList;
