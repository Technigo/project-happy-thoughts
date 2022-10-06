import React from 'react'

const ThougthInput = ({ newThought, onSend, onNewThought }) => {
  return (
    <form onSubmit={onSend} className="container-child-input">
      <p className="header">What´s making you happy right now?</p>
      <textarea
        value={newThought}
        onChange={onNewThought}
        className="inputBox"
        placeholder="What's on your mind? " />
      <button type="submit" className="btn-send" disabled={newThought.length < 6 || newThought > 140}>  Send love ❤️</button>
    </form>
  )
}
export default ThougthInput;
