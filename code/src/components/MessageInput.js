import React, { useState } from 'react';

import Button from './Button';

import './Styles.scss';

const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage('');
  };

  return (
    <section className="App__item App__item--gray">
      <form onSubmit={handleSubmit} className="Form">
        <label className="Form__label">
          <h1 className="Form__header">What's making you happy right now?</h1>
          <textarea
            rows="4"
            value={newMessage}
            onChange={event => setNewMessage(event.target.value)}
            placeholder="Type your happy thought..."
          ></textarea>
        </label>
        <div className="form-wrapper">
          <Button
            type="submit"
            className="Button"
            disabled={
              newMessage.length < 6 || newMessage.length > 140 ? true : false
            }
            text={
              <p>
                <span role="img" aria-label="Heart">
                  {'❤️ '}
                </span>
                Send Happy Thought
                <span role="img" aria-label="Heart">
                  {' ❤️'}
                </span>
              </p>
            }
          />
          <p className="">
            <span
              className={
                newMessage.length < 6 || newMessage.length > 140
                  ? 'text--red'
                  : 'text'
              }
            >
              {140 - newMessage.length}
            </span>
            / 140
          </p>
        </div>
      </form>
    </section>
  );
};

export default MessageInput;
