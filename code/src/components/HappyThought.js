import React, { useState } from 'react';
import moment from 'moment'; // this is to format the date
import './happyThought.css';

// const url = 'https://technigo-thoughts.herokuapp.com/';

export const HappyThought = props => {
	const { message, likes, createdAt, _id } = props.thought;
	const [clicks, setClicks] = useState(0);

	if (!localStorage[_id]) {
		localStorage.setItem(_id, 0);
	}

	const handleClick = () => {
		fetch(`https://technigo-thoughts.herokuapp.com/${_id}/likes`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' }
		}).then(() => {
			props.onLiked(_id);
			localStorage[_id] = Number(localStorage[_id]) + 1;
			setClicks(clicks + 1);
		});
	};

	return (
		<article className='happy-thought'>
			<h3>{message}</h3>
			<div className='thought-footer'>
				<p>
					<button onClick={handleClick}>
						<span role='img' aria-label='Heart'>
							{'❤️'}
						</span>
					</button>
					x {likes} (you liked {localStorage[_id]} times)
				</p>
				<p>{moment(createdAt).fromNow()}</p>
			</div>
		</article>
	);
};
