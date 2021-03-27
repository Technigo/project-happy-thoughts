import React from 'react'

import './ThoughtsForm.css'

const ThoughtForm = ( { thoughtNew, onFormSubmit, onThoughtNewChange } ) => {
    return (
        <form className='toughts-form' onSubmit={onFormSubmit}>
            <label htmlFor='newThought'>What makes you happy right now?</label>
            <textarea
                id='newThought'
                type='text'
                value={thoughtNew}
                onChange={onThoughtNewChange}
                rows="3" 
                cols="30"
                maxlength="180"
            >
            </textarea>
            <button type='submit'><span>&#10084;&#65039; </span>Send happy thoughts<span> &#10084;&#65039;</span></button>  
        </form>
    )
}

export default ThoughtForm