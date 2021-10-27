
import React from 'react';


const ThoughtForm = ({ onFormSubmit, newThought, setNewThought}) => {
    return (
        <form onSubmit={onFormSubmit}>
				<label htmlFor="newThought">Type your thought</label>
				<input
					id="newThought"
					type="text"
					value={newThought}
					onChange={(e) => setNewThought(e.target.value)}
				/>
				<button 
                disabled=
                {newThought.length < 4 || newThought.length >= 140}
                type="submit">
                    Send thought!
                </button>
			</form>

            //i validate text area by setting maxLength='140'


    )

}

export default ThoughtList