import React from 'react'
import heart from '../assets/heart.png'

const ThoughtForm = ({onFormSubmit, setNewThought, newThought}) => {
    return (

      <form onSubmit={onFormSubmit} className="form-container" tabindex="0">
        <label htmlFor="newThought" className="label-form" tabindex="0">What's making you Happy right now?</label>
        <textarea 
          className="thought-input"
          id="newThought"
          type="text" 
          tabindex="0"
          value={newThought}
          onChange= {(e) => setNewThought(e.target.value)}
          ></textarea>
            
          <div className="button-count">
            <button disabled = {newThought.length<5  || newThought.length>140}type="submit" className="submit-button">
              <div className="send-wrapper">
                <img src={heart} alt="red heart" className="heart"></img> 
                <span className="send-happy">Send Happy Thought</span>
                <img src={heart} alt="red heart" className="heart"></img> 
              </div>
            </button>
            <p className="character-count">{newThought.length}/140</p>
          </div>
          
          
          {newThought.length <5 && (
            <p className="error-message"> Your message must be at least 5 characters long</p>
          )}
            {newThought.length >140 && (
            <p className="error-message"> Your message must be less than 140 characters long</p>
          )}
      </form>

    )

}

export default ThoughtForm