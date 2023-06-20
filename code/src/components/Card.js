/* eslint-disable no-underscore-dangle */
import React from 'react'

// Add parameters for setUsername and setTag
export const Card = ({ stateVariable, setStateVariable, setUsername, setTag, sendHappy }) => {
  return (
    <div className="Card">
      <h1>What is making you happy now?</h1>
      <input
        type="text"
        maxLength="140"
        value={stateVariable}
        onChange={(event) => setStateVariable(event.target.value)} />

      {/* new inputs for username and tag */}
      <input
        type="text"
        maxLength="50"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)} />

      <input
        type="text"
        maxLength="50"
        placeholder="Tag"
        onChange={(event) => setTag(event.target.value)} />

      <button
        className="send"
        type="button"
        onClick={() => { sendHappy() }}>❤️ Send happy thought ❤️
      </button>
    </div>
  );
}
