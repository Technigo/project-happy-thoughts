import React from 'react';

const Form = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <div className="form-container">
            <form onSubmit={onFormSubmit}>
                <label htmlFor="input-box">What's making you happy right now?</label>
                <textarea
                    className="input-box" 
                    id="input-box" 
                    type="text"
                    value={messageNew} 
                    onChange={onMessageNewChange}
                    maxLength={140}  
                />
                <p className={messageNew.length >= 140 ? 'thought-length-long': 'thought-length-ok'} > {messageNew.length} / 140 </p>
                <button 
                    className="submit-button" 
                    type="submit">
                        <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
                </button>
            </form>
        </div>
    )
}

export default Form;