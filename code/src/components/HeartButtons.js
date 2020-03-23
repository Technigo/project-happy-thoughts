import React, { useState } from 'react';

export const HeartButtons = ({ id, hearts }) => {
	const [ like, setLike ] = useState(hearts);
	let [ yourLikes, setYourLikes ] = useState(0);

	const [ yourPreviousLikes, setYourPreviousLikes ] = useState(JSON.parse(localStorage.getItem(id)) + 0);

	localStorage.setItem(id, JSON.stringify(yourPreviousLikes));

	const clickLike = (event) => {
		fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
			method  : 'POST',
			body    : '',
			headers : { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then(() => {}, []);
		setLike((oldState) => oldState + 1);
		setYourLikes((oldState) => oldState + 1);
		setYourPreviousLikes((oldState) => oldState + 1);

		localStorage.setItem(id, JSON.stringify(yourPreviousLikes));
	};

	return (
		<div className="heart-container">
			<button onClick={clickLike} className={like > 0 ? 'heart-button-like' : 'heart-button-no-like'}>
				<span className="heart" role="img" aria-label="Red heart">
					❤️
				</span>
			</button>
			<div className="all-likes">
				<span className="amount-of-hearts">x {like}</span>
				<span className="your-likes">you liked this: x {yourPreviousLikes}</span>
			</div>
		</div>
	);
};
