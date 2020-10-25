import React from 'react';
import PostMessage from './PostMessage';
import PostList from './PostList';

export const App = () => {
	return (
		<main>
			<PostMessage />
			<PostList />
		</main>
	);
};
