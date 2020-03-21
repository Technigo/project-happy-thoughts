import React, { useState, useEffect } from 'react'

export const MyThought = () => {
  const [myThought, setMyThought] = useState('')

  return (
    <form>

      <div className="new-thought">
        <label>
          <p>What's making you happy right now?</p>
          <input
            className="inputfield"
            type="text"
            id="myThought"
            onChange={(event) => setMyThought(event.target.value)}
            value={myThought} />

        </label>
      </div>
    </form>
  );
}
