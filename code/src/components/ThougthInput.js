import React from 'react'

const ThougthInput = ({ newThougth, onSend, onNewThougth }) => {
  return (
    <form onSubmit={onSend} className="container-child">
      <textarea value={newThougth} onChange={onNewThougth} className="inputBox" />
      <p>Test</p>
      <button type="submit" className="btn">Send you love</button>
    </form>
  )
}
export default ThougthInput;
