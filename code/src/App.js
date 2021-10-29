import React, { useState, useEffect } from "react";

import { ThoughtForm } from "components/ThoughtForm";
import { ThoughtItem } from "components/ThoughtItem";
import { LoadingItem } from "components/LoadingItem";

import { API_URL, LIKES_URL } from "utils/urls";

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchThoughts();
	}, []);

	const fetchThoughts = () => {
		setLoading(true);
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => setThoughts(data))
			.finally(() => setLoading(false));
	};

	// console.log("Our data (thoughts)", thoughts);

	const handleFormSubmit = (event) => {
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
			.then((data) => {
				fetchThoughts(setNewThought(""));
			});
	};

	const handleLikesIncrease = (thoughtId) => {
		const options = {
			method: "POST",
		};

		fetch(LIKES_URL(thoughtId), options)
			.then((response) => response.json())
			.then((data) => {
				// v1 increase likes only
				const updatedThoughts = thoughts.map((item) => {
					if (item._id === data._id) {
						item.hearts += 1;
						return item;
					} else {
						return item;
					}
				});
				setThoughts(updatedThoughts);

				//v2 fetch all the 20 thoughts (all updates)
				//fetchThoughts();
			});
	};

	return (
		<main className="main-section">
			{loading && <LoadingItem />}
			{/*prettier-ignore*/}
			<ThoughtForm
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			<section className="thoughts-section">
				{/*prettier-ignore*/}
				{thoughts.map((thought) =>
					/*prettier-ignore*/
					<ThoughtItem
						key={thought._id}
						thought={thought}
						onLikesIncrease={handleLikesIncrease}
					/>
				)}
			</section>
		</main>
	);
};

// {thoughts.map((thought) => (
// 		<div className="thought-container" key={thought._id}>
// 			<p>{thought.message}</p>
// 			<div className="info-text-container">
// 				<button className="like-btn" onClick={() => onLikesIncrease(thought._id)}>
// 					{" "}
// 					<div className="heart-icon-container">
// 						<span className="heart-icon" aria-label="heart icon">
// 							❤️
// 						</span>
// 					</div>
// 					<span className="like-counter"> x {thought.hearts}</span>
// 				</button>
// 				<p className="time-info">{moment(thought.createdAt).fromNow()}</p>
// 			</div>
// 		</div>
// 	));}
