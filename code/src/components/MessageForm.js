import React from 'react'

const MessageForm =({ newThought, onFormSubmit, onNewThoughtChange }) => {

return (
<form onSubmit={onFormSubmit}>
<label htmlFor="newThought">Type your thought</label>
<input
    id="newThought"
    type="text"
    value={newThought}
    onChange={onNewThoughtChange}
/>
<button type="submit">Send thought!</button>
</form>
    )
}

export default MessageForm