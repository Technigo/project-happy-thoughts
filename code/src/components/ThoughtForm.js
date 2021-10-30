import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought, letterCounter }) => {


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor='newThought'className='input-label'>What is happiness for you?</label>
            <textarea 
                className='text-input'
                id='newThought'
                type='text' 
                value={newThought} 
                onChange={(e) => setNewThought(e.target.value)}
            />
            <div className='btn-lettercounter'>
                <button 
                    disabled={newThought.length < 6 || newThought.length > 140} 
                    type='submit' className='btn-send'>Send happy thought  
                    <span role='img' aria-label='heart emoji'> ❤️</span>
                </button>
                <div className='letter-counter'>
                    <span className={letterCounter > 140}>
                        {140 - letterCounter}
                    </span>
                    {''} /140
                </div>
            </div>
      </form>
    )

}

export default ThoughtForm