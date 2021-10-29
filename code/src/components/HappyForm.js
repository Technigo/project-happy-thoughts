import React from 'react'
import './HappyForm.css'

const HappyForm = ({ onFormSubmit, newThought, setNewThought }) => {

  return (

      <form className="happyThoughtInput" onSubmit={onFormSubmit}>
        <label>
          Type happy thought
        <textarea
          row="2"
          minLength="4"
          maxLength="140"
          required
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
        />
        
        

        <button className="happyThoughtButton" disabled=
                {newThought.length < 4 || newThought.length > 140}
                type="submit">
                  Send thought!
        </button>
        </label>
      </form>
      );
    };

    export default HappyForm;