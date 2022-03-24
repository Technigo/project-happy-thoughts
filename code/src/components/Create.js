import React from 'react'



const Create = ({ newThought, onNewThoughtChange, onFormSubmit}) => {

  return (
    <form onSubmit={onFormSubmit}>
      <h1>Share your thought</h1>
      <textarea value={newThought} onChange={onNewThoughtChange}/>
      <button type="submit">Submit!</button>
    </form>
  )
}

export default Create;
