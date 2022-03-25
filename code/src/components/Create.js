import React from 'react'



const Create = ({ newThought, onNewThoughtChange, onFormSubmit}) => {

  return (
    <form className="create-box" onSubmit={onFormSubmit}>
      <h1>What´s making you happy right now?</h1>
      <textarea value={newThought} onChange={onNewThoughtChange}/>
      <button 
       type="submit"
       className='send-button'
       disabled={newThought.length<5 || newThought.length>140}>
          <span role="img" aria-label="heart emoji">&#10084;&#65039;</span>
          Send Happy Thought
          <span role="img" aria-label="heart emoji">&#10084;&#65039;</span>
        </button>
    </form>
  )
}

export default Create;
