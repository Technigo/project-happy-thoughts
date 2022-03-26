import React from 'react';

const SendThought = ({ onFormSubmit, newThought, onSetThoughtChange }) => {
	return (
		<div className='thought-container form'>
			<form onSubmit={onFormSubmit}>
				<h2>What's making you happy?</h2>
				<textarea
					className='thought-input'
					id='new-thought'
					value={newThought}
					type='text'
					rows='3'
					//placeholder='My happy thought'
					onChange={onSetThoughtChange}
				/>

				{/* <p className='characters'>
					{newThought.length > 140}
					{newThought.length}/140
				</p> */}
				<button
					type='submit'
					className={newThought.length >= 5 ? 'send-btn' : 'send-btn disabled'}
					disabled={newThought.length < 5 || newThought.length > 140}
				>
					<span role='img' aria-label='heart'>
						❤️
					</span>{' '}
					Send Happy Thought{' '}
					<span role='img' aria-label='heart'>
						❤️
					</span>
				</button>
			</form>
		</div>
	);
};

export default SendThought;
