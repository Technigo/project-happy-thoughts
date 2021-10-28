import React from 'react'
import SubmitButton from './SubmitButton'

const NewThought = ({ onFormSubmit, newThought, setNewThought}) => {
return (
  <form onSubmit={onFormSubmit}>
  <label htmlFor="newThought">What is making you happy right now?</label>
  <textarea
  id="newThought"
  type="text" 
  name="Text"
  rows="4"
  cols="50"
  spellCheck="true"
  required
  placeholder="Write a happy thought here..."
  value={newThought} 
  onChange={(event) => setNewThought(event.target.value)} 
  />
  <p className='character-counter'>{newThought.length}/140</p>
  < SubmitButton />
</form>

)
}
   
export default NewThought