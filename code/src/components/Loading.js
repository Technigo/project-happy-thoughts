import React from 'react';
import "../components/Loading.css"

const LoadingItem = () => {
	return (
		<div className="loading-overlay">
			<div className="loading-spinner" />
		</div>
	);
};

export default LoadingItem;
