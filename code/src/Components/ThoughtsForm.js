import React from 'react'

const ThoughtsForm = ({ newThought, onNewThoughtChange, onThoughtSubmit }) => {
   
    return (
        <form onSubmit={onThoughtSubmit}>
            <div className="greetingcard">
            <h1> What's making you happy right now?</h1>
            <textarea placeholder="Minimum 6 characters"value={newThought} onChange={onNewThoughtChange}/>
            <div className="main">
            <button className="button" type="submit" disabled={newThought.length < 6 || newThought.length > 140}><span role="img" aria-label="heartemoji">❤️</span>Send Happy Thought!<span role="img" aria-label="heartemoji">❤️</span></button></div></div>
        </form>



        
    )
}

export default ThoughtsForm