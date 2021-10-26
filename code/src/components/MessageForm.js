import React from 'react'

const MessageForm =({ newThought, onFormSubmit, onNewThoughtChange }) => {

return (
<form className="form" onSubmit={onFormSubmit}>
<label className="input-label" htmlFor="newThought">Type your thought</label>
<input
    className="input"
    id="newThought"
    type="text"
    value={newThought}
    onChange={onNewThoughtChange}
/>
<button className="send-button" type="submit">Send thought!</button>
</form>
    )
}

export default MessageForm