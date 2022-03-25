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
					&#9829; Send Happy Thought &#9829;
				</button>
			</form>
		</div>
	);
};

// const SendThought = ({ onFormSubmit, newThought, setNewThought }) => {
// 	return (
// 		<div className='thought-container'>
// 			<form id='postThoughtForm' onSubmit={onFormSubmit}>
// 				<label className='thought-title'>
// 					What's making you happy?
// 					<textarea
// 						className='thought-input'
// 						id='newThought'
// 						type='text'
// 						maxLength='140'
// 						value={newThought}
// 						onChange={(event) => setNewThought(event.target.value)}
// 					/>
// 				</label>
// 				<button
// 					className='send-btn'
// 					//disabled={!(newThought.length >= 5 && newThought.length <= 140)}
// 					type='submit'
// 				>
// 					Send Happy Thought
// 				</button>

// 			</form>
// 		</div>
// 	);
// };

export default SendThought;
