import React from 'react'
import './NewThought.css'

export const NewThought = () => {

  return (
    <div className="new-thought">
      <label>
        What's making you happy right now?
          <br></br>
        <br></br>
        <input
          // autoFocus
          type="text"
        />
      </label>
      <button className="send-button">❤️Send Happy Thought❤️</button>
    </div>
  )

}