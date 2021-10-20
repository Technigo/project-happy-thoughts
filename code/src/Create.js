import React from "react";
import { useState } from "react";

const Create = () => {
	const [time, setTime] = useState("");
	const [message, setMessage] = useState("");
	const [hearts, setHearts] = useState("");

	const handleSubmit = (e) => {
		/*  e.preventDefault(); */
		const todo = { message, hearts };

		fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(todo),
		}).then(() => {
			console.log("new todo added");
		});
	};

	return (
		<div className="messageContainer" onSubmit={handleSubmit}>
			<div className="contentTextArea">
				<div>
					<label>What´s making you happy right now?</label>
				</div>

				<div className="TextArea">
					<textarea
						type="text"
						required
				
						minLength="3"
						maxLength="140"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				
				<div>
					<button className="PostBtn">  <span role='img' aria-label='heart-emoji'>
          ❤️ Send Happy Thought ❤️
        </span></button>
				</div>
			</div>
		</div>
	);
};

export default Create;
