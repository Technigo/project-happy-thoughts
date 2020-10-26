import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PostLiked from './PostLiked';

const PostList = props => {
	const [messages, setMessages] = useState([]);
	const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
	//const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/${_id}/like`;

	useEffect(() => {
		//fetch from backend API
		fetch(MESSAGE_URL)
			.then(response => {
				return response.json();
			})
			//Set the state, data is an array of messages
			.then(data => {
				// const filteredData = data.filter(post => {
				// 	return post.message;
				// });
				// filteredData.reverse();
				// setMessages(filteredData);
				setMessages(data);
				console.log(data);
			});
	}, []);

	// const onLiked = id => {
	// 	fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
	// 		method: 'POST',
	// 		body: '',
	// 		headers: { 'Content-Type': 'application/json' },
	// 	});
	// };
	// console.log(fetch);

	return (
		<section className="message__container">
			{/* to print all messages send to backlog using POST */}

			{messages.map(post => (
				<article className="message__text" key={post._id}>
					{post.message}
					<span className="message__text__posted">
						{moment(post.createdAt).fromNow()}
					</span>
					<PostLiked hearts={post.hearts} id={post._id} />
					{/* <button onClick={onLiked(post._id)}>{post.hearts}</button> */}
					{/* <p>{post.hearts}</p>
					 <p>{post._id}</p> */}
				</article>
			))}
		</section>
	);
};

export default PostList;
