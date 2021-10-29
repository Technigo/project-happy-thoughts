import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor='newThought'className='input-label'>Type your thought</label>
            <textarea 
                className='text-input'
                id='newThought'
                type='text' 
                value={newThought} 
                onChange={(e) => setNewThought(e.target.value)}
            />
            <button 
                disabled={newThought.length < 6 || newThought.length > 140} 
                type='submit' className='btn-send'>Send happy thought  
                <span role='img' aria-label='heart emoji'> ❤️</span>
            </button>
      </form>
    )

}

export default ThoughtForm