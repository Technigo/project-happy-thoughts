import React from 'react';

const SendThought = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<div>
			<form id='postThoughtForm' onSubmit={onFormSubmit}>
				<label className='thought-title'>
					What's making you happy right now?
					<textarea
						className='thought-input'
						id='newThought'
						type='text'
						maxLength='140'
						value={newThought}
						onChange={(event) => setNewThought(event.target.value)}
					/>
				</label>
				<button
					className='send-btn'
					//disabled={!(newThought.length >= 5 && newThought.length <= 140)}
					type='submit'
				>
					Send Happy Thought
				</button>
				 
			</form>
		</div>
	);
};

export default SendThought;
