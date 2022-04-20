import React, { useState } from 'react';

const NewThought = ({ onThoughtSend }) => {
    const [thoughtText, setThoughtText] = useState('');
    return (
        <article className="new-thought-box">
            <form className="new-thought-form" onSubmit={(event) => onThoughtSend(thoughtText, event)}>
                <label htmlFor="thoughtInput">What is making you happy?</label>
                <textarea
                    className="thought-input"
                    onChange={(event) => setThoughtText(event.target.value)}
                    id="thoughtInput"
                    maxLength="140"
                    placeholder="Message must be at least 5 charachters"
                ></textarea>
                <div className="button-charachter-box">
                    <button
                        className="send-button"
                        disabled={thoughtText.length < 5 || thoughtText.length > 140}
                        type="submit" >

                        <span role="img" aria-label="shiny heart emoji">
                            💖 </span>
                        Send Happy Thought
                        <span role="img" aria-label="shiny heart emoji">
                            💖 </span>
                    </button>  
                    <div>{thoughtText.length}/140</div>
                </div>
            </form>
        </article>
    )
}


export default NewThought