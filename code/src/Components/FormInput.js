import React from "react"

const setThought = (event, currentThought, setNewThought) => {
    if (currentThought.length ===! 140) {
        return
    }
    else {
        setNewThought(event.target.value)
    }
}

const FormInput = ({
  onFormSubmit,
  setCounterValue,
  newThought,
  setNewThought,
}) => {
  const RefreshBtn = () => {
    window.location.reload("Refresh") // Look 
}

return (
  <>
    <div className="container">
      <div className="submit-wrapper">
        <form onSubmit={((event) => setCounterValue(event.target.value.length), onFormSubmit)}
        >
          <label htmlFor="newThought">
            <p>What is making you happy right now?</p>
          </label>
          <textarea
            rows="4"
            id="newThought"
            type="text"
            autoFocus
            maxLength="140"
            placeholder="Write a happy thought"
            value={newThought}
            onChange={(event) => setThought(event, newThought, setNewThought)} 
          />  
 
          <p className="letter-counter">{newThought.length < 5 ? <span>Minimum 5 characters</span> : 140 - newThought.length}</p> 
          
          <button
            className="submit-btn"
            disabled={newThought.length < 5 || newThought.length > 140} //Boolean expression. If characters less than 5 or greater than 140, button is disabled.
            type="submit"
          >
            <span role="img" aria-label="heart">
            </span>Send<span role="img" aria-label="heart"></span>
          </button>
          
          <button className="refresh-btn" value="Refresh" onClick={RefreshBtn}>
          Refresh
        </button>
        
        </form>
      </div>
    </div>
  </>
)
}

export default FormInput
