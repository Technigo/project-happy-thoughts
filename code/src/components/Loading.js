import React from 'react';
import heart from '../images/red-heart.png';

// This is a function that runs when the page gets data from the API
const LoadingItem = () => {
	return (
		<div className="loading-overlay">
			{/* The loading function in the form of a heart */}
			<img className="loading-heart" src={heart} alt="Red heart emoji" />
		</div>
	);
};

export default LoadingItem;