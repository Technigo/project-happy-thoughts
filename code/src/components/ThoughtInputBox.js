
import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

const ThoughtInputBox = () => {
  const [input, setInput] = useState('');
  return (
    <div className="thoughtInputBox-div">
      Thought Input Box
      <form>
        <label htmlFor="label-thought">What is making you happy right now?<br />
          <input className="input-field" type="text" id="label-thought" name="label-thought" onChange={setInput} value={input} maxLength="300" />
        </label>

        {/*         <label htmlFor="lname">Last name:
          <input type="text" id="lname" name="lname" />
        </label> */}
      </form>
      <SubmitButton />
    </div>
  )
}

export default ThoughtInputBox