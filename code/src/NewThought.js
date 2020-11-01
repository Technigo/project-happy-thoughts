import React from 'react'

export const NewThought = ({newThought, setNewThought, handleSubmit}) => { 

    return (
        <section className="newThoughtContainer">
            <form onSubmit={handleSubmit}>
                <label>
                <p>What's making you happy right now?</p>
                    <textarea 
                    placeholder="Write a happy thought..."
                    rows="3"
                    onChange={event => setNewThought(event.target.value)}
                    value={newThought}>
                    </textarea>
            </label> 

            <p className="characterCount"> 
                { // new message has to be at least 5 characters and maximum 140 characters
                newThought.length < 5 || newThought.length > 140}  
                {newThought.length} / 140
            </p>
            
            <button className="sendThought"
            type="submit"
            disabled={ // button will be disabled if the input field is empty, less than 5 characters or more than 140 characters
                newThought.length < 5 || newThought.length > 140 ? true : false}>
                <p>
                    <span className="heartIcon" role="img" aria-label="heart icon">❤️️ </span>
                    Send Happy Thought
                    <span className="heartIcon" role="img" aria-label="heart icon"> ❤️️</span>
                </p>
            </button>
            </form>   
        </section>
    )
}