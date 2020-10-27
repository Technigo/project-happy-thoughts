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
		<>
			<Button
				type="button"
				click={handleLikes}
				className={likes > 5 ? 'superLiked' : likes > 0 ? 'liked' : 'notLiked'}
				text={
					<span className="heart-like" role="img" aria-label="Heart">
						{'❤️'}
					</span>
				}
			/>
			<div className="post-text-likes">
				<p className="post-total-likes">x {likes}</p>
				<p className="post-my-likes">x {localStorage[id]} my likes</p>
			</div>
		</>
	);
};

export default PostLiked;
