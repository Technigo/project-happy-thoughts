import React from 'react'

const ThougthInput = ({ newThougth, onSend, onNewThougth }) => {
  return (
    <form onSubmit={onSend} className="container-child-input">
      <p>Test</p>
      <textarea value={newThougth} onChange={onNewThougth} className="inputBox" placeholder="What's on your mind? " />
      <button type="submit" className="btn-send" disabled={newThougth.length < 6 || newThougth > 140}>  Send love ❤️</button>
    </form>
  )
}
export default ThougthInput;
