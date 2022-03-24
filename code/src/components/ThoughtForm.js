import React from "react";

const ThoughtForm = ( { onFormSubmit, newThought, setNewThought } ) => {
    return(

<main>
<form className="form-container" onSubmit={onFormSubmit}>
    <label className="happy-label" htmlFor="newThought">What is making you happy today?</label>
    <textarea
    className=" typing-area"
    id="newThought"
    type="text"
    value={newThought}
onChange={(event) => setNewThought(event.target.value)} maxLength="140"
placeholder="Type here..."
rows="1">
</textarea>

<div className="counter">
    <span className={newThought.length < 140}>
        {newThought.length}</span>140
    
</div>

<button 
className="big-button"

type="submit">
Send Happy Thought! 
</button>

</form>  
</main>
    
    );
};

export default ThoughtForm;