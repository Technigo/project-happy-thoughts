import React from 'react';
import Counter from 'components/TextareaCounter';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="newThoughtForm" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>

        <textarea 
        className="new-thought-textarea"
        id="newThought" 
        type="text" 
        value={newThought} 
        onChange={e => setNewThought(e.target.value)} 
        placeholder="Give us your happy thought"/>

        <Counter chars={newThought.length}/>

      <div className="new-thought-button-container">
        <button 
        className="newThoughtButton" 
        disabled={newThought.length < 5} 
        type="submit">
           <span className='heart' role='img' aria-label='heart'>
           💗
          </span>
          Send Happy Thought
          <span className='heart' role='img' aria-label='heart'>
            💗
          </span>
        </button>
      </div>
      </form>
  );
};
export default ThoughtForm;