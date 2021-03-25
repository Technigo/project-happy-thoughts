import React from 'react'

const ThoughtForm = ( { thoughtNew, onFormSubmit, onThoughtNewChange } ) => {
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor='newThought'>Write new thought</label>
            <input 
                id='newThought'
                type='text'
                value={thoughtNew}
                onChange={onThoughtNewChange}
            />
            <button type='submit'>Send</button>  
        </form>
    )
}

export default ThoughtForm