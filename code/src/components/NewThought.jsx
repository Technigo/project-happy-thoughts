import React, { useState } from 'react';

const NewThought = ({ onThoughtSend }) => {
    const [thoughtText, setThoughtText] = useState('');
    return (
        <article className="new-thought-box">
            <form onSubmit={(event) => onThoughtSend(thoughtText, event)}>
                <label htmlFor="thoughtInput">What is making you happy?</label>
                <textarea
                    className="thought-input"
                    onChange={(event) => setThoughtText(event.target.value)}
                    id="thoughtInput"
                    //autoFocus
                    maxLength="140"
                    placeholder="Message must be at least 5 charachters"
                ></textarea>
                <div className="button-charachter-box">
                    <button
                        className="send-button"
                        disabled={thoughtText.length < 5}
                        type="submit"                    >
                        <span className="send-button-text">Send Happy Thought</span>
                    </button>
                    <div>{thoughtText.length}/140</div>
                </div>
            </form>
        </article>
    )
}


export default NewThought