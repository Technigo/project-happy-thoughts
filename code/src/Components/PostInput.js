import React, { useState } from 'react';

import Button from './Button';

import './Style.css';

const PostInput = ({ onMessageChange }) => {
	const [newPost, setNewPost] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		onMessageChange(newPost);
		setNewPost('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="post-input">
				<h1>What's making you happy right now?</h1>
				<textarea
					rows="4"
					className="post-message"
					value={newPost}
					placeholder="Type your happy thought...."
					onChange={event => setNewPost(event.target.value)}
				/>
			</label>

			<Button
				className="button-send-post"
				type="submit"
				text={
					<p>
						<img src="./assets/heart.svg" alt="heart icon" />
						Send happy thought
						<img src="./assets/heart.svg" alt="heart icon" />
					</p>
				}
				disabled={newPost.length < 6 || newPost.length > 140 ? true : false}
			/>

			<p className="post-message-length">
				<span
					className={
						newPost.length < 6 || newPost.length > 140
							? 'wrongLength'
							: 'goodLength'
					}
				>
					<strong>{140 - newPost.length}</strong>
				</span>
				/ 140
			</p>
		</form>
	);
};

export default PostInput;
