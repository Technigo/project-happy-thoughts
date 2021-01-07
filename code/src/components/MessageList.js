import React, { useState } from 'react';
import moment from 'moment';

import Button from './Button';

const MessageList = ({ messageList, onLikeChange }) => {
  const [newLike, setNewLike] = useState(0);

  //function to set localStorage and to post new like
  const handleClick = id => {
    if (!localStorage[id]) {
      localStorage.setItem(id, 0);
    }
    setNewLike(newLike + 1);
    onLikeChange(id);
    localStorage[id] = Number(localStorage[id]) + 1;
  };

  return (
    <>
      {messageList.map(message => (
        <article className="article" key={message._id}>
          <p tabIndex="0" className="article__text">
            {message.message}
          </p>
          <Button
            type="button"
            className={
              message.hearts === 0
                ? 'button button__round button__round--gray'
                : 'button button__round button__round--pink'
            }
            onClick={() => handleClick(message._id)}
            text={
              <img
                className={
                  message.hearts < 6
                    ? 'button__icon'
                    : 'button__icon button__icon--pulse'
                }
                src="./assets/heart-640x640.png"
                alt="heart icon"
              />
            }
          />
          <div tabIndex="0">
            <p className="article__text--likes">x {message.hearts}</p>
            <p className="article__text--likes">
              {!localStorage[message._id]
                ? ''
                : localStorage[message._id] < 2
                ? `x ${localStorage[message._id]} your like`
                : `x ${localStorage[message._id]} your likes`}
            </p>
          </div>
          <div>
            <p tabIndex="0" className="article__text--time">
              {message.name ? message.name : 'Anonymous'}
            </p>
            <p tabIndex="0" className="article__text--time">
              {moment(message.createdAt).fromNow()}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default MessageList;
