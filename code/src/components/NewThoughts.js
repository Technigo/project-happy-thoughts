import React from 'react'
import Loading from './Loading'

const NewThought = (props) => {
  const {onFormSubmit, newThought, setNewThought, loading} = props
    return (
      <div className="container">
        <form className="inner-container-form" onSubmit={onFormSubmit}>
          <label htmlFor="newThought">What's making you happy right now?</label>
          <textarea 
            id="newThought"
            type="text"
            value={newThought}
            className="thought-input"
            onChange={(e) => setNewThought(e.target.value)}/>
          <button 
            type="submit"
            disabled={newThought.length < 5 || newThought.length > 140}
            className="thought-btn">
              <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span> 
              Send happy thought 
              <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span>
          </button>
          {loading && <Loading />}
        </form>
      </div>
    )
}

export default NewThought;