import React from 'react'

const ThoughtForm = ({onFormSubmit, newThought, setNewThought, setCount, count}) => {

const checkKey = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
        onFormSubmit(event)
    }
}

    return (
        <div className="form-container">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="newThought">What's making you happy right now?</label>
          <textarea 
            id="newThought" 
            type="text"
            value={newThought} 
            onChange={(e) => setNewThought(e.target.value) || setCount(e.target.value.length)}
            onKeyDown={(event) => checkKey(event)}
          />
            <div className="form-bottom">
                <button disabled={count >= 140 || count <= 4} className="send-button" type="submit">
                    <span className="heart" role="img" aria-label="heart">❤️  </span>  
                    Send Happy Thought  
                    <span className="heart" role="img" aria-label="heart">  ❤️</span>
                </button>
                <p className="char-counter" style={{color: count >= 140 || count <= 4 ? 'red' : 'black'}}>{count} / 140</p>
            </div>
        </form>
      </div>
    )
}

export default ThoughtForm