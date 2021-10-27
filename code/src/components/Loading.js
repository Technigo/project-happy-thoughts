import React from 'react';
import heart from '../images/red-heart.png';

const LoadingItem = () => {
	return (
		<div className="loading-overlay">
			<img className="loading-heart" src={heart} alt="Red heart emoji" />
		</div>
	);
};

export default LoadingItem;