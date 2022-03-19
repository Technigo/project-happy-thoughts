import React, { useEffect, useState } from "react";
import moment from "moment";

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");

	useEffect(() => {
		fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
			.then((res) => res.json())
			.then((data) => {
				setThoughts(data);
			}, thoughts);
	});

	return (
		<main>
			<form>
				<label>Type your thought</label>
				<textarea
					name="newThought"
					type="text"
					rows="5"
					columns="150"
					value={newThought}
					onChange={(e) => setNewThought(e.target.value)}
				></textarea>
				<button>&hearts; Send Happy Thought! &hearts;</button>
			</form>

			<div className="thoughts-container">
				{thoughts.map((thought) => (
					<div key={thought._id}>
						<p>{thought.message}</p>
						<div>
							<button>&hearts;{thought.hearts}</button>
							<p>created at: {moment(thought.createdAt).fromNow()}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};
