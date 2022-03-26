import React from "react";
import { CharCount } from "./CharCount";

export const ThoughtForm = ({onFormSubmit, checkKey, newThought, setNewThought}) => {

    
    return(
        <div className="formContainer">
            <form className="thoughtForm"onSubmit={onFormSubmit}>
                <label htmlFor="newThought">What's making you happy right now?</label>
                <textarea 
                id="newThought"
                type="text" 
                value={newThought} 
                onKeyDown={(event)=>checkKey(event)}
                onChange={event => setNewThought(event.target.value)} 
                placeholder ="What makes you happy today..."/>
                <div className="sendContainer">
                    <CharCount charCount={newThought.length} />
                    {(newThought.length > 0 && newThought.length < 5) && <p className="errorMsg">Minimum: 5 characters</p>}
                    {(newThought.length > 140) && <p className="errorMsg">Maximum: 140 characters</p>}
                </div>
                <button className="sendBtn" disabled={newThought.length < 5 || newThought.length > 140} type="submit"><span role="img" aria-label="heart emoji">❤️</span> Send Happy Thought <span role="img" aria-label="heart emoji">❤️</span></button>
            </form>
         </div>
    )
}