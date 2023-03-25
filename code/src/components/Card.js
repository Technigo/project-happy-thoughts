/* eslint-disable no-underscore-dangle */
import React from 'react'

export const Card = ({ stateVariable, setStateVariable, sendHappy }) => {
  return (

    <div className="Card">
      <h1>What is making you happy now?</h1>
      <input
        type="text"
        maxLength="140"
        value={stateVariable}
        onChange={(event) => setStateVariable(event.target.value)} />
      <button
        className="send"
        type="button"
        onClick={() => { sendHappy() }}>❤️ Send happy thought ❤️
      </button>
    </div>
  );
}