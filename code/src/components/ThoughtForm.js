import React from "react";


const ThoughtForm = ({onFormSubmit, newThought, setNewThought, likeClick}) =>  {
const charactersLeft = 140  - newThought.length;

return (
    <div className="thought_wrapper">
         <form onSubmit ={onFormSubmit} >
             <label htmlFor="newThought" className="thought_question">
            What's making you happy right now?</label>


        <input 
                id="newThought"
                type= "text"
                value={newThought}
                className="add-thought_input-field"
                placeholder="Type your thoughts here..."
                onChange= {(event) => setNewThought(event.target.value)} 

       />

     <div className="inline-wrapper">
        <p
          className="characters"
          style={{
            color: charactersLeft < 0 && "red",
          }}
        >
        {charactersLeft} 
        </p>
      </div>
     
       <button className="add-thought_button" disabled={newThought.length < 5 } type="submit">
       <span role="img" aria-label="heart"> ❤️</span> Send thought
       <span role="img" aria-label="heart"> ❤️</span> </button>
    
    </form>
    </div>
); 
}; 

export default ThoughtForm; 