import React from 'react';

const ThoughtsForm = ({handleFormSubmit, newThought, handleNewThoughtChange }) => {



    return (
        <form onSubmit={handleFormSubmit}>

        <div className="inputWrapper">
        <h1>Whats making you happy right now?</h1>

        <textarea
        value={newThought} //When we asign a value it alows us to tex clear it, make a input, 
        onChange={handleNewThoughtChange}
        placeholder="Write your happy thought here..." />

        <div>
        <button type="submit">❤️Send happy thoughts❤️</button> 
        </div>

        </div>
        </form>
    )
}

export default ThoughtsForm;