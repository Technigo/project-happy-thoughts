import React, { useState } from 'react';
import Button from './Button';
import './Style.css';

const PostLiked = ({ hearts, id }) => {
	const [likes, setLikes] = useState(hearts);

	if (!localStorage[id]) {
		localStorage.setItem(id, 0);
	}
	//const [yourLikes, setYourLikes] = useState(Number(localStorage.getItem(id))); //starts with NaN

	// if (!yourLikes) {
	// 	localStorage.setItem(id, 0);
	// }

	const handleLikes = () => {
		fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		});
		setLikes(likes + 1);
		//	setYourLikes(yourLikes + 1);
		localStorage[id] = Number(localStorage[id]) + 1;
		//localStorage[id] = setYourLikes(yourLikes + 1);
		//console.log(localStorage[id]);
	};
	return (
		<div className="post-text-likes">
			<Button
				type="button"
				className="message__text__like__button"
				click={handleLikes}
				text={
					<span role="img" aria-label="Heart">
						{'❤️'}
					</span>
				}
			/>
			<p className="post-total-likes">x {likes}</p>
			<p className="post-my-likes">
				You liked this: x {localStorage[id]}
				{/* You liked this: x {yourLikes} */}
			</p>
		</div>
	);
};

export default PostLiked;
