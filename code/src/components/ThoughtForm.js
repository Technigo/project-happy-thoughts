import React from 'react'

const ThoughtForm = ( { onFormSubmit, newThought, onSetThoughtChange } ) => {

    return (
       <section className='thoughtform-wrapper'>
        <form onSubmit={onFormSubmit}>

                <h1>What's making you happy right now?</h1>
                <label htmlFor='new-thought'>
                    <textarea 
                        className='input-text'
                        onChange={onSetThoughtChange}
                        value={newThought}
                        id='new-thought'
                        name='new-thought'
                        placeholder='You name it!'
                         />
                </label>

                <button 
                    type='submit'
                    className='submit-button'>
                    <span  role='img' aria-label='heart'>❤️ Send Happy Thought ❤️</span>
                </button>
        </form>
       </section>
    )
}

export default ThoughtForm