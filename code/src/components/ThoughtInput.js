import React, { useState } from 'react';

const ThoughtInput = ( {onThoughtChange}) => {
    const [newThought, setNewThought] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onThoughtChange(newThought);
    }

    return (
        <form className="post" onSubmit={handleSubmit}>
            <label className="post-header" htmlFor="post">What's making you happy right now?</label>
            <input
                type="text"
                id="post"
                onChange={event => setNewThought(event.target.value)}
            />
            <div>
                <button className="submit-button" type="submit"><span role="img" aria-label="heart">❤️ Send happy thought❤️</span></button>
            </div>
        </form>
    )
}


export default ThoughtInput;