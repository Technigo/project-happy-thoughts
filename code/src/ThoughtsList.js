import React, { useState, useEffect } from 'react';

import Moment from 'moment';

export const ThoughtsList = ({ thoughtsList, onLikeChange }) => {
	const [newLike, setNewLike] = useState(0);

	const handleLike = (event) => {
		event.preventDefault();
		fetch(
			'https://happy-thoughts-technigo.herokuapp.com/thoughts/{postId}/like',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			}
		).then(() => onLikeChange(setNewLike));
	};

	return (
		<>
			{thoughtsList.map((item) => {
				return (
					<div className="message-container" key={item._id}>
						<p className="message">{item.message}</p>{' '}
						<p className="time">{Moment(item.createdAt).fromNow()}</p>
						<button
							type="button"
							className="heart-button"
							onClick={handleLike}
							style={{
								background: item.hearts > 0 ? '#ffadad' : '#f3f1f1',
							}}>
							<span aria-label="heart emoji" role="img">
								&#10084;&#65039;
							</span>
						</button>
						<p className="likes">x {item.hearts}</p>
					</div>
				);
			})}
		</>
	);
};
