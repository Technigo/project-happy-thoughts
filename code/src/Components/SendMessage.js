/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SendMessage = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (
    <section className="outer-send-message-container">
      <div className="inner-send-message-container">
        <form onSubmit={onFormSubmit}>
          <h2>What's making you happy right now?</h2>
          <textarea
            value={newMessage}
            type="text"
            placeholder="My happy thought is..."
            onChange={handleNewMessageChange}
            className="text-area"
            maxLength="140"
            minLength="10" />
          <button
            type="submit"
            className="send-btn"
            onClick=""
            disabled={newMessage.length < 5}>
            ❤️ Send happy thought ❤️
          </button>
        </form>
        <p className={newMessage.length === 140 ? 'red-font' : 'normal-font'}>Remaining characters:{140 - newMessage.length}</p>
      </div>
    </section>
  )
}

export default SendMessage
