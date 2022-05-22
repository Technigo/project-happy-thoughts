import React from "react"

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
     
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="thoughtInput" className="form-title">What's making you happy right now?</label>
            <textarea
            id="thoughtInput"
            minLength="5"
            maxLength="140"
            spellCheck="false"
            value={newThought}
            placeholder="React is making me happy!"
            onChange={onNewThoughtChange}
            />
            <div className="button-container">
                <button
                type="submit"
                disabled={newThought.length < 5}
                className="submit-button"
                >
                    <span className="send-heart"
                    role="img"
                    aria-label="heart emoji">
                    💖
                    </span>
                    Send Happy Thought
                    <span className="send-heart"
                    role="img"
                    aria-label="heart emoji">
                    💖
                    </span>
                </button>
                <p className="characters">{140 - newThought.length}/140</p>
            </div>
            
        </form>
    )
}

export default ThoughtForm
