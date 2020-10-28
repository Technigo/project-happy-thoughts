import React, { useState, useEffect } from 'react';

import Moment from 'moment';

export const ThoughtsList = ({ hearts, id, message, time }) => {
	const [like, setNewLike] = useState(hearts);

	const LIKES_URL =
		'https://happy-thoughts-technigo.herokuapp.com/thoughts/{id}/like';

	useEffect(() => {
		handleLike();
	}, []);

	const handleLike = (event) => {
		fetch(LIKES_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		}).then(() => setNewLike(like + 1));
	};

	return (
		<div className="message-container" key={id}>
			<p className="message">{message}</p>{' '}
			<p className="time">{Moment(time).fromNow()}</p>
			<button
				type="button"
				className="heart-button"
				onClick={handleLike}
				style={{
					background: hearts > 0 ? '#ffadad' : '#f3f1f1',
				}}>
				<span aria-label="heart emoji" role="img">
					&#10084;&#65039;
				</span>
			</button>
			<p className="likes">x {hearts}</p>
		</div>
	);
};
