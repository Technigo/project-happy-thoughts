import React, { useState, useEffect } from 'react';
import NewPost from './NewPost';
import PostList from './PostList';

//this container include new input area (form), as well as the list of posts
//this Component is used to 1) fetch happy thoughts API, 2) manage send POST for likes

const PostContainer = () => {
	const likes = (likesID) =>
		`https://project-happy-thoughts-api-fg6vuzfhaa-ez.a.run.app/thoughts/${likesID}/like`;
	const [newPost, setNewPost] = useState(''); //store new posts value
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]); //store all posts including the old and new

	/* creating a function here to 
    1)set the loading variable to true, 
    2)fetch posts API convert to json file, 
    3)set post list to it's value, 
    4)set loading value to false if everything went well  */
	const fetchPosts = () => {
		setLoading(true);
		fetch('https://project-happy-thoughts-api-fg6vuzfhaa-ez.a.run.app/thoughts')
			.then((res) => res.json())
			.then((data) => setPosts(data).reverse())
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};

	//use useEffect to call fetchPost function when this Component mounts(created and inserted) to the DOM
	useEffect(() => {
		fetchPosts();
	}, []);

	const handlePostSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				//http header fields
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newPost }),
		};

		fetch(
			'https://project-happy-thoughts-api-fg6vuzfhaa-ez.a.run.app/thoughts',
			options
		)
			.then((res) => res.json())
			.then(() => fetchPosts()) //if successful the fetchPosts will be fetched again
			.finally(() => setNewPost('')); //the new value will be set to an empty string
	};

	// the new posts input
	const onNewPostChange = (event) => {
		event.preventDefault();
		setNewPost(event.target.value); //getting the value of the new posts
	};

	//to complete the like and liked function
	const handleLiked = (likesID) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch(likes(likesID), options)
			.then((res) => res.json)
			/* .then() */
			.catch((error) => console.error(error))
			.finally(() => fetchPosts());
	};

	return (
		<div className="posts-container">
			<NewPost
				newPost={newPost}
				handlePostSubmit={handlePostSubmit}
				onNewPostChange={onNewPostChange}
			/>

			<PostList loading={loading} posts={posts} handleLiked={handleLiked} />
		</div>
	);
};

export default PostContainer;
