import React from 'react'

const MessageForm =({ counter, newThought, onFormSubmit, onNewThoughtChange }) => {

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
        <div className="counter-container">
			<p>{140-counter} / 140 characters left</p>
		</div>
        <button className="send-button" type="submit" disabled={newThought.length < 5}>
            <span> ❤️ </span> Send thought! <span> ❤️ </span> </button>
    </form>
    )
}

export default MessageForm