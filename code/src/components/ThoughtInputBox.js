
import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

const ThoughtInputBox = () => {
  const [input, setInput] = useState('');

  /*   handleUserInput = (event) => {
    setInput(event.target.value);
  } */
  return (
    <div className="thoughtInputBox-div">
      Thought Input Box
      <form>
        <label
          className="input-field"
          htmlFor="input">Whats making you happy right now?
          <div>
            <textarea
              id="input"
              className="input-field"
              type="text"
              rows="5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Happy thought here!" />

            <p className="letter-counter">
              {140 - input.length} characters left
            </p>
          </div>
        </label>
      </form>
      <SubmitButton input={input} setInput={setInput} />
    </div>
  )
}

export default ThoughtInputBox