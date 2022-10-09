import React from 'react';
import './style.css'

const ThoughtsForm = ({ newThought, handleNewThoughtChange, onFormSubmit }) => {
  return (
    <div >
      <form className='styleform' onSubmit={onFormSubmit}>
        <h1>Welcome to happy thoughts app! Type new thought below.</h1>
        <textarea 
        className='textArea'
        value={newThought}
        onChange={handleNewThoughtChange}
        placeholder='Enter yout thought here...'
        maxLength="140" />
        <div className="counter">{0 + newThought.length} / {140 - newThought.length} </div>
        <button type="submit"
        disabled={newThought.length < 6 || newThought.length > 140} >Submit form!</button>
      </form>
    </div>
  )
}
export default ThoughtsForm;