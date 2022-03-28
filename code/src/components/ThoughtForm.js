import React from 'react'

const ThoughtForm = ({newThought, handleNewThought, handleFormSubmit}) => {

    return (
        <section>
            <form
                htmlFor='addThoughtForm'
                className='card grey'
                onSubmit={handleFormSubmit}
            >
              <label htmlFor='addThought'>
                <h2>What's making you happy right now?</h2>
                    <textarea 
                        htmlFor='textField'
                        value={newThought} 
                        onChange={handleNewThought} 
                        placeholder ='Share your happy thought...'
                    />
                <button
                    className='form-button'
                    type='submit'
                    disabled={newThought.length < 5 || newThought.length > 140}
                >
                    <span className='heart-icon' role='img' aria-label='heart emoji'>❤️</span><span className='submit-message'>Send Happy Thought</span><span className='heart-icon' role='img' aria-label='heart emoji'>❤️</span>
                </button>
              </label>
            </form>
        </section>
    )

}


export default ThoughtForm
