import React, { useState } from 'react';
import moment from 'moment'; // this is to format the date
import './happyThought.css';

const url = 'https://technigo-thoughts.herokuapp.com/';

export const HappyThought = props => {
	const { message, hearts, createdAt, _id } = props.thought;
	const [clicks, setClicks] = useState(0);

	if (!localStorage[_id]) {
		localStorage.setItem(_id, 0);
	}

	const handleClick = () => {
		fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
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
			<p>
				<button
					className='btn liked-btn'
					onClick={handleClick}
					disable={clicks < 1}
				>
					<span role='img' aria-label='Heart'>
						{'❤️'}
					</span>
				</button>
				x {hearts} (you liked {localStorage[_id]} times)
			</p>
			<p>{moment(createdAt).fromNow()}</p>
		</article>
	);
};
