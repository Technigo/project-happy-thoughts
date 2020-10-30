import React, { useState } from 'react';

import Button from './Button';
import moment from 'moment';

const PostList = ({ postList, onLikeChange }) => {
	const [newLikes, setNewLikes] = useState(0);

	const handleLikeClick = id => {
		if (!localStorage[id]) {
			localStorage.setItem(id, 0);
			//return localStorage[id];
		}
		setNewLikes(newLikes + 1);
		onLikeChange(id);
		localStorage[id] = Number(localStorage[id]) + 1;
		//return localStorage[id];
	};

	return (
		<>
			{postList.map(post => (
				<article className="post" key={post._id}>
					<p className="post-text">{post.message}</p>

					<Button
						type="button"
						click={() => handleLikeClick(post._id)}
						//disabled={localStorage[id]}
						className={
							post.hearts > 5
								? 'superLiked'
								: post.hearts > 0
								? 'liked'
								: 'notLiked'
						}
						text=//{
						// <span className="heart-like" role="img" aria-label="Heart">
						{<img src="./assets/heart.svg" alt="heart icon" />}
						//{/* {'❤️'} */}
						// {/* </span> */}
						//}
					/>
					<div className="post-text-likes">
						<p className="post-total-likes">x {post.hearts}</p>
						<p className="post-my-likes">
							x {!localStorage[post._id] ? 0 : localStorage[post._id]} my likes
						</p>
					</div>

					<time className="post-text-posted">
						{moment(post.createdAt).fromNow()}
					</time>
				</article>
			))}
		</>
	);
};

export default PostList;
