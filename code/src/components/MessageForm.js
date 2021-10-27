import React from 'react'

const MessageForm =({ counter, newThought, onFormSubmit, onNewThoughtChange }) => {

return (
    <section className="thoughts-container">
    <form className="form" onSubmit={onFormSubmit}>
        <label className="input-label" htmlFor="newThought">What's making you happy right now?</label>
        <textarea
			className="new-message"
			cols="20"
			rows="5"
			maxLength="140"
			id="newMessage"
			type="text"
			placeholder="Your message should be between 5 and 140 characters long"
			value={newThought}
			onChange={onNewThoughtChange}
		/>
        <div className="counter-container">
			<p>{140-counter} / 140 characters left</p>
		</div>
        <button className="send-button" type="submit" disabled={newThought.length < 5}>
            <span aria-label="heart" role="img"> ❤️ </span> Send happy thought <span aria-label="heart" role="img"> ❤️ </span> </button>
    </form>
    </section>
    )  
}

export default MessageForm