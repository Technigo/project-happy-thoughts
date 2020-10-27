import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PostLiked from './PostLiked';
import Loader from './Loader';
import './Style.css';

const PostList = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(true); //to show a loading circle when waiting for the fetch
	const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
	//const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/${_id}/like`;

	useEffect(() => {
		//fetch from backend API
		const posts = async () => {
			await fetch(MESSAGE_URL)
				.then(response => {
					return response.json();
				})
				//Set the state, data is an array of messages
				.then(data => {
					const filteredData = data.filter(post => {
						return post.message;
					});
					//filteredData.reverse();
					setMessages(filteredData);
					//setMessages(data);
					console.log(data);
					setLoading(false);
				})
				.catch(error => console.log('error', error));
		};
		posts();
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
		<>
			{isLoading ? (
				<>
					<Loader className="loader" />
					{/* {console.log('loading....')} */}
				</>
			) : (
				<>
					{/* to print all messages send to backlog using POST */}

					{messages.map(post => (
						<article className="post" key={post._id}>
							<p className="post-text">{post.message}</p>
							{/* <div className="post-text-info"> */}
							<PostLiked hearts={post.hearts} id={post._id} />
							<p className="post-text-posted">
								{moment(post.createdAt).fromNow()}
							</p>
							{/* </div> */}
							{/* <button onClick={onLiked(post._id)}>{post.hearts}</button> */}
							{/* <p>{post.hearts}</p>
				 			<p>{post._id}</p> */}
						</article>
					))}
				</>
			)}
		</>
	);
};

export default PostList;
