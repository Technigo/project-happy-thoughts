import React, { useState } from 'react';
import Button from './Button';

const PostLiked = ({ hearts, id }) => {
	const [likes, setLikes] = useState(hearts);
	const handleLikes = () => {
		fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		});
		setLikes(likes + 1);
	};
	return (
		<div className="message__text__liked">
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
			<p className="message__text_likes">x {likes}</p>
		</div>
	);
};

export default PostLiked;
