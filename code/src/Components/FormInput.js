import React from "react"

const FormInput = ({
  onFormSubmit,
  setCounterValue,
  newThought,
  setNewThought,
}) => {
  const RefreshBtn = () => {
    window.location.reload("Refresh")
}
return (
  <>
    <div className="container">
      <span className="refresh-wrapper">
        
      </span>
      <div className="submit-wrapper">
        <form
          onSubmit={
            ((e) => setCounterValue(e.target.value.length), onFormSubmit)
          }
        >
          <label htmlFor="newThought">
            <p>What is making you...</p>
          </label>
          <textarea
            rows="4"
            id="newThought"
            type="text"
            placeholder="...happy right now?"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
          />
          <p className="letter-counter">{140 - newThought.length} / 140</p>
          
          <button
            className="submit-btn"
            disabled={newThought.length < 5 || newThought.length > 140} //Boolean expression. If characters less than 5 or greater than 140, button is disabled.
            type="submit"
          >
            <span role="img" aria-label="heart">
            </span>Send Happy Thought <span role="img" aria-label="heart"></span>
          </button>
          
          <button
          className="refresh-btn"
          value="Refresh"
          onClick={RefreshBtn}>
          Refresh
        </button>
        
        </form>
      </div>
    </div>
  </>
)
}

export default FormInput
