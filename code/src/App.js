import React, { useEffect, useState } from "react";

import { API_LIKES, API_URL } from "./components/utils/urls";
import { ThoughtInput } from "components/ThoughtInput";
import { ThoughtList } from "components/ThoughtList";

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");

	useEffect(() => {
		fetchThoughts();
	}, []);

	const fetchThoughts = () => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: newThought }),
		};

		fetch(API_URL, options);
		fetchThoughts();
	};

	const handleLikesClick = (thoughtId) => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch(API_LIKES(thoughtId), options)
			.then((res) => res.json())
			.then(() => {
				// const updatedThougts = thoughts.map((item) => {
				// 	if (item._id === data._id) {
				// 		item.hearts += 1;
				// 		return item;
				// 	} else {
				// 		return item;
				// 	}
				// });

				// setThoughts(updatedThougts);

				fetchThoughts();
			});
	};

	return (
		<main>
			<ThoughtInput
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			<ThoughtList onLikesClick={handleLikesClick} thoughts={thoughts} />
		</main>
	);
};
