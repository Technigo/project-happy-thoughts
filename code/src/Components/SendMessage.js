import React from 'react';

const SendMessage = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (
    <section className="outer-send-message-container">
      <div className="inner-send-message-container">
        <form onSubmit={onFormSubmit}>
          <h2>What is making you happy right now?</h2>
          <textarea
            value={newMessage}
            type="text"
            placeholder="My happy thought is..."
            onChange={handleNewMessageChange}
            className="text-area" />
          <button
            type="submit"
            className="send-btn"
            onClick="">
            ❤️ Send happy thought ❤️
          </button>
        </form>
      </div>
    </section>
  )
}

export default SendMessage