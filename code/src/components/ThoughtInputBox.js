
import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

const ThoughtInputBox = ({ setAllThoughts }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="thoughtInputBox-div">
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
              onChange={handleInputChange}
              placeholder="Add your Happy thoughts here!" />

            <p className="letter-counter">
              {140 - input.length} characters left
            </p>
          </div>
        </label>
      </form>
      <SubmitButton input={input} setInput={setInput} setAllThoughts={setAllThoughts} />
    </div>
  )
}

export default ThoughtInputBox