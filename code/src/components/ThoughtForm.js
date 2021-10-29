import React from 'react'

const ThoughtForm = ({onFormSubmit, setNewThought, newThought}) => {

    return (

      <form onSubmit={onFormSubmit} className="form-container">
        <label htmlFor="newThought" className="label-form">What's making you Happy right now?</label>
        <textarea 
          className="thought-input"
          id="newThought"
          type="text" 
          value={newThought}
          onChange= {(e) => setNewThought(e.target.value)}
          ></textarea>
          <button disabled = {newThought.length<5 || newThought.length>140}type="submit" className="submit-button">
            <div className="send-wrapper">
              <img src="/assets/red-heart.png" alt="red heart" className="heart"></img> 
              <span className="send-happy">Send Happy Thought</span>
              <img src="/assets/red-heart.png" alt="red heart" className="heart"></img> 
            </div>
            
            </button>
      </form>
    )

}

export default ThoughtForm