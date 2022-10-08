
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
          htmlFor="input"><h3>What&apos;s making you happy right now?</h3>
          <textarea
            id="input"
            className="input-field"
            type="text"
            rows="10"
            value={input}
            onChange={handleInputChange}
            // placesholder decides what the textarea should say before any input is given.
            placeholder="Add your Happy thoughts here!" />
          <div className="letter-counter">
            <p>{140 - input.length} characters left</p>
          </div>
        </label>
      </form>
      <SubmitButton input={input} setInput={setInput} setAllThoughts={setAllThoughts} />
    </div>
  )
}

export default ThoughtInputBox