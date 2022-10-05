import React from 'react';

const ThoughtsForm = ({ newThoughts, setnewThoughts }) => {

    const onNewThoughtsChange = (event) => {
        setnewThoughts(event.target.value)
        }

    return (
        <div className="inputWrapper">
        <h1>Whats making you happy right now?</h1>
        <textarea 
        value={newThoughts} 
        onChange={onNewThoughtsChange} 
        placeholder="Write your happy thought here..." />

            <div>
            <button type="submit">❤️Send happy thoughts❤️</button> 
            </div>
        </div>
    )
}

export default ThoughtsForm;