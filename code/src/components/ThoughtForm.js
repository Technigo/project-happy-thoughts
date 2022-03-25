import React from 'react'

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit, counter }) => {

    return (
        <form className="form card" onSubmit={onFormSubmit}>
            <div className="input-container">
                <label htmlFor="newThought">
                    What's making you happy right now?
                </label>
                <textarea 
                    className={
                        counter < 6 || counter > 140 ? 'disabled-textarea' : 'textarea'
                    }
                    rows="5"
                    columns="150"
                    id="newThought"
                    type="text"
                    value={newThought} 
                    onChange={onNewThoughtChange} 
                    placeholder="Please share your happiest thought."
                />
                <p className="characters-left">
                    {140 - counter} / 140 characters left
                </p>
                <div className="form-container">  
                    <button 
                        type="submit"
                        className="submit-button"
                        disabled={newThought.length < 6 || newThought.length > 140}
                        >
                        <span role="img" aria-label="heart">
                            {' '}
                            &#10084;&#65039; Send Happy Thought &#10084;&#65039;{' '}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ThoughtForm;