import React, { useState, useEffect } from 'react';


const [newThought, setNewThought] = useState("")


export const NewThought = (props) => {
  return (
    <form>
      <label>
        <input
          type="text"
          placeholder="Type your tought here..."
          onChange={event => setNewThought(event.target.value)}
          value={newThought}
        />
      </label>
    </form>
  )
}