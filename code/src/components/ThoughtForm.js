import React from 'react'

const ThoughtForm = ({onSubmitThought, newThought, onNewThoughtChange}) => {
    return (
        <form onSubmit={onSubmitThought}>
            <label htmlFor="newThought"></label>
            <input
                id="newThought"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
                placeholder="type here"
            /> 
            <button type="submit">send</button> 
        </form>
    )
}

export default ThoughtForm