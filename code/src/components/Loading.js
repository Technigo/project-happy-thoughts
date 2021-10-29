import React from 'react'
import './Loading.css'


const Loading = () => {
	return (
		<div className="loading-overlay">
			<div className="lds-heart" />
		</div>
	)
}

export default Loading