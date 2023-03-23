import React from 'react';

export const SendButton = (message) => {
  return (
    <button
      type="submit"
      className="sendButton"
      disabled={message.length < 6 || message.length > 140}>
      ❤️Send a Happy Thought❤️
    </button>
  )
}