import React from 'react';


const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
    return (
        <div className='container'>
            <form className='form-container' onSubmit={onFormSubmit}>
                <div className='new-thoughts-wrapper'>
                    <label htmlFor='newThought'>What is making you happy right now?</label>
                    <div>
                        <textarea
                            className='textarea'
                            id='newThought'
                            type='text'
                            value={newThought}
                            onChange={onNewThoughtChange}
                            placeholder="Type here..."
                        />
                        <p className='letter-counter'>
                            {140 - newThought.length} characters left
                        </p>
                    </div>
                    <button
                        className='form-button'
                        type='submit'
                        disabled={newThought.length < 5 || newThought.length > 140}
                    ><span role='img' aria-label='heart emoji'>❤️</span>Send Happy Thoughts<span role='img' aria-label='heart emoji'>❤️</span></button>
                </div>
            </form>
        </div>
    );
};

export default ThoughtForm;