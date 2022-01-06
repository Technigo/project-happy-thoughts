import React from 'react'

const ThoughtForm = ({onFormSubmit, setNewThought, newThought, newName, setNewName}) => {

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

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
          <input
            type='text' 
            placeholder='Your name (optional)'
            maxLength='20'
            value={newName}
            onChange={handleNewName}></input>
            
          <div className="button-count">
            <button disabled = {newThought.length<5 || newThought.length>140}type="submit" className="submit-button">
              <div className="send-wrapper">
                <img src="/assets/red-heart.png" alt="red heart" className="heart"></img> 
                <span className="send-happy">Send Happy Thought</span>
                <img src="/assets/red-heart.png" alt="red heart" className="heart"></img> 
              </div>
              
              </button>
            <p className="character-count">{newThought.length}/140</p>
          </div>
          
          
          {newThought.length <5 && (
            <p className="error-message"> Your message must be 5 characters long</p>
          )}
            {newThought.length >140 && (
            <p className="error-message"> Your message must be less thann 140 characters long</p>
          )}
      </form>

    )

}

export default ThoughtForm