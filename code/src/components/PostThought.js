/* eslint-disable */
import React from 'react';

const PostThought = ({newThought, onNewThoughtChange, onFormSubmit}) => {

return (
    <form onSubmit={onFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <textarea value={newThought} onChange={onNewThoughtChange} />
        <button type="submit">Send happy thought</button>
    </form>
)
}

export default PostThought;