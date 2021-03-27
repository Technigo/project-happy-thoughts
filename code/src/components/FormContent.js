import React from 'react';

const FormContent = ({ newThought, onnewThoughtChange, thoughtLength, onFormSubmit }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor="happyThought">
                <p className="label-p">What's making you happy right now?</p>
            </label>
            <textarea maxLength="140" className="form-input"
                id="happyThought"
                type="text"
                value={newThought}
                onChange={onnewThoughtChange}
                placeholder="type here..."
            />
            <p className="maxlength-words">{thoughtLength}/140</p>
            <button className="submit-button" type="submit"><span className="heart-icon1" aria-label="heart-icon" role="img">❤️</span>Send Happy Thought<span className="heart-icon2" aria-label="heart-icon" role="img">❤️</span></button>
        </form>
    );
}

export default FormContent;