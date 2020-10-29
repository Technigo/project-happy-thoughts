import React, { useState, useEffect } from 'react';

import Moment from 'moment';

export const ThoughtsList = ({ hearts, id, message, time }) => {
	const [like, setNewLike] = useState(hearts);
	const [heartCount, setHearthCount] = useState(hearts);

	const postId = id;
	const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${postId}/like`;

	const handleLike = (event) => {
		fetch(LIKES_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		}).then(() => setNewLike(like + 1));

		setHearthCount(heartCount + 1);
	};

	return (
		<div className="message-container" key={id}>
			<p className="message">{message}</p>{' '}
			<p className="time">{Moment(time).fromNow()}</p>
			<button
				type="button"
				className="heart-button"
				onClick={() => handleLike(postId)}
				style={{
					background: heartCount > 0 ? '#ffadad' : '#f3f1f1',
				}}>
				<span aria-label="heart emoji" role="img">
					&#10084;&#65039;
				</span>
			</button>
			<p className="likes">x {heartCount}</p>
		</div>
	);
};
