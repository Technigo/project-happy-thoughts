import React from 'react'

const SubmitButton = () => {
  return (
    <>
      <button 
        className="add-new-thought-button" 
        type="submit" 
        value="Submit" 
      >
        <span role="img" aria-label="Red heart emoji"> ❤️ </span>
          Send Happy Thought
        <span role="img" aria-label="Red heart emoji"> ❤️ </span>
      </button>
    </>
  )
}

export default SubmitButton