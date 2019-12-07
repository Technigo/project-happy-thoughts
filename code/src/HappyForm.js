import React, { useState } from 'react'


export const HappyForm = () => {
  const [message, setMessage] = useState([])
  const [handleSubmit, setHandleSubmit] = useState([])

  return (
    <div className="message">
      <h1>What's making you happy right now?</h1>
      <form>
        <textarea
          placeholder="React is making me happy!"
          rows="3"
        // onChange={event.setMessage}
        >
        </textarea>
        <button type="submit" onClick={handleSubmit}>&#10084;&#65039; Send Happy Thought &#10084;&#65039;</button>
      </form>
    </div>

  )
}

