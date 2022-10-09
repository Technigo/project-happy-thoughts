import React from 'react';

// the component that handles the message that the user can add
const NewMessage = ({ count, newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <div className="inner-wrapper">
      <form onSubmit={onFormSubmit} className="new-message-box">
        <p className="new-message">What´s making you happy right now?</p>
        <textarea
          className="text-area"
          // Sets the height of the text-area
          rows="3"
          // // Sets the width of the text-area
          // cols="30"
          placeholder="Type your thoughts here..."
          value={newMessage}
          onChange={onNewMessageChange} />
        <p
          className="counter"
          // Makes the text of the character-counter red if
          // it's less than 1 or more than 140 characters
          style={{
            color: count <= 0 || count > 140 ? 'red' : ''
          }}>
          {count}/140
        </p>
        <button
          type="submit"
          className="submit-Btn"
          // Makes the button un-clickable if it's
          // less than 1 or more than 140 characters
          disabled={newMessage.length < 1 || newMessage.length > 140}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>

  )
}

export default NewMessage;