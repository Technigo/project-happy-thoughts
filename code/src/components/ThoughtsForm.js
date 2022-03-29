import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit}) => {

    return (
        <div className='form-container'>
            <form onSubmit={onFormSubmit}>
                <p className='form-title'>Spread some joy, post a happy tweet below  <span className='emoji' role='img' aria-label='ice-cream-emoji'>🍭</span></p>
                <textarea
                    value={newThought}
                    onChange={onNewThoughtChange}
                    placeholder='What made you smile today?'
                    rows='5'
                    cols='30'
                />

                <button 
                    className='submit-btn'
                    type="submit"
                    disabled={newThought.length < 5 || newThought.length > 140}
                >
                    <span className='emoji' role='img' aria-label='heart-emoji'>💛</span> Send Thought <span role='img' aria-label='heart-emoji'>💛</span>
                </button>
            </form>
        </div>
    );
};

export default ThoughtsForm;
