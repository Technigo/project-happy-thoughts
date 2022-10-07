import React from 'react';

const NewMessage = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  // Enables the user to use the enter-key to progress

  // const checkKeyPress = (event) => {
  //   const { keyCode } = event;
  //   if (keyCode === 13) {
  //     onNewMessageChange();
  //   }
  // };

  return (
    <form onSubmit={onFormSubmit} className="new-message-box">
      <p className="new-message">What´s making you happy right now?</p>
      <textarea
        className="text-area"
        rows="3"
        placeholder="Type your thoughts here..."
        value={newMessage}
        /* onKeyDown={checkKeyPress} */
        onChange={onNewMessageChange} />
      <button
        type="submit"
        className="submit-Btn"
        disabled={newMessage.length < 1 || newMessage.length > 140}>
          ❤️ Send Happy Thought ❤️
      </button>
    </form>

  )
}

export default NewMessage;