import React from 'react';
import './SendBtn.css'

export const SendBtn = ({ message }) => {
  return (
    <button
      type="submit"
      className="send-btn"
      disabled={message.length < 6 || message.length > 140}>
      ❤️ Send happy thought ❤️
    </button>
  )
}