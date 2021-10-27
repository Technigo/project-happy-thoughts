import React from 'react';

const ThoughtForm = ({onFormSubmit, newThought, setNewThought}) => {
return (
    <form onSubmit={onFormSubmit}>
    <label htmlFor="newThought">What's making you happy right now?</label>
    <input 
    id="newThought"
    type="text" 
    value={newThought} 
    onChange={e => setNewThought(e.target.value)}
    />
    <button type="submit">&hearts;Send Happy Thought&hearts;</button>
  </form>

)
};

export default ThoughtForm;
