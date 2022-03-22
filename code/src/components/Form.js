import React from 'react'

const Form = () => {
  return (
    <div className="form-div">
      <form>
        <label>
        <h1>What's making you happy right now?</h1>
          <input 
            type="text"
            name="message"
          />
        </label>
      </form>
      <button 
        type="submit" 
        className="form-button">
            ❤️ Send happy thought ❤️
      </button>
    </div>
  )
}

export default Form