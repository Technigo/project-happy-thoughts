import React, { useState } from 'react';

import Button from './Button';
import moment from 'moment';

const PostList = ({ postList, onLikeChange }) => {
	const [newLikes, setNewLikes] = useState(0);

	const handleLikeClick = id => {
		if (!localStorage[id]) {
			localStorage.setItem(id, 0);
		}
		setNewLikes(newLikes + 1);
		onLikeChange(id);
		localStorage[id] = Number(localStorage[id]) + 1;
	};

	return (
		<>
			{postList.map(post => (
				<article className="post" key={post._id}>
					<h2 className="post-text">{post.message}</h2>
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
						text={<img src="./assets/heart.svg" alt="heart icon" />}
					/>

					<div className="post-text-likes">
						<p className="post-total-likes">x {post.hearts}</p>
						<p className="post-my-likes">
							{!localStorage[post._id]
								? ''
								: localStorage[post._id] < 2
								? `x ${localStorage[post._id]} your like`
								: `x ${localStorage[post._id]} your likes`}
						</p>
					</div>

					<time className="post-text-time">
						{moment(post.createdAt).fromNow()}
					</time>
				</article>
			))}
		</>
	);
};

export default PostList;
