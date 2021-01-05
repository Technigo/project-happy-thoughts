import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import PostInput from './PostInput';
import PostList from './PostList';
import Filter from './Filter';
import { MESSAGE_URL } from '../Urls';
import Loader from './Loader';
import './Style.css';

export const App = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(true); //loading when waiting for fetch
	const [filter, setFilter] = useState('')
	const [page, setPage] = useState(0) //start on page 1 ADDED

	console.log(`page: ${page}`)
	console.log(`number of messages: ${messages.length}`)
	
	useEffect(() => {
		fetchMessages();
		// eslint-disable-next-line
	}, [filter, page]);

	const fetchMessages = () => {
		fetch(MESSAGE_URL + `?page=${page}&sort=${filter}`)
			.then(res => res.json())
			.then(data => {
				const filteredData = data.filter(post => post.message);
				setMessages(filteredData);
				setLoading(false);
			})
			.catch(error => console.error(error));
	};

	const postSingleMessage = (message, name) => {
		fetch(MESSAGE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: message, name: name }),
		})
			.then(() => fetchMessages())
			.catch(error => console.error(error));
	};

	const postSingleLike = id => {
		fetch(`https://happy-thoughts.herokuapp.com/thoughts/${id}/like`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(() => fetchMessages())
			.catch(error => console.error(error));
	};

	return (
		<main>
			<PostInput onMessageChange={postSingleMessage} />
			{isLoading ? (
				<Loader className="loader" />
			) : (
				<>
					<Filter onClick={(event) => setFilter(event.target.value)} /> 
					<InfiniteScroll
						pageStart={0}
						//loadMore={loadFunc}
						loadMore={() => setPage(page+1)}
						//hasMore={true || false}
						hasMore={true}
						loader={<div className="loader" key={0}>Loading ...</div>}
						//loader={<Loader/>}
					>
						<PostList postList={messages} onLikeChange={postSingleLike} /> 
					</InfiniteScroll>
				</>
			)}
		</main>
	);
};
