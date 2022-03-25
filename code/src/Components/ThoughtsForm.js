import React from 'react'

const ThoughtsForm = ({ newThought, onNewThoughtChange, onThoughtSubmit }) => {
   
    return (
        <form onSubmit={onThoughtSubmit}>
            {/* <h1>What's making you happy right now?</h1>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <button type="submit"> Send Happy Thought</button> */}


            <h1> What's making you happy right now?</h1>
            <textarea placeholder="Happy Happy Happy"value={newThought} onChange={onNewThoughtChange}/>
            <div className="main">
            <button className="button" type="submit"><span role="img" aria-label="heartemoji">❤️</span>Send Happy Thought!<span role="img" aria-label="heartemoji">❤️</span></button></div>
        </form>



        
    )
}

export default ThoughtsForm