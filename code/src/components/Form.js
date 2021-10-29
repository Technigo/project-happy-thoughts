import React from 'react';
import  "./form.css"

export const Form = ({newThought, setNewThought, handleFormSubmit}) => {
    // when submitting form, handleFormSubmit function trigged, which is in App.js
    return (
        <form onSubmit={handleFormSubmit} className="form" >
            <p className="form-title">What makes you happy? &hearts;</p>
            <textarea 
                id="newThought"
                type="text" 
                maxLength="140"
                value={newThought}
                placeholder="Write your happy thought here"
                onChange={(e) => setNewThought(e.target.value)}
                />
            <p  style={{ color: newThought.length > 130 ? "red" : "green" }} >
                {newThought.length}/140
            </p>
            <button 
                className="form-button"
                type="submit" 
                disabled={newThought.length < 5 || newThought.length > 140} >
                    &hearts; Send &hearts;
            </button>
        </form>
    );
};


