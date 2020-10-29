import React, { useState } from 'react';

import Button from './Button';
import moment from 'moment';

const PostList = ({ postList, onLikeChange }) => {
	const [newLikes, setNewLikes] = useState(0); //added

	const handleLikeClick = id => {
		if (!localStorage[id]) {
			localStorage.setItem(id, 0);
		}
		setNewLikes(newLikes + 1);
		onLikeChange(id);
		localStorage[id] = Number(localStorage[id]) + 1;
		console.log(`localstorage finns inte`);
	};

	return (
		<>
			{postList.map(post => (
				<article className="post" key={post._id}>
					<p className="post-text">{post.message}</p>

					<Button
						type="button"
						click={() => handleLikeClick(post._id)}
						className={
							post.hearts > 5
								? 'superLiked'
								: post.hearts > 0
								? 'liked'
								: 'notLiked'
						}
						text={
							<span className="heart-like" role="img" aria-label="Heart">
								{'❤️'}
							</span>
						}
					/>
					<div className="post-text-likes">
						<p className="post-total-likes">x {post.hearts}</p>
						<p className="post-my-likes">
							x {!localStorage[post._id] ? 0 : localStorage[post._id]} my likes
						</p>
					</div>

					<p className="post-text-posted">{moment(post.createdAt).fromNow()}</p>
				</article>
			))}
		</>
	);
};

export default PostList;
