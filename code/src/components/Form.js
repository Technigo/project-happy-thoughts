import React from 'react'

const Form = ( { onFormSubmit, newThought, onSetThoughtChange } ) => {

    return (
       <section className='form-container'>
            <form 
                onSubmit={onFormSubmit}
                className='form-content'
            >
                <p>What's making you happy right now?</p>
                <label htmlFor='new-thought'>
                    <textarea 
                        className='input-text'
                        rows="3"
                        cols="37"
                        onChange={onSetThoughtChange}
                        value={newThought}
                        id='new-thought'
                        name='new-thought'
                        placeholder='A penny for your thought!'
                    />
                </label>
                <button 
                        type='submit'
                        className='submit-btn'
                        disabled={newThought.length < 6 || newThought.length > 140}
                    ><span role='img' aria-label='heart'>
                    ❤️ Send Happy Thought ❤️</span>
                </button>
            </form>
       </section>
    )



}

export default Form