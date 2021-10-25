import React, { useState, useEffect } from "react";
import moment from "moment";

import { API_URL } from "utils/urls";

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => setThoughts(data));
	}, []);

	// console.log("Our data (thoughts)", thoughts);

	const onFormSubmit = (event) => {
		event.preventDefault();

		// console.log("Form submitted", { newThought });

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: newThought }),
		};

		fetch(API_URL, options)
			.then((response) => response.json())
			.then((data) => setThoughts([data, ...thoughts]));
	};

	return (
		<div>
			<form className="new-thought-container" onSubmit={onFormSubmit}>
				<label htmlFor="newThought">Type your thought</label>
				{/*prettier-ignore*/}
				<input
					id="newThought"
					type="text"
					value={newThought}
					onChange={(event) => setNewThought(event.target.value)}>
				</input>
				<button type="submit">Send thought!</button>
			</form>

			{thoughts.map((thought) => (
				<div className="thought-container" key={thought._id}>
					<p>{thought.message}</p>
					<div className="info-text-container">
						<button className="like-btn">
							<div className="heart-icon-container">
								<span className="heart-icon">❤️</span>
							</div>
							<span className="like-counter"> x {thought.hearts}</span>
						</button>
						<p>{moment(thought.createdAt).fromNow()}</p>
					</div>
				</div>
			))}
		</div>
	);
};
