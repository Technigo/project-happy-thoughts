import React, { useState } from 'react';
import Button from './Button';
//import moment from 'moment'; //to format the date

const PostLiked = ({ hearts, id }) => {
	const [likes, setLikes] = useState(hearts);
	const handleLikes = () => {
		fetch(`https://technigo-thoughts.herokuapp.com/thoughts/${id}/like`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		});
		setLikes(likes + 1);
	};
	return (
		<div>
			<Button
				type="button"
				click={handleLikes}
				text={
					<span role="img" aria-label="Heart">
						{' ❤️'}
					</span>
				}
			/>
			<p>x{likes}</p>
		</div>
	);
};

export default PostLiked;
