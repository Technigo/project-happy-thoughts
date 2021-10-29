import React from "react";
import SubmitButton from "./SubmitButton";

const ThoughtForm = ({onFormSubmit, newThought, setNewThought}) =>  {

return (
    <div className="thought_wrapper">
    <form onSubmit ={onFormSubmit} >
            <label htmlFor="newThought" className="thought_question">Please share what's making you happy right now?</label>
            <input 
                id="newThought"
                type= "text"
                value={newThought}
                className="add-thought_input-field"
                placeholder="Type your thoughts here..."
                onChange= {(event) => setNewThought(event.target.value)} 
                maxLength= "140"
       />

       <button className="add-thought_button" disabled={newThought.length > 5 } type="submit"> ❤️ Send thought ❤️</button>
    
    </form>
    </div>
); 
}; 

export default ThoughtForm; 