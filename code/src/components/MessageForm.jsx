import React from "react";

const MessageForm = ({ newMessage, onFormSubmit, setNewMessage }) => {
	return (
		<form onSubmit={onFormSubmit}>
			<label htmlFor="message">Type your thought here:</label>
			<input
				type="text"
				name="newMessage"
				id="message"
				minLength="5"
				maxLength="140"
				placeholder="Write something lovely"
				value={newMessage}
				onChange={(event) => setNewMessage(event.target.value)}
			/>
			<button disabled={newMessage.length < 5} type="submit">
				Send thought!
			</button>
		</form>
	);
};

export default MessageForm;
