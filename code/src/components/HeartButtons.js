import React, { useState } from 'react';

export const HeartButtons = ({ id, hearts }) => {
	const [ like, setLike ] = useState(hearts);

	const clickLike = (event) => {
		fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
			method  : 'POST',
			body    : '',
			headers : { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then(() => {}, []);
		setLike((oldState) => oldState + 1);
	};

	return (
		<div>
			<button onClick={clickLike} className={like > 0 ? 'heart-button-like' : 'heart-button-no-like'}>
				<span className="heart" role="img" aria-label="Red heart">
					❤️
				</span>
			</button>
			<span className="amount-of-hearts">x {like}</span>
		</div>
	);
};
