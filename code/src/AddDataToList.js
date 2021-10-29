import React, { useState, useEffect } from "react";
import List from "List";
import Create from "Create";
import Loading from "Loading";

const API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
const API_LIKE = (thoughtId) =>
	`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;



const AddDataToList = () => {
	const [posts, setPosts] = useState([]);  
	const [message, setMessage] = useState(''); 
	const [loading, setLoading] = useState(false);



/* Fetch data */

	useEffect(() => {
		Fetch();
	}, []);

	const Fetch = () => {
		setLoading(true);
		fetch(API)
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.finally(() => setLoading(false));
	};



/*  onClick event from message-box "Create" */

	const handleSubmitMessages = (e) => {
		e.preventDefault();
		e.target.reset()
		
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: message }),
			
		};

		fetch(API, options)
			.then((res) => res.json())
			.then((data) => {
				
				Fetch();
				setMessage("")
				
			});
			
	};



	/*   onClick event from like button "List" */

	const handleLikes = (thoughtId) => {
		const options = {
			method: 'POST',
		};

		fetch(API_LIKE(thoughtId), options)
			.then((res) => res.json())
			.then((data) => {
			
				Fetch();
			});
	};



/* Return Info from create and List */



	return (
	


	<div className="ContainerData"> 
<Create
handleSubmitMessages={handleSubmitMessages}
message={message}
setMessage={setMessage}


/>

<div>{loading && <Loading />}</div>


 
	{posts.map((post) => (

	<List 

	key={post._id}
	post={post}
	handleLikes={handleLikes}

	/> 
	
	)) }

</div>

	)
};

export default AddDataToList;
